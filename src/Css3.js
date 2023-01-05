import * as React from "react";

const SvgCss3 = ({ title, titleId, ...props }) => (
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
      fill="#131313"
      d="M11.185.662h-.932l.97 1.051v.501H9.225v-.586h.969L9.225.576V.075h1.96zm-2.355 0h-.932l.97 1.051v.501H6.87v-.586h.97L6.87.576V.075h1.96zM6.5.686H5.493v.917h1.006v.611h-1.72V.074h1.72z"
    />
    <path
      fill="#1572b6"
      d="M3.408 14.652 2.386 3.191h11.228l-1.023 11.46-4.598 1.274z"
    />
    <path fill="#33a9dc" d="m8 14.95 3.716-1.03.874-9.792H8Z" />
    <path
      fill="#fff"
      d="M8 8.28h1.86l.129-1.44H8V5.436h3.525l-.034.377-.345 3.874H8Z"
    />
    <path
      fill="#ebebeb"
      d="m8.009 11.93-.007.003-1.565-.423-.1-1.121H4.926l.197 2.207 2.88.8.006-.003v-1.462Z"
    />
    <path
      fill="#fff"
      d="m9.74 9.626-.169 1.883-1.567.423v1.463l2.881-.8.022-.237.244-2.732z"
    />
    <path
      fill="#ebebeb"
      d="M8.005 5.435v1.406H4.61l-.029-.316-.064-.713-.033-.377ZM8 8.28v1.406H6.454l-.028-.316-.064-.713-.034-.377Z"
    />
  </svg>
);

export default SvgCss3;
