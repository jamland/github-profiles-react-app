import React from "react";

const NoMatch = () => {
  return (
    <div style={styles.text}>
      Nothing match with your search{" "}
      <span role="img" aria-label="confused">
        🤷🏽‍♂️
      </span>
    </div>
  );
};

const styles = {
  text: {
    opacity: ".75",
    fontSize: "1.5em",
    alignItems: "center",
    width: "100%",
    marginTop: "2em",
    textAlign: "center",
  },
};

export default React.memo(NoMatch);
