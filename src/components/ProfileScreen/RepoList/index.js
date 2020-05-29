import React, { useContext } from "react";

import { AppContext } from "../../../context/App.context.js";
import Loader from "../../Loader";
import RepoListItem from "./RepoListItem";

const RepoList = props => {
  const { state } = useContext(AppContext);
  const url = props.match.url.replace(/\/$/, "");
  const repos = state.repos;

  if (repos.isLoading || !repos.data) return <Loader />;

  if (!repos.isLoading && repos.data.length === 0)
    return <div>No Repositories yet.</div>;

  const { data } = repos;
  return (
    <div data-testid="repo-list">
      <h3>{data.length} Repositories</h3>

      <ul style={styles.repoList}>
        {data.length > 0 &&
          data.map(repo => (
            <RepoListItem key={repo.id} repo={repo} url={url} />
          ))}
      </ul>
    </div>
  );
};

const styles = {
  repoList: {
    listStyle: "none",
  },
};

export default React.memo(RepoList);
