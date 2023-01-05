import * as React from "react";

const SvgMedium = ({ title, titleId, ...props }) => (
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
    <path d="M4.542 3.495c2.471 0 4.474 2.017 4.474 4.505s-2.003 4.505-4.474 4.505C2.07 12.505.067 10.488.067 8S2.07 3.495 4.542 3.495Zm7.146.263c1.235 0 2.237 1.9 2.237 4.242s-1.001 4.242-2.237 4.242c-1.236 0-2.238-1.9-2.238-4.242s1.002-4.242 2.238-4.242zm3.458.442c.435 0 .787 1.701.787 3.8 0 2.098-.352 3.8-.787 3.8-.434 0-.787-1.701-.787-3.8 0-2.098.353-3.8.787-3.8z" />
  </svg>
);

export default SvgMedium;
