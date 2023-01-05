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
    <rect
      width={10.698}
      height={14.749}
      x={1.936}
      y={0.372}
      rx={0.537}
      ry={0.528}
      fill="#fff"
      stroke="#000"
      style={{
        strokeWidth: 0.172805,
        strokeDasharray: "none",
        fill: "none",
      }}
    />
    <path
      d="M-260 100c300 0 220 360 520 360M-175 0v-285a175 175 0 0 1 350 0v570a175 175 0 0 1-350 0z"
      stroke="#000"
      strokeWidth={80}
      strokeLinecap="square"
      strokeMiterlimit={1.5}
      fill="none"
      transform="matrix(.00143 0 0 .0014 2.88 1.583)"
    />
    <path d="M2.88 2.606c.1.245.355.393.355.673a.15.147 0 0 1-.3 0 .01.01 0 0 0-.02 0c0 .196.05.21.095.309h-.26c.046-.098.096-.113.096-.31a.01.01 0 0 0-.02 0 .15.147 0 0 1-.3 0c0-.28.255-.427.355-.672z" />
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
        strokeWidth: 0.172805,
        strokeDasharray: "none",
      }}
    />
    <path
      d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
      fill="red"
      transform="matrix(.00261 0 0 .00257 8.714 8.254)"
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
      transform="matrix(.00143 0 0 .0014 4.31 2.09)"
      style={{
        strokeWidth: 3.89276,
        strokeDasharray: "none",
      }}
    />
    <path
      d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
      fill="red"
      transform="matrix(.001 0 0 .00098 4.31 3.604)"
      style={{
        strokeWidth: 3.89276,
        strokeDasharray: "none",
      }}
    />
    <g
      style={{
        strokeWidth: 3.89276,
        strokeDasharray: "none",
      }}
    >
      <path
        d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
        stroke="red"
        strokeWidth={80}
        strokeLinecap="square"
        strokeMiterlimit={1.5}
        fill="none"
        transform="matrix(-.00143 0 0 -.0014 13.119 14.418)"
        style={{
          strokeWidth: 3.89276,
          strokeDasharray: "none",
        }}
      />
      <path
        d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
        fill="red"
        transform="matrix(-.001 0 0 -.00098 13.119 12.904)"
        style={{
          strokeWidth: 3.89276,
          strokeDasharray: "none",
        }}
      />
    </g>
  </svg>
);

export default SvgHearts;
