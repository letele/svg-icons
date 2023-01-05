import * as React from "react";

const SvgExcel = ({ title, titleId, ...props }) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M10 1H4.667A.67.67 0 0 0 4 1.667V4.5L10 8l3 1.266L16 8V4.5z"
      fill="#21a366"
      fillRule="nonzero"
    />
    <path d="M4 4.5h6V8H4z" fill="#107c41" />
    <path
      d="M15.333 1H10v3.5h6V1.667A.67.67 0 0 0 15.333 1z"
      fill="#33c481"
      fillRule="nonzero"
    />
    <path
      d="M10 8H4v6.333a.67.67 0 0 0 .667.667h10.666a.67.67 0 0 0 .667-.667V11.5z"
      fill="#185c37"
      fillRule="nonzero"
    />
    <path d="M10 8h6v3.5h-6z" fill="#107c41" />
    <g fillRule="nonzero">
      <path
        d="M8.333 3.5H4V13h4.333A.672.672 0 0 0 9 12.333V4.167a.672.672 0 0 0-.667-.667z"
        fillOpacity={0.094}
      />
      <g fillOpacity={0.2}>
        <path d="M7.833 4H4v9.5h3.833a.672.672 0 0 0 .667-.667V4.667A.672.672 0 0 0 7.833 4z" />
        <path d="M7.833 4H4v8.5h3.833a.672.672 0 0 0 .667-.667V4.667A.672.672 0 0 0 7.833 4z" />
        <path d="M7.333 4H4v8.5h3.333A.672.672 0 0 0 8 11.833V4.667A.672.672 0 0 0 7.333 4z" />
      </g>
      <path
        d="M.667 4h6.666A.67.67 0 0 1 8 4.667v6.666a.67.67 0 0 1-.667.667H.667A.67.67 0 0 1 0 11.333V4.667A.67.67 0 0 1 .667 4z"
        fill="#107c41"
      />
      <path
        d="m1.767 10.5 1.618-2.507L1.903 5.5h1.192l.81 1.593c.073.152.125.264.153.339h.01c.053-.121.11-.239.167-.353L5.1 5.5h1.095l-1.52 2.48 1.558 2.52H5.07l-.935-1.75a1.47 1.47 0 0 1-.111-.234h-.014c-.028.08-.064.155-.108.227L2.938 10.5z"
        fill="#fff"
      />
    </g>
    <path d="M0 0h16v16H0Z" fill="none" />
  </svg>
);

export default SvgExcel;
