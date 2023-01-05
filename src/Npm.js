import * as React from "react";

const SvgNpm = ({ title, titleId, ...props }) => (
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
    <path fill="#cb3837" d="M.08 4.912v5.29h4.403v.886H8v-.886h7.92v-5.29Z" />
    <path
      fill="#fff"
      d="M2.71 5.798H.967v3.517H2.71v-2.63h.887v2.63h.886V5.798Zm2.66 0v4.404h1.774v-.887h1.743V5.798ZM8 8.428h-.856V6.685H8Zm3.517-2.63H9.774v3.517h1.743v-2.63h.886v2.63h.887v-2.63h.887v2.63h.887V5.798Z"
    />
  </svg>
);

export default SvgNpm;
