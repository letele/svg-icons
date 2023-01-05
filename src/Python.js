import * as React from "react";

const SvgPython = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    preserveAspectRatio="xMinYMin"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="python_svg__a"
        x1={24.715}
        x2={151.136}
        y1={22.897}
        y2={148.336}
        gradientTransform="scale(.99889 1.00111)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#387EB8" />
        <stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient
        id="python_svg__b"
        x1={102.483}
        x2={238.259}
        y1={103.266}
        y2={231.905}
        gradientTransform="scale(.99889 1.00111)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#FFE052" />
        <stop offset="100%" stopColor="#FFC331" />
      </linearGradient>
    </defs>
    <path
      fill="url(#python_svg__a)"
      d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
      style={{
        fill: "url(#python_svg__a)",
      }}
      transform="translate(.065 .11) scale(.06207)"
    />
    <path
      fill="url(#python_svg__b)"
      d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
      style={{
        fill: "url(#python_svg__b)",
      }}
      transform="translate(.065 .11) scale(.06207)"
    />
  </svg>
);

export default SvgPython;
