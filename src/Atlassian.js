import * as React from "react";

const SvgAtlassian = ({ title, titleId, ...props }) => (
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
      fill="#0052cc"
      d="M4.056 7.484.198 15.182a.46.46 0 0 0 .41.665h5.367a.439.439 0 0 0 .411-.258c1.163-2.386.463-6.02-1.57-8.19-.236-.252-.604-.237-.76.085Z"
    />
    <path
      fill="#0047b2"
      d="M4.402 7.227a.43.43 0 0 0-.345.258L.198 15.182a.46.46 0 0 0 .41.665h3.794Z"
    />
    <path
      fill="#0052cc"
      d="M10.048 15.85h5.342a.46.46 0 0 0 .411-.664S8.611.754 8.429.395C8.267.07 7.853.063 7.644.398c-3.75 5.93-.26 10.69 1.994 15.195a.458.458 0 0 0 .41.258Z"
    />
    <path
      fill="#0047b2"
      d="M8.063.15h-.02a.49.49 0 0 0-.4.249V.398c-3.75 5.93-.26 10.69 1.994 15.195.065.133.19.226.333.251V3.484L8.43.396A.42.42 0 0 0 8.062.15Z"
    />
  </svg>
);

export default SvgAtlassian;
