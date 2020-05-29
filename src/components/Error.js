import React from "react";

const Error = ({ message = "" }) => {
  console.log(message.message);
  return (
    <div>
      Error Occured{" "}
      <span role="img" aria-label="sad">
        😕
      </span>
      <div>{message}</div>
    </div>
  );
};

export default React.memo(Error);
