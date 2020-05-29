import React from "react";
import { useDebounce, useSetState } from "react-use";

import API from "../services/api";

export const AppContext = React.createContext(null);

const CORS_ERROR_NAME = "TypeError";
const CORS_ERROR_TEXT = "Failed to fetch";

const defaultState = {
  isLoading: false,
  error: false,
  data: null,
};

const initialState = {
  searchQuery: "",
  suggestionList: {
    total_count: 0,
    items: null,
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  profile: defaultState,
  repos: defaultState,
};

export const ContextProvider = props => {
  const { value: defaultPassedState } = props;
  const [state, setState] = useSetState({
    ...initialState,
    ...defaultPassedState,
  });

  // search for profiles when `searchQuery` changed
  // with debounce
  useDebounce(
    () => {
      const searchHandler = async query => {
        if (query.trim() === "") {
          setLoadingState("suggestionList", false);
          return;
        }

        // setState({
        //   suggestionList: {
        //     ...state.suggestionList,
        //     isLoaded: false,
        //   },
        // });

        try {
          const result = await API.searchForProfiles(query);
          const data = await result.json();

          setState({
            suggestionList: {
              ...data,
              isLoading: false,
              error: null,
              isLoaded: true,
            },
          });
        } catch (error) {
          const ErrorMsg =
            error.message === CORS_ERROR_TEXT && error.name === CORS_ERROR_NAME
              ? "Github blocks frequent requests"
              : error.message;
          setErrorState("suggestionList", ErrorMsg);
        }
      };

      searchHandler(state.searchQuery);
    },
    500,
    [state.searchQuery],
  );

  const getUserProfile = async username => {
    try {
      setErrorState("profile", null);
      setLoadingState("profile", true);

      const result = await API.getUserProfile(username);
      const data = await result.json();

      setState({ profile: { data, isLoading: false, error: null } });
    } catch (error) {
      const ErrorMsg =
        error.message === CORS_ERROR_TEXT && error.name === CORS_ERROR_NAME
          ? "Github blocks frequent requests"
          : error.message;
      setErrorState("profile", ErrorMsg);
    }
  };

  const getUserRepos = async username => {
    try {
      setErrorState("repos", null);
      setLoadingState("repos", true);

      const result = await API.getUserRepos(username);
      const data = await result.json();

      setState({ repos: { data, isLoading: false, error: null } });
    } catch (error) {
      setErrorState("repos", error.message);
    }
  };

  const setUsernameToState = searchQuery => setState({ searchQuery });

  const setSearchQuery = searchQuery => {
    setState(prevState => {
      if (prevState.searchQuery !== searchQuery)
        setLoadingState("suggestionList", true);
      return {
        searchQuery,
        profile: defaultState,
        repos: defaultState,
      };
    });
  };

  const setErrorState = (sourceName, error) =>
    setState({
      [sourceName]: {
        isLoading: false,
        data: null,
        error,
      },
    });

  const setLoadingState = (sourceName, isLoading) =>
    setState({
      [sourceName]: {
        ...state[sourceName],
        isLoading,
      },
    });

  return (
    <AppContext.Provider
      value={{
        state,
        setSearchQuery,
        getUserProfile,
        getUserRepos,
        setUsernameToState,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
