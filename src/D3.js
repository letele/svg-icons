import * as React from "react";

const SvgD3 = ({ title, titleId, ...props }) => (
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
        id="d3_svg__a"
        x1={104.445}
        x2={257.218}
        y1={18.938}
        y2={181.921}
        gradientTransform="scale(1.0065 .99355)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#F9A03C" />
        <stop offset="100%" stopColor="#F7974E" />
      </linearGradient>
      <linearGradient
        id="d3_svg__b"
        x1={-21.492}
        x2={122.236}
        y1={48.227}
        y2={188.405}
        gradientTransform="scale(.9975 1.0025)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#F9A03C" />
        <stop offset="100%" stopColor="#F7974E" />
      </linearGradient>
      <linearGradient
        id="d3_svg__c"
        x1={44.168}
        x2={172.576}
        y1={98.813}
        y2={246.033}
        gradientTransform="scale(1.01377 .98642)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#F9A03C" />
        <stop offset="100%" stopColor="#F7974E" />
      </linearGradient>
      <linearGradient
        id="d3_svg__d"
        x1={28.215}
        x2={205.274}
        y1={-4.534}
        y2={229.189}
        gradientTransform="scale(1.02815 .97262)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#F26D58" />
        <stop offset="100%" stopColor="#F9A03C" />
      </linearGradient>
      <linearGradient
        id="d3_svg__e"
        x1={125.828}
        x2={300.629}
        y1={6.467}
        y2={121.326}
        gradientTransform="scale(.95887 1.04289)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#B84E51" />
        <stop offset="100%" stopColor="#F68E48" />
      </linearGradient>
      <linearGradient
        id="d3_svg__f"
        x1={60.121}
        x2={66.387}
        y1={236.936}
        y2={395.51}
        gradientTransform="scale(1.3814 .7239)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#F9A03C" />
        <stop offset="100%" stopColor="#F7974E" />
      </linearGradient>
    </defs>
    <path
      fill="url(#d3_svg__a)"
      d="M255.52 175.619c.115-1.115.197-2.24.261-3.371.078-1.339-80.562-77.85-80.562-77.85h-1.928s81.736 86.215 82.229 81.22z"
      style={{
        fill: "url(#d3_svg__a)",
      }}
      transform="translate(.025 .446) scale(.06232)"
    />
    <path
      fill="url(#d3_svg__b)"
      d="M83.472 149.077c-.107.235-.213.47-.323.704-.114.246-.232.491-.349.734-2.57 5.36 35.987 43.053 39.088 38.474.141-.202.283-.416.424-.618.157-.24.312-.47.467-.71 2.48-3.765-38.206-41.032-39.307-38.584z"
      style={{
        fill: "url(#d3_svg__b)",
      }}
      transform="translate(.025 .446) scale(.06232)"
    />
    <path
      fill="url(#d3_svg__c)"
      d="M137.957 202.083c-.109.24-.885 1.552-1.594 2.245-.12.24 37.64 37.688 37.64 37.688h3.4c.002 0-35.446-38.35-39.446-39.933z"
      style={{
        fill: "url(#d3_svg__c)",
      }}
      transform="translate(.025 .446) scale(.06232)"
    />
    <path
      fill="url(#d3_svg__d)"
      d="M255.835 171.568c-1.766 39.147-34.152 70.448-73.72 70.448h-5.35l-39.514-38.928c3.25-4.584 6.272-9.333 8.962-14.285h35.902c11.354 0 20.594-9.235 20.594-20.595 0-11.355-9.24-20.595-20.594-20.595h-21.246c1.619-8.557 2.504-17.381 2.504-26.408 0-9.165-.901-18.114-2.578-26.808h13.197l81.61 80.414c.097-1.078.174-2.155.233-3.243zM21.467 0H0v53.213h21.467c37.493 0 68 30.499 68 67.992 0 10.2-2.275 19.883-6.318 28.576l39.163 38.59c12.859-19.24 20.376-42.339 20.376-67.166C142.688 54.373 88.307 0 21.467 0Z"
      style={{
        fill: "url(#d3_svg__d)",
      }}
      transform="translate(.025 .446) scale(.06232)"
    />
    <path
      fill="url(#d3_svg__e)"
      d="M182.115 0H95.187C116.419 12.963 134 31.344 145.979 53.213h36.136c11.354 0 20.594 9.235 20.594 20.595 0 11.357-9.24 20.592-20.594 20.592h-8.12l81.61 80.413c.192-2.181.312-4.376.312-6.605 0-17.939-6.437-34.395-17.125-47.203 10.688-12.802 17.125-29.261 17.125-47.197C255.917 33.112 222.813 0 182.115 0Z"
      style={{
        fill: "url(#d3_svg__e)",
      }}
      transform="translate(.025 .446) scale(.06232)"
    />
    <path
      fill="url(#d3_svg__f)"
      d="M176.765 242.016H95.808c16.296-10.064 30.384-23.35 41.443-38.928zm-54.453-53.645-39.16-38.59c-10.819 23.251-34.395 39.422-61.685 39.422H0v53.208h21.467c42.01 0 79.09-21.488 100.845-54.04z"
      style={{
        fill: "url(#d3_svg__f)",
      }}
      transform="translate(.025 .446) scale(.06232)"
    />
  </svg>
);

export default SvgD3;
