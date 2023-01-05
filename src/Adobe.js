import * as React from "react";

const SvgAdobe = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#F44336"
      d="M0 1v14h.089L5.753 1zm16 0h-5.84L16 15zM9.468 15h2.42L7.992 5.963l-2.574 6.308h2.876z"
    />
  </svg>
);

export default SvgAdobe;
