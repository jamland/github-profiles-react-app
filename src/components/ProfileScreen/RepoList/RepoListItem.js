import React from "react";
import { Link } from "react-router-dom";

const RepoListItem = ({ repo = {}, url = "" }) => {
  return (
    <li key={repo.id} style={styles.repoListItem}>
      <Link to={`${url}/${repo.id}`}>
        <h4 style={styles.title}>{repo.name}</h4>
      </Link>
      <div style={styles.description}>{repo.description}</div>

      <div style={styles.details}>
        <div className="row">
          <small className="column">
            {repo.language && (
              <span>
                <span role="img" aria-label="sad" style={styles.withMargin}>
                  🛠
                </span>
                {repo.language}
              </span>
            )}
          </small>
          <small className="column" />
          <small className="column" style={styles.updatedDate}>
            <span role="img" aria-label="sad" style={styles.withMargin}>
              🕐
            </span>
            Updated: {lastUpdated(repo.updated_at)}
          </small>
        </div>
      </div>
    </li>
  );
};

const lastUpdated = time => new Date(time).toLocaleDateString();

const styles = {
  repoListItem: {
    borderBottom: "1px solid #eee",
    marginBottom: "1em",
    paddingBottom: "1em",
    lineHeight: "1.5em",
    minHeight: "90px",
  },
  title: {
    marginBottom: "0.5em",
  },
  description: {
    marginBottom: "0.5em",
  },
  details: {
    opacity: ".75",
  },
  withMargin: {
    marginRight: ".5em",
  },
  updatedDate: {
    whiteSpace: "nowrap",
  },
};

export default React.memo(RepoListItem);
