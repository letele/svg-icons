import * as React from "react";

const SvgFillingFiles = ({ title, titleId, ...props }) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g transform="matrix(.0317 0 0 .0317 -.113 -.113)">
      <rect width={148} height={497} x={34} y={7.5} fill="#e4222e" rx={30} />
      <path
        fill="#c0232c"
        d="M152 7.5h-30a30 30 0 0 1 30 30v437a30 30 0 0 1-30 30h30a30 30 0 0 0 30-30v-437a30 30 0 0 0-30-30z"
      />
      <rect width={148} height={497} x={182} y={7.5} fill="#24b378" rx={30} />
      <path
        fill="#17a454"
        d="M300 7.5h-30a30 30 0 0 1 30 30v437a30 30 0 0 1-30 30h30a30 30 0 0 0 30-30v-437a30 30 0 0 0-30-30z"
      />
      <rect
        width={148}
        height={497}
        x={330}
        y={7.5}
        fill="#fed947"
        rx={30}
        style={{
          fill: "#fc0",
        }}
      />
      <path
        fill="#fed030"
        d="M448 7.5h-30a30 30 0 0 1 30 30v437a30 30 0 0 1-30 30h30a30 30 0 0 0 30-30v-437a30 30 0 0 0-30-30z"
        style={{
          fill: "#fc0",
        }}
      />
      <circle cx={108} cy={431} r={22.5} fill="#fff" />
      <path
        fill="#e1e1e3"
        d="M108 408.5a22.454 22.454 0 0 0-7.5 1.285 22.502 22.502 0 0 1 0 42.43A22.5 22.5 0 1 0 108 408.5z"
      />
      <circle cx={256} cy={431} r={22.5} fill="#fff" />
      <path
        fill="#e1e1e3"
        d="M256 408.5a22.454 22.454 0 0 0-7.5 1.285 22.502 22.502 0 0 1 0 42.43A22.5 22.5 0 1 0 256 408.5z"
      />
      <circle cx={404} cy={431} r={22.5} fill="#fff" />
      <path
        fill="#e1e1e3"
        d="M404 408.5a22.454 22.454 0 0 0-7.5 1.285 22.502 22.502 0 0 1 0 42.43A22.5 22.5 0 1 0 404 408.5z"
      />
      <rect width={88} height={209} x={64} y={37.5} fill="#fff" rx={10} />
      <rect width={88} height={209} x={212} y={37.5} fill="#fff" rx={10} />
      <rect width={88} height={209} x={360} y={37.5} fill="#fff" rx={10} />
      <path
        fill="#e1e1e3"
        d="M438 37.5h-19.48a10 10 0 0 1 10 10v189a10 10 0 0 1-10 10H438a10 10 0 0 0 10-10v-189a10 10 0 0 0-10-10zm-148 0h-19.48a10 10 0 0 1 10 10v189a10 10 0 0 1-10 10H290a10 10 0 0 0 10-10v-189a10 10 0 0 0-10-10zm-148 0h-19.48a10 10 0 0 1 10 10v189a10 10 0 0 1-10 10H142a10 10 0 0 0 10-10v-189a10 10 0 0 0-10-10z"
      />
      <path
        fill="#fed947"
        d="M418 75h-28a7.5 7.5 0 0 1 0-15h28a7.5 7.5 0 0 1 0 15zm0 30h-28a7.5 7.5 0 0 1 0-15h28a7.5 7.5 0 0 1 0 15z"
      />
      <path
        fill="#24b378"
        d="M270 75h-28a7.5 7.5 0 0 1 0-15h28a7.5 7.5 0 0 1 0 15zm0 30h-28a7.5 7.5 0 0 1 0-15h28a7.5 7.5 0 0 1 0 15z"
      />
      <path
        fill="#e4222e"
        d="M122 75H94a7.5 7.5 0 0 1 0-15h28a7.5 7.5 0 0 1 0 15zm0 30H94a7.5 7.5 0 0 1 0-15h28a7.5 7.5 0 0 1 0 15z"
      />
      <path
        fill="#fff"
        d="M137 313H79a7.5 7.5 0 0 1 0-15h58a7.5 7.5 0 0 1 0 15zm0 45H79a7.5 7.5 0 0 1 0-15h58a7.5 7.5 0 0 1 0 15zm148-45h-58a7.5 7.5 0 0 1 0-15h58a7.5 7.5 0 0 1 0 15zm0 45h-58a7.5 7.5 0 0 1 0-15h58a7.5 7.5 0 0 1 0 15zm148-45h-58a7.5 7.5 0 0 1 0-15h58a7.5 7.5 0 0 1 0 15zm0 45h-58a7.5 7.5 0 0 1 0-15h58a7.5 7.5 0 0 1 0 15z"
      />
    </g>
  </svg>
);

export default SvgFillingFiles;
