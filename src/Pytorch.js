import * as React from "react";

const SvgPytorch = ({ title, titleId, ...props }) => (
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
      d="M12.632 4.685a6.575 6.575 0 0 1 0 9.318c-2.527 2.58-6.684 2.58-9.264 0a6.575 6.575 0 0 1 0-9.318L7.991.062v2.312l-.43.43-3.064 3.064c-1.935 1.9-1.935 5.017 0 6.952 1.9 1.935 5.017 1.935 6.952 0 1.935-1.9 1.935-5.017 0-6.952zm-2.312-.287a.86.86 0 1 1 0-1.72.86.86 0 0 1 0 1.72z"
      fill="#ee4c2c"
    />
  </svg>
);

export default SvgPytorch;
