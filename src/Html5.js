import * as React from "react";

const SvgHtml5 = ({ title, titleId, ...props }) => (
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
      fill="#e44d26"
      d="M3.402 14.66 2.378 3.184h11.244l-1.025 11.475-4.604 1.276z"
    />
    <path fill="#f16529" d="m8 14.96 3.72-1.032.876-9.806H8Z" />
    <path
      fill="#ebebeb"
      d="M8 8.379H6.137L6.01 6.937H8V5.53H4.47l.034.378.346 3.878H8Zm0 3.655-.006.002-1.568-.424-.1-1.122H4.913l.197 2.21 2.884.8L8 13.5z"
    />
    <path d="M3.425.065h.715v.707h.654V.065h.715v2.14h-.715V1.49H4.14v.716h-.715zm3.025.71h-.63v-.71h1.975v.71h-.63v1.43H6.45Zm1.659-.71h.746l.458.752.459-.752h.746v2.14h-.713v-1.06l-.492.76h-.012l-.492-.76v1.06h-.7V.065Zm2.765 0h.715v1.433h1.006v.707h-1.721Z" />
    <path
      fill="#fff"
      d="M7.995 8.379v1.407h1.733l-.163 1.826-1.57.423V13.5l2.886-.8.02-.238.332-3.705.034-.378h-.38zm0-2.85v1.408h3.4l.028-.316.064-.713.034-.378z"
    />
  </svg>
);

export default SvgHtml5;
