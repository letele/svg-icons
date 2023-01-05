import * as React from "react";

const SvgVue = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    preserveAspectRatio="xMinYMin"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#41b883"
      d="M12.747 1.176h3.164L8 14.824.089 1.176H6.14L8 4.341l1.82-3.165Z"
    />
    <path
      fill="#41b883"
      d="M.089 1.176 8 14.824l7.911-13.648h-3.164L8 9.365 3.214 1.176Z"
    />
    <path
      fill="#35495e"
      d="M3.214 1.176 8 9.404l4.747-8.228H9.82L8 4.341 6.14 1.176Z"
    />
  </svg>
);

export default SvgVue;
