import * as React from "react";

const SvgChrome = ({ title, titleId, ...props }) => (
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
        x1={127.47}
        y1={82.259}
        x2={127.47}
        y2={173.666}
        id="chrome_svg__a"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#86BBE5" offset="0%" />
        <stop stopColor="#1072BA" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M7.98.01s4.694-.211 7.182 4.507H7.58s-1.43-.046-2.653 1.69c-.351.728-.728 1.479-.305 2.958-.61-1.034-3.239-5.611-3.239-5.611S3.237.196 7.98.009z"
      fill="#ef3f36"
    />
    <path
      d="M14.919 11.987s-2.166 4.172-7.494 3.965l3.792-6.565s.757-1.216-.136-3.143c-.455-.67-.918-1.37-2.41-1.742 1.2-.011 6.478 0 6.478 0s1.977 3.285-.23 7.485z"
      fill="#fcd900"
    />
    <path
      d="M1.074 12.02s-2.53-3.961.313-8.473l3.79 6.566s.676 1.264 2.79 1.453c.805-.06 1.643-.11 2.714-1.214-.59 1.045-3.239 5.61-3.239 5.61s-3.836.07-6.368-3.942z"
      fill="#61bc5b"
    />
    <path
      d="m7.422 15.992 1.067-4.45s1.172-.093 2.155-1.17c-.61 1.073-3.222 5.62-3.222 5.62z"
      fill="#5ab055"
    />
    <path
      d="M4.407 8.05a3.553 3.553 0 1 1 7.107 0 3.553 3.553 0 0 1-7.107 0Z"
      fill="#fff"
    />
    <path
      d="M80.004 129.056c0-26.198 21.234-47.467 47.468-47.467 26.198 0 47.467 21.234 47.467 47.467 0 26.199-21.233 47.468-47.467 47.468-26.199 0-47.468-21.269-47.468-47.468z"
      fill="url(#chrome_svg__a)"
      style={{
        fill: "url(#chrome_svg__a)",
      }}
      transform="translate(.016 .007) scale(.06232)"
    />
    <path
      d="m15.147 4.504-4.391 1.288s-.663-.972-2.087-1.288c1.235-.007 6.478 0 6.478 0z"
      fill="#eaca05"
    />
    <path
      d="M4.537 9.002C3.92 7.934 1.383 3.554 1.383 3.554L4.635 6.77s-.333.687-.208 1.67z"
      fill="#df3a32"
    />
  </svg>
);

export default SvgChrome;
