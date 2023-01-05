import * as React from "react";

const SvgFacebook = ({ title, titleId, ...props }) => (
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
      d="M15.117 16a.883.883 0 0 0 .883-.883V.883A.883.883 0 0 0 15.117 0H.883A.883.883 0 0 0 0 .883v14.234c0 .488.395.883.883.883h14.234"
      fill="#395185"
    />
    <path
      d="M11.04 16V9.804h2.08l.31-2.415h-2.39V5.848c0-.7.194-1.176 1.196-1.176h1.28v-2.16c-.222-.03-.981-.095-1.864-.095-1.844 0-3.106 1.125-3.106 3.192v1.78H6.461v2.415h2.085V16h2.494"
      fill="#fff"
    />
  </svg>
);

export default SvgFacebook;
