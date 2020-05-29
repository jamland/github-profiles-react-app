import React from "react";

const WelcomeText = ({ error }) => {
  console.log("error", error);
  return (
    <div style={styles.text}>
      Search for github account.
      <br /> Try <i>Facebook</i> or <i>jamland</i>
      {!!error && <div style={styles.error}>Error: {error}</div>}
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
  error: {
    color: "#FF5733",
    fontWeight: "bold",
    fontSize: ".75em",
    marginTop: "1em",
  },
};

export default React.memo(WelcomeText);
