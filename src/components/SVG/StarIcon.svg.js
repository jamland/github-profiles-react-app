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
      d="M21.926 19.6l6.17-5.99-8.509-1.25-3.81-7.702-3.812 7.702-8.509 1.25 6.17 5.99-1.472 8.488 7.622-4.012 7.602 4.012-1.452-8.489zm10.627-7.2c0 .296-.175.62-.525.969l-7.32 7.138 1.735 10.082c.013.094.02.228.02.403 0 .672-.275 1.008-.827 1.008-.255 0-.524-.08-.806-.242l-9.054-4.759-9.053 4.759c-.296.161-.565.242-.807.242-.282 0-.494-.097-.635-.292a1.188 1.188 0 01-.212-.716c0-.08.014-.215.04-.403l1.735-10.082-7.34-7.138C-.832 13.006-1 12.683-1 12.4c0-.498.376-.807 1.13-.928l10.121-1.472L14.788.827c.256-.551.585-.827.988-.827.404 0 .733.276.988.827L21.301 10l10.122 1.472c.753.121 1.13.43 1.13.928z"
      fill={fill}
      fillRule="nonzero"
    />
  </svg>
);

export default React.memo(SVG);
