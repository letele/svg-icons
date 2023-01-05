import * as React from "react";

const SvgYoutubeMusic = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlSpace="preserve"
    preserveAspectRatio="xMinYMin"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g transform="matrix(.0909 0 0 .0909 -.727 -.727)">
      <circle fill="red" cx={96} cy={96} r={88} />
      <path
        fill="#fff"
        d="M96 54.04c23.14 0 41.96 18.82 41.96 41.96S119.14 137.96 96 137.96 54.04 119.14 54.04 96 72.86 54.04 96 54.04M96 50c-25.41 0-46 20.59-46 46s20.59 46 46 46 46-20.59 46-46-20.59-46-46-46z"
      />
      <path fill="#fff" d="M80 73v46l39-24z" />
    </g>
  </svg>
);

export default SvgYoutubeMusic;
