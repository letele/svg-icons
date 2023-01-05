import * as React from "react";

const SvgLinkedin = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M13.632 13.632h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.961v3.777h-2.37V5.997H8.51v1.044h.031a2.494 2.494 0 0 1 2.246-1.234c2.403 0 2.846 1.58 2.846 3.637zM3.559 4.954a1.376 1.376 0 1 1 0-2.752 1.376 1.376 0 0 1 0 2.752m1.185 8.678H2.371V5.997h2.373ZM14.814 0H1.18A1.168 1.168 0 0 0-.001 1.154v13.69A1.168 1.168 0 0 0 1.179 16h13.635a1.17 1.17 0 0 0 1.185-1.155V1.153a1.17 1.17 0 0 0-1.185-1.154"
      fill="#0a66c2"
    />
  </svg>
);

export default SvgLinkedin;
