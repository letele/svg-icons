import * as React from "react";

const SvgPowerBI = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="power-b-i_svg__a"
      maskUnits="userSpaceOnUse"
      x={200}
      y={0}
      width={1200}
      height={1600}
    >
      <path
        d="M1333.25 0c36.86 0 66.75 29.885 66.75 66.75v1466.5c0 36.86-29.89 66.75-66.75 66.75H266.667c-36.819 0-66.667-29.85-66.667-66.67V866.667C200 829.848 229.848 800 266.667 800H525V466.667C525 429.848 554.848 400 591.667 400H850V66.75C850 29.885 879.885 0 916.75 0Z"
        fill="#fff"
      />
    </mask>
    <g
      mask="url(#power-b-i_svg__a)"
      transform="matrix(.00996 0 0 .00996 .036 .036)"
    >
      <path
        d="M1400 66.75v1466.5c0 36.86-29.89 66.75-66.75 66.75h-416.5c-36.865 0-66.75-29.89-66.75-66.75V66.75C850 29.885 879.885 0 916.75 0h416.5c36.87 0 66.75 29.885 66.75 66.75z"
        fill="url(#power-b-i_svg__b)"
        style={{
          fill: "url(#power-b-i_svg__b)",
        }}
      />
      <g filter="url(#power-b-i_svg__c)">
        <path
          d="M1075 466.667V1600H525V466.667C525 429.848 554.848 400 591.667 400h416.663c36.82 0 66.67 29.848 66.67 66.667z"
          fill="url(#power-b-i_svg__d)"
          style={{
            fill: "url(#power-b-i_svg__d)",
          }}
        />
      </g>
      <path
        d="M200 866.667v666.663c0 36.82 29.848 66.67 66.667 66.67H750V866.667C750 829.848 720.152 800 683.333 800H266.667C229.848 800 200 829.848 200 866.667Z"
        fill="url(#power-b-i_svg__e)"
        style={{
          fill: "url(#power-b-i_svg__e)",
        }}
      />
    </g>
    <defs>
      <linearGradient
        id="power-b-i_svg__b"
        x1={758.333}
        y1={0}
        x2={1447.82}
        y2={1507.15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E6AD10" />
        <stop offset={1} stopColor="#C87E0E" />
      </linearGradient>
      <linearGradient
        id="power-b-i_svg__d"
        x1={524.955}
        y1={400}
        x2={1105.79}
        y2={1561.67}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F6D751" />
        <stop offset={1} stopColor="#E6AD10" />
      </linearGradient>
      <linearGradient
        id="power-b-i_svg__e"
        x1={199.955}
        y1={800}
        x2={519.784}
        y2={1581.68}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9E589" />
        <stop offset={1} stopColor="#F6D751" />
      </linearGradient>
      <filter
        id="power-b-i_svg__c"
        x={391.667}
        y={300}
        width={816.667}
        height={1466.67}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={6.333} />
        <feGaussianBlur stdDeviation={6.333} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_8592:56198"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={33.333} />
        <feGaussianBlur stdDeviation={66.667} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
        <feBlend
          in2="effect1_dropShadow_8592:56198"
          result="effect2_dropShadow_8592:56198"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_8592:56198"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgPowerBI;
