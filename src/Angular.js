import * as React from "react";

const SvgAngular = ({ title, titleId, ...props }) => (
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
      d="M.483 2.67 7.9.029l7.617 2.596-1.233 9.813L7.9 15.972l-6.283-3.488Z"
      fill="#e23237"
    />
    <path d="M15.517 2.624 7.9.028v15.944l6.384-3.53z" fill="#b52e31" />
    <path
      d="M7.912 1.89 3.29 12.172l1.727-.029.928-2.32h4.146l1.016 2.35 1.65.029L7.912 1.89zm.012 3.294L9.486 8.45H6.549z"
      fill="#fff"
    />
  </svg>
);

export default SvgAngular;
