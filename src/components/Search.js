import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import { AppContext } from "../context/App.context.js";

const Search = props => {
  const { state, setSearchQuery } = useContext(AppContext);

  const handleChange = e => {
    redirectToListScreen();
    setSearchQuery(e.target.value.trim());
  };

  const redirectToListScreen = () => {
    if (props.location.pathname !== "/") props.history.push("/");
  };

  return (
    <div>
      <div style={styles.wrapper}>
        <div className="row" style={styles.search}>
          <div className="column column-10" style={styles.searchTitle}>
            Search:
          </div>
          <div className="column">
            <input
              type="text"
              onChange={handleChange}
              value={state.searchQuery}
              placeholder="Enter username..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "0 .5em 1em 0",
    display: "flex",
    alignItems: "center",
    marginBotton: ".5em",
  },
  search: {
    padding: ".5em 0",
  },
  searchTitle: {
    margin: "0.5em 0 0",
  },
};

const SearchWithRouter = withRouter(Search);

export default React.memo(SearchWithRouter);
