import * as React from "react";

const SvgGatsby = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#744c9e"
      d="M8 15.806A7.765 7.765 0 0 0 15.805 8 7.764 7.764 0 0 0 8 .194 7.763 7.763 0 0 0 .194 8 7.764 7.764 0 0 0 8 15.806ZM1.89 8.068l6.042 6.041c-3.326 0-6.041-2.715-6.041-6.041zM8 1.89a6.158 6.158 0 0 1 4.943 2.496l.012.016-.882.746a4.986 4.986 0 0 0-4.115-2.172H7.9A4.919 4.919 0 0 0 3.26 6.268l-.01.035 6.38 6.381c1.562-.543 2.783-1.9 3.122-3.53h-2.647V8h4.005a6.12 6.12 0 0 1-4.752 5.973l-7.33-7.33A6.119 6.119 0 0 1 7.999 1.89Z"
      style={{
        strokeWidth: 0.650473,
      }}
    />
  </svg>
);

export default SvgGatsby;
