import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/App.context.js";
import Loader from "../Loader";
import WelcomeText from "./WelcomeText";
import NoMatch from "./NoMatch";

const SearchResults = () => {
  const { state } = useContext(AppContext);

  if (state.suggestionList.isLoading) return <Loader />;

  if (state.searchQuery === "") return <WelcomeText />;

  if (state.suggestionList.total_count === 0 && state.suggestionList.isLoaded)
    return <NoMatch />;

  const isAnySuggestions = state.suggestionList.total_count;
  const suggestions = state.suggestionList.items;

  if (isAnySuggestions)
    return (
      <ul style={styles.list}>
        {suggestions.map(el => (
          <li key={el.id} style={styles.listItem}>
            <Link to={`/${el.login}`} style={styles.link}>
              <img
                style={styles.linkImage}
                src={el.avatar_url}
                width="80"
                alt={el.login}
              />
              {el.login}
            </Link>
          </li>
        ))}
      </ul>
    );

  return <WelcomeText error={state.suggestionList.error} />;
};

const styles = {
  list: {
    listStyle: "none",
  },

  listItem: {
    display: "flex",
    alignItems: "center",
  },

  link: {
    display: "flex",
    alignItems: "center",
    fontSize: "2em",
    borderBottom: "1px solid #eee",
    width: "100%",
    padding: ".15em 0 .5em",
  },

  linkImage: {
    marginRight: ".5em",
  },
};

export default SearchResults;
