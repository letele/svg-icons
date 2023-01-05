import * as React from "react";

const SvgRollup = ({ title, titleId, ...props }) => (
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
        x1={108.769}
        y1={153.94}
        x2={213.153}
        y2={172.166}
        id="rollup_svg__a"
        gradientTransform="scale(.86426 1.15706)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6533" offset="0%" />
        <stop stopColor="#FF5633" offset="15.7%" />
        <stop stopColor="#FF4333" offset="43.4%" />
        <stop stopColor="#FF3733" offset="71.4%" />
        <stop stopColor="#F33" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={92.442}
        y1={128.094}
        x2={279.52}
        y2={236.441}
        id="rollup_svg__b"
        gradientTransform="scale(.86426 1.15706)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BF3338" offset="0%" />
        <stop stopColor="#F33" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={103.574}
        y1={142.18}
        x2={132.071}
        y2={162.412}
        id="rollup_svg__c"
        gradientTransform="scale(.8223 1.2161)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6533" offset="0%" />
        <stop stopColor="#FF5633" offset="15.7%" />
        <stop stopColor="#FF4333" offset="43.4%" />
        <stop stopColor="#FF3733" offset="71.4%" />
        <stop stopColor="#F33" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={139.407}
        y1={197.296}
        x2={131.737}
        y2={104.945}
        id="rollup_svg__d"
        gradientTransform="scale(.91654 1.09106)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6533" offset="0%" />
        <stop stopColor="#FF5633" offset="15.7%" />
        <stop stopColor="#FF4333" offset="43.4%" />
        <stop stopColor="#FF3733" offset="71.4%" />
        <stop stopColor="#F33" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={110.083}
        y1={151.33}
        x2={147.733}
        y2={171.34}
        id="rollup_svg__e"
        gradientTransform="scale(.88404 1.13117)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FBB040" offset="0%" />
        <stop stopColor="#FB8840" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={149.124}
        y1={38.078}
        x2={110.569}
        y2={367.448}
        id="rollup_svg__f"
        gradientTransform="scale(.88126 1.13474)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#FFF" stopOpacity={0} offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M256 110.133c0-19.684-5.155-38.137-14.235-54.13-24.077-24.78-76.449-30.52-89.454-.117-13.356 31.166 22.437 65.846 38.078 63.092 19.918-3.514-3.515-49.208-3.515-49.208 30.462 57.41 23.433 39.835-31.634 92.559-55.066 52.723-111.304 163.968-119.505 168.655-.352.234-.703.41-1.113.586H250.61c3.807 0 6.268-4.042 4.569-7.44l-56.472-111.773c-1.23-2.402-.352-5.39 1.991-6.737C233.74 186.64 256 151.022 256 110.133Z"
      fill="url(#rollup_svg__a)"
      style={{
        fill: "url(#rollup_svg__a)",
      }}
      transform="matrix(.04749 0 0 .04749 1.917 .059)"
    />
    <path
      d="M256 110.133c0-19.684-5.155-38.137-14.235-54.13-24.077-24.78-76.449-30.52-89.454-.117-13.356 31.166 22.437 65.846 38.078 63.092 19.918-3.514-3.515-49.208-3.515-49.208 30.462 57.41 23.433 39.835-31.634 92.559-55.066 52.723-111.304 163.968-119.505 168.655-.352.234-.703.41-1.113.586H250.61c3.807 0 6.268-4.042 4.569-7.44l-56.472-111.773c-1.23-2.402-.352-5.39 1.991-6.737C233.74 186.64 256 151.022 256 110.133Z"
      fill="url(#rollup_svg__b)"
      style={{
        fill: "url(#rollup_svg__b)",
      }}
      transform="matrix(.04749 0 0 .04749 1.917 .059)"
    />
    <path
      d="M35.735 330.984c8.2-4.687 64.439-115.99 119.505-168.714 55.067-52.723 62.096-35.149 31.634-92.558 0 0-116.577 163.441-158.755 244.283"
      fill="url(#rollup_svg__c)"
      style={{
        fill: "url(#rollup_svg__c)",
      }}
      transform="matrix(.04749 0 0 .04749 1.917 .059)"
    />
    <path
      d="M52.137 184.53C130.87 39.778 141.181 25.19 182.187 25.19c21.559 0 43.292 9.724 57.352 27.006C220.383 21.324 186.464.644 147.625.059H13.884a5.1 5.1 0 0 0-5.097 5.096v269.591c7.967-20.562 21.5-49.97 43.35-90.215Z"
      fill="url(#rollup_svg__d)"
      style={{
        fill: "url(#rollup_svg__d)",
      }}
      transform="matrix(.04749 0 0 .04749 1.917 .059)"
    />
    <path
      d="M155.24 162.27C100.174 214.993 43.936 326.297 35.735 330.984c-8.202 4.686-21.968 5.272-29.291-2.93-7.791-8.728-19.918-22.846 45.693-143.523C130.87 39.777 141.181 25.19 182.187 25.19c21.559 0 43.292 9.724 57.352 27.006.761 1.23 1.523 2.519 2.284 3.808-24.077-24.78-76.448-30.521-89.453-.118-13.357 31.166 22.436 65.846 38.078 63.092 19.917-3.514-3.515-49.208-3.515-49.208 30.403 57.351 23.374 39.777-31.693 92.5z"
      fill="url(#rollup_svg__e)"
      style={{
        fill: "url(#rollup_svg__e)",
      }}
      transform="matrix(.04749 0 0 .04749 1.917 .059)"
    />
    <path
      d="M58.581 190.975C137.314 46.22 147.625 31.634 188.631 31.634c17.75 0 35.618 6.62 49.209 18.57-14.06-16.051-34.915-25.014-55.652-25.014-41.007 0-51.318 14.587-130.05 159.34C-13.475 305.209-1.348 319.327 6.443 328.056c1.113 1.23 2.402 2.285 3.75 3.163C3.338 321.26.292 298.12 58.58 190.975z"
      fill="url(#rollup_svg__f)"
      opacity={0.3}
      style={{
        fill: "url(#rollup_svg__f)",
      }}
      transform="matrix(.04749 0 0 .04749 1.917 .059)"
    />
  </svg>
);

export default SvgRollup;
