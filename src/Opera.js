import * as React from "react";

const SvgOpera = ({ title, titleId, ...props }) => (
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
        x1={116.844}
        y1={3.81}
        x2={116.844}
        y2={230.276}
        id="opera_svg__a"
        gradientTransform="scale(.9128 1.09553)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF1B2D" offset="30%" />
        <stop stopColor="#FA1A2C" offset="43.81%" />
        <stop stopColor="#ED1528" offset="59.39%" />
        <stop stopColor="#D60E21" offset="75.81%" />
        <stop stopColor="#B70519" offset="92.72%" />
        <stop stopColor="#A70014" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={195.453}
        y1={16.439}
        x2={195.453}
        y2={208.344}
        id="opera_svg__b"
        gradientTransform="scale(.87455 1.14344)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9C0000" offset="0%" />
        <stop stopColor="#FF4B4B" offset="70%" />
      </linearGradient>
    </defs>
    <path
      d="M85.9 200.1C71.7 183.4 62.6 158.7 62 131v-6c.6-27.7 9.8-52.4 23.9-69.1 18.4-23.8 45.4-34.5 75.9-34.5 18.8 0 36.5 1.3 51.5 11.3C190.8 12.4 161.1.1 128.5 0h-.5C57.3 0 0 57.3 0 128c0 68.6 54 124.7 121.9 127.9 2 .1 4.1.1 6.1.1 32.8 0 62.7-12.3 85.3-32.6-15 10-31.7 10.4-50.5 10.4-30.4.1-58.6-9.8-76.9-33.7z"
      fill="url(#opera_svg__a)"
      style={{
        fill: "url(#opera_svg__a)",
      }}
      transform="scale(.0625)"
    />
    <path
      d="M85.9 55.9c11.7-13.9 26.9-22.2 43.5-22.2 37.3 0 67.5 42.2 67.5 94.4s-30.2 94.4-67.5 94.4c-16.6 0-31.7-8.4-43.5-22.2 18.4 23.8 45.7 39 76.1 39 18.7 0 36.3-5.7 51.3-15.7C239.5 200 256 165.9 256 128c0-37.9-16.5-72-42.7-95.4-15-10-32.5-15.7-51.3-15.7-30.5 0-57.8 15.1-76.1 39z"
      fill="url(#opera_svg__b)"
      style={{
        fill: "url(#opera_svg__b)",
      }}
      transform="scale(.0625)"
    />
  </svg>
);

export default SvgOpera;
