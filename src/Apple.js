import * as React from "react";

const SvgApple = ({ title, titleId, ...props }) => (
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
    <path d="M12.333 8.496c.022 2.403 2.107 3.202 2.13 3.213-.017.056-.333 1.139-1.098 2.257-.662.968-1.349 1.931-2.43 1.951-1.064.02-1.405-.63-2.62-.63-1.216 0-1.595.61-2.602.65-1.044.04-1.839-1.046-2.506-2.01C1.844 11.957.802 8.357 2.2 5.93c.695-1.207 1.937-1.97 3.285-1.99 1.025-.02 1.993.69 2.62.69.626 0 1.802-.853 3.039-.728.517.022 1.97.21 2.903 1.575-.075.046-1.733 1.012-1.715 3.02m-1.998-5.899c.554-.671.927-1.605.826-2.535-.8.032-1.766.533-2.34 1.204-.513.593-.963 1.544-.841 2.455.89.07 1.8-.452 2.355-1.124" />
  </svg>
);

export default SvgApple;
