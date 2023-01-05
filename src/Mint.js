import * as React from "react";

const SvgMint = ({ title, titleId, ...props }) => (
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
    <g transform="translate(-.629 -.629) scale(.06741)">
      <circle fill="#69b53f" cx={128} cy={128} r={118} />
      <path
        d="M78.5 62.5V153c0 10.772 8.43 19.317 19.153 19.497l.347.003h60c10.772 0 19.317-8.43 19.497-19.153l.003-.347v-50c0-5.365-4.135-9.5-9.5-9.5-5.273 0-9.357 3.994-9.496 9.224l-.004.276v50.5h-21V103c0-5.365-4.135-9.5-9.5-9.5-5.273 0-9.357 3.994-9.497 9.224l-.004.276v50.5H97.5V103c0-16.726 13.774-30.5 30.5-30.5 7.038 0 13.734 2.515 19.179 6.997l.396.331.425.368.434-.376c5.25-4.46 11.71-7.064 18.538-7.302l.526-.014.502-.004c16.559 0 30.224 13.5 30.496 30l.004.5v50c0 22.027-17.888 40.135-39.834 40.495l-.666.005H98c-22.027 0-40.135-17.888-40.495-39.834L57.5 153V62.5Z"
        fill="#f8f8f8"
      />
    </g>
  </svg>
);

export default SvgMint;
