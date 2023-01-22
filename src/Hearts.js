import * as React from "react";

const SvgHearts = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g transform="translate(-.714 -.254)">
      <rect
        width={10.698}
        height={14.749}
        x={3.366}
        y={0.88}
        rx={0.537}
        ry={0.528}
        fill="#fff"
        stroke="#000"
        style={{
          strokeWidth: 0.5,
          strokeDasharray: "none",
        }}
      />
      <path d="M12.863 15.295c.21-.517.746-.827.746-1.417a.315.31 0 0 0-.63 0 .021.02 0 0 1-.043 0c0-.413.106-.444.2-.651h-.546c.094.207.2.238.2.651a.021.02 0 0 1-.043 0 .315.31 0 0 0-.63 0c0 .59.536.9.746 1.417z" />
      <path
        d="M-260 100c300 0 220 360 520 360M-175 0v-285a175 175 0 0 1 350 0v570a175 175 0 0 1-350 0z"
        stroke="#000"
        strokeWidth={80}
        strokeLinecap="square"
        strokeMiterlimit={1.5}
        fill="none"
        transform="matrix(.00557 0 0 .00548 6.809 4.247)"
      />
      <path d="M6.05 13.74c.556-1.367 1.973-2.188 1.973-3.746a.834.82 0 0 0-1.668 0 .056.055 0 0 1-.11 0c0-1.094.277-1.176.527-1.722H5.327c.25.546.528.628.528 1.722a.056.055 0 0 1-.111 0 .834.82 0 0 0-1.668 0c0 1.558 1.418 2.379 1.974 3.746z" />
      <path
        d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
        fill="red"
        transform="matrix(.0052 0 0 .00512 11.086 5.702)"
        style={{
          strokeWidth: 3.89276,
          strokeDasharray: "none",
        }}
      />
      <path
        d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
        fill="red"
        transform="matrix(.0017 0 0 .00167 4.5 2.243)"
        style={{
          strokeWidth: 3.89276,
          strokeDasharray: "none",
        }}
      />
      <path
        d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
        stroke="red"
        strokeWidth={80}
        strokeLinecap="square"
        strokeMiterlimit={1.5}
        fill="none"
        transform="matrix(-.00587 0 0 -.00577 10.846 12.103)"
        style={{
          strokeWidth: 3.89276,
          strokeDasharray: "none",
        }}
      />
    </g>
  </svg>
);

export default SvgHearts;
