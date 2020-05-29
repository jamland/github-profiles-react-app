import React from "react";

const SVG = ({
  style = {},
  fill = "currentcolor",
  width = "100%",
  className = "",
  height = "100%",
  viewBox = "0 0 32 32",
}) => (
  <svg
    viewBox={viewBox}
    width={width}
    height={height}
    style={style}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.548 25.068v4.614c0 .357-.13.666-.392.927-.26.26-.57.391-.927.391h-5.272c-.357 0-.666-.13-.927-.391s-.392-.57-.392-.927v-4.614c0-.357.13-.666.392-.927.26-.26.57-.391.927-.391h5.272c.357 0 .666.13.927.391s.392.57.392.927zm.617-21.75l-.576 15.818a1.327 1.327 0 01-.422.927 1.3 1.3 0 01-.938.392h-5.272a1.3 1.3 0 01-.937-.392 1.326 1.326 0 01-.423-.927l-.576-15.818a1.212 1.212 0 01.36-.927c.254-.26.56-.391.917-.391h6.59c.357 0 .663.13.917.391s.374.57.36.927z"
      fill={fill}
      fillRule="nonzero"
    />
  </svg>
);

export default React.memo(SVG);
