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
          strokeWidth: 0.3,
          strokeDasharray: "none",
        }}
      />
      <path d="M4.833 1.49c.248.61.88.976.88 1.671a.372.366 0 0 1-.744 0 .025.024 0 0 0-.05 0c0 .489.125.525.237.77H4.51c.112-.245.236-.281.236-.77a.025.024 0 0 0-.05 0 .372.366 0 0 1-.744 0c0-.695.633-1.061.881-1.671z" />
      <path
        d="M-260 100c300 0 220 360 520 360M-175 0v-285a175 175 0 0 1 350 0v570a175 175 0 0 1-350 0z"
        stroke="#000"
        strokeWidth={80}
        strokeLinecap="square"
        strokeMiterlimit={1.5}
        fill="none"
        transform="matrix(.00557 0 0 .00548 7.051 5.734)"
      />
      <path
        d="M-260 100c300 0 220 360 520 360M-175 0v-285a175 175 0 0 1 350 0v570a175 175 0 0 1-350 0z"
        stroke="#000"
        strokeWidth={80}
        strokeLinecap="square"
        strokeMiterlimit={1.5}
        fill="none"
        style={{
          stroke: "red",
        }}
        transform="matrix(-.00557 0 0 -.00548 10.378 10.773)"
      />
      <path d="M5.984 14.816c.571-1.404 2.027-2.247 2.027-3.848a.857.843 0 0 0-1.713 0 .057.056 0 0 1-.114 0c0-1.123.285-1.208.542-1.77H5.242c.257.562.542.647.542 1.77a.057.056 0 0 1-.114 0 .857.843 0 0 0-1.713 0c0 1.601 1.456 2.444 2.027 3.848z" />
      <path
        d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
        fill="red"
        transform="matrix(.00507 0 0 .00473 11.331 3.863)"
        style={{
          strokeWidth: 3.89276,
          strokeDasharray: "none",
        }}
      />
      <path
        d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
        fill="red"
        transform="matrix(.002 0 0 -.00197 12.696 13.518)"
        style={{
          strokeWidth: 3.89276,
          strokeDasharray: "none",
        }}
      />
    </g>
  </svg>
);

export default SvgHearts;
