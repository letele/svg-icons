import * as React from "react";

const SvgMastercard = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="#ff5f00" d="M10.141 11.98H5.86V4.02h4.282z" />
    <path
      fill="#eb001b"
      d="M6.13 8A4.885 5.053 0 0 1 8 4.02 4.894 5.062 0 0 0 .082 8 4.894 5.062 0 0 0 8 11.98 4.887 5.054 0 0 1 6.131 8Z"
    />
    <path
      fill="#f79e1b"
      d="M15.918 8A4.894 5.062 0 0 1 8 11.98 5.117 5.117 0 0 0 9.87 8 5.117 5.117 0 0 0 8 4.02 4.894 5.062 0 0 1 15.918 8Z"
    />
  </svg>
);

export default SvgMastercard;
