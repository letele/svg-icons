import * as React from "react";

const SvgYoutube = ({ title, titleId, ...props }) => (
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
    <defs>
      <linearGradient
        x1={107.289}
        y1={0}
        x2={107.289}
        y2={214.727}
        id="youtube_svg__a"
        gradientTransform="scale(1.19257 .83853)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E52D27" offset="0%" />
        <stop stopColor="#BF171D" offset="100%" />
      </linearGradient>
    </defs>
    <path d="m6.353 10.07 4.317-2.232-4.317-2.252Z" fill="#fff" />
    <path d="m6.353 5.586 3.787 2.526.53-.274z" opacity={0.12} fill="#420000" />
    <path
      d="M253.301 38.8s-2.499-17.6-10.196-25.4c-9.696-10.2-20.592-10.2-25.69-10.8C181.73 0 128.05 0 128.05 0h-.1S74.27 0 38.385 2.6c-4.998.6-15.894.6-25.69 10.8C5.098 21.2 2.599 38.8 2.599 38.8S0 59.6 0 80.3v19.4c0 20.7 2.599 41.4 2.599 41.4s2.499 17.6 10.196 25.4c9.696 10.2 22.491 9.9 28.189 10.9 20.492 2 86.966 2.6 86.966 2.6s53.779-.1 89.565-2.7c4.998-.6 15.894-.6 25.69-10.8 7.697-7.8 10.196-25.4 10.196-25.4S256 120.4 256 99.7V80.3c-.1-20.7-2.699-41.5-2.699-41.5Zm-151.74 84.4V51.3l69.172 36.1z"
      fill="url(#youtube_svg__a)"
      style={{
        fill: "url(#youtube_svg__a)",
      }}
      transform="matrix(.06238 0 0 .06238 .016 2.386)"
    />
  </svg>
);

export default SvgYoutube;
