import * as React from "react";

const SvgWebpack = ({ title, titleId, ...props }) => (
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
      fill="#8ed6fb"
      d="M14.7 12.287 8.282 15.92v-2.83l3.993-2.198Zm.44-.397V4.298L12.79 5.655v4.88l2.347 1.354zm-13.84.397 6.412 3.63V13.09l-3.994-2.198Zm-.44-.397V4.298L3.21 5.655v4.88Zm.276-8.084L7.718.08v2.735L3.5 5.135l-.034.019zm13.726 0L8.282.08v2.735L12.5 5.134l.034.018 2.33-1.346z"
    />
    <path
      fill="#1c78c0"
      d="m7.718 12.447-3.946-2.171V5.978l3.946 2.273Zm.564 0 3.946-2.169v-4.3L8.282 8.251ZM4.04 5.486 8 3.306l3.96 2.18L8 7.769Z"
    />
  </svg>
);

export default SvgWebpack;
