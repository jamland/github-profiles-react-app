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
      d="M21 10.667c0-1.473-.52-2.73-1.563-3.771-1.041-1.042-2.298-1.563-3.77-1.563-1.473 0-2.73.521-3.771 1.563-1.042 1.042-1.563 2.298-1.563 3.77 0 1.473.521 2.73 1.563 3.771C12.937 15.48 14.194 16 15.666 16c1.473 0 2.73-.52 3.771-1.563C20.48 13.396 21 12.14 21 10.668zm5.333 0c0 1.514-.229 2.757-.687 3.729L18.062 30.52c-.222.458-.552.82-.99 1.083a2.676 2.676 0 01-1.405.396c-.5 0-.97-.132-1.407-.396a2.4 2.4 0 01-.968-1.083L5.688 14.396C5.229 13.424 5 12.18 5 10.666c0-2.944 1.042-5.458 3.125-7.541S12.722 0 15.667 0c2.944 0 5.458 1.042 7.541 3.125 2.084 2.083 3.125 4.597 3.125 7.542z"
      fill={fill}
      fillRule="nonzero"
    />
  </svg>
);

export default React.memo(SVG);
