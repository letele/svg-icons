import * as React from "react";

const SvgFedora = ({ title, titleId, ...props }) => (
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
      d="M15.958 8A7.958 7.958 0 0 0 .042 7.995v6.158a1.809 1.809 0 0 0 1.81 1.805h6.151A7.958 7.958 0 0 0 15.958 8"
      fill="#294172"
    />
    <path
      d="M10.336 1.926A3.737 3.737 0 0 0 6.603 5.66v1.982H4.63a3.737 3.737 0 0 0-3.733 3.733 3.737 3.737 0 0 0 3.733 3.733 3.737 3.737 0 0 0 3.733-3.733V9.393h1.973a3.737 3.737 0 0 0 3.733-3.734 3.737 3.737 0 0 0-3.733-3.733zm-3.719 9.448a1.99 1.99 0 0 1-1.987 1.987 1.99 1.99 0 0 1-1.987-1.987A1.99 1.99 0 0 1 4.63 9.387h1.973v.006h.014zm3.72-3.728H8.362v-.005H8.35V5.659a1.99 1.99 0 0 1 1.987-1.986 1.99 1.99 0 0 1 1.987 1.986 1.99 1.99 0 0 1-1.987 1.987z"
      fill="#3c6eb4"
    />
    <path
      d="M11.161 2.04a2.97 2.97 0 0 0-.825-.111 3.735 3.735 0 0 0-3.735 3.734v1.98H5.037a.871.871 0 0 0-.881.87c0 .484.39.869.872.869h1.295c.154 0 .279.125.279.278v1.713a1.972 1.972 0 0 1-1.972 1.968c-.368 0-.46-.048-.71-.048-.53 0-.883.354-.883.841 0 .403.346.75.768.86.29.075.512.11.825.11a3.735 3.735 0 0 0 3.735-3.734V9.39H9.93a.871.871 0 0 0 .882-.87.867.867 0 0 0-.873-.868H8.643a.278.278 0 0 1-.278-.279V5.66a1.972 1.972 0 0 1 1.971-1.968c.369 0 .46.048.711.048.529 0 .882-.354.882-.84 0-.403-.345-.75-.768-.86"
      fill="#fff"
    />
  </svg>
);

export default SvgFedora;
