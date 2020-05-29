import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AppContext } from "../../context/App.context.js";
import RepoList from "./RepoList";
import RepoDetails from "./RepoDetails";
import Loader from "../Loader";
import Error from "../Error";
import ProfileDetails from "./ProfileDetails";

import "./index.css";

const ProfileScreen = props => {
  const { username } = props.match.params;
  const url = props.match.url.replace(/\/$/, "");
  const {
    state,
    getUserProfile,
    getUserRepos,
    setUsernameToState,
  } = useContext(AppContext);
  const { profile } = state;

  useEffect(() => {
    setUsernameToState(username);
    getUserProfile(username);
    getUserRepos(username);
  }, []);

  console.log("profile", profile);

  if (profile.error) return <Error message={profile.error} />;

  if (profile.isLoading || !profile.data) return <Loader />;

  return (
    <div className="container">
      <div className="row">
        <div className="column column-33 profile-details">
          <ProfileDetails profile={profile.data} />
        </div>

        <div className="column ">
          <Switch>
            <Route exact path={`${url}/`} component={RepoList} />
            <Route exact path={`${url}/:repoId`} component={RepoDetails} />
            <Route render={() => <Redirect to={`${url}/`} />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
