import * as React from "react";

const SvgR = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="R_svg__a"
        x1={78.821}
        x2={189.14}
        y1={35.285}
        y2={158.43}
        gradientTransform="scale(1.23332 .81082)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#C9CBCE" />
        <stop offset="100%" stopColor="#7B7A81" />
      </linearGradient>
    </defs>
    <path
      fill="url(#R_svg__a)"
      d="M149.333 149.333c-53.333 0-98.659-26.713-98.659-58.713S90.667 32 144 32c67.357 0 98.572 25.911 98.572 57.911s-34.407 59.422-93.239 59.422M128 0C58.667 0 0 37.333 0 85.333c0 45.334 58.312 82.969 127.646 82.969 69.333 0 128.354-34.969 128.354-82.969C256 37.333 197.333 0 128 0"
      style={{
        fill: "url(#R_svg__a)",
      }}
      transform="matrix(.0618 0 0 .0618 .089 2.038)"
    />
    <path
      fill="#2165b6"
      d="M6.637 5.241v8.721h2.635v-3.391c.66 0 1.052-.144 1.483.646.659 1.13 1.482 2.745 1.482 2.745h3.13s-1.977-3.23-2.141-3.391c-.304-.323-.66-.323-1.153-.485.988-.161 1.91-.571 2.23-1.45.28-.808.247-1.835-.353-2.524-.52-.545-1.054-.871-2.371-.871zm2.635 1.816h1.73c.41 0 .741.404.741.808s-.33.807-.741.807h-1.73z"
    />
  </svg>
);

export default SvgR;
