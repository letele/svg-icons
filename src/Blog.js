import * as React from "react";

const SvgBlog = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      style={{
        fill: "none",
        fillRule: "evenodd",
        stroke: "#646464",
        strokeWidth: 1.24425,
        strokeLinecap: "round",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      d="M15.67 4.544a6.582 6.582 0 0 1 5.086 5.353m3.32 0a9.873 9.873 0 0 0-8.407-8.695"
      transform="translate(-9.5 .34)"
    />
    <path
      style={{
        fill: "none",
        fillRule: "evenodd",
        stroke: "#f76900",
        strokeWidth: 1.24425,
        strokeLinecap: "round",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      d="M14.263 7.683a3.291 3.291 0 1 1-3.29 3.29V2.817"
      transform="translate(-9.5 .34)"
    />
  </svg>
);

export default SvgBlog;
