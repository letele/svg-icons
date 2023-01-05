import * as React from "react";

const SvgVisualStudio = ({ title, titleId, ...props }) => (
  <svg
    height="1em"
    viewBox="-11.9 -2 16 16"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M-11.656 3.633s-.385-.277.077-.648l1.077-.963s.308-.324.634-.042L.069 9.504v3.607s-.005.567-.732.504z"
      fill="#2489ca"
    />
    <path
      d="m-9.095 5.959-2.561 2.328s-.263.196 0 .546l1.189 1.082s.282.303.7-.042l2.715-2.06Z"
      fill="#1070b3"
    />
    <path
      d="M-4.598 5.978.099 2.39l-.03-3.588s-.201-.783-.87-.376l-6.251 5.69Z"
      fill="#0877b9"
    />
    <path
      d="M-.663 13.62c.273.28.603.188.603.188l3.66-1.804c.47-.32.404-.716.404-.716V.517c0-.474-.485-.637-.485-.637L.346-1.65C-.347-2.078-.8-1.573-.8-1.573s.584-.42.87.376v14.242c0 .098-.021.195-.063.281-.084.169-.265.326-.7.26z"
      fill="#3c99d4"
    />
  </svg>
);

export default SvgVisualStudio;
