import * as React from "react";

const SvgGit = ({ title, titleId, ...props }) => (
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
      d="M15.663 7.29 8.71.337c-.4-.4-1.05-.4-1.45 0L5.815 1.78l1.831 1.832A1.218 1.218 0 0 1 9.19 5.166l1.765 1.765a1.219 1.219 0 0 1 1.261 2.016 1.22 1.22 0 0 1-1.992-1.328L8.577 5.973v4.332a1.22 1.22 0 1 1-1.004-.035V5.897a1.22 1.22 0 0 1-.663-1.6L5.106 2.49.337 7.258c-.4.401-.4 1.05 0 1.451l6.954 6.954c.4.4 1.05.4 1.45 0l6.922-6.921c.4-.401.4-1.051 0-1.452"
      fill="#de4c36"
    />
  </svg>
);

export default SvgGit;
