import * as React from "react";

const SvgWord = ({ title, titleId, ...props }) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule="nonzero">
      <path
        d="M15.268 1.062H4.696a.664.664 0 0 0-.66.66v2.809l5.947 1.735 5.946-1.735V1.723a.664.664 0 0 0-.66-.661z"
        fill="#41a5ee"
      />
      <path d="M15.929 4.531H4.035V8l5.947 1.735L15.93 8Z" fill="#2b7cd3" />
      <path d="M15.929 8H4.035v3.47l5.947 1.734 5.947-1.735z" fill="#185abd" />
      <path
        d="M15.929 11.47H4.035v2.807c0 .363.298.661.66.661h10.573c.362 0 .66-.298.66-.66z"
        fill="#103f91"
      />
      <path
        d="M8.33 3.54H4.035v9.416H8.33a.666.666 0 0 0 .66-.66V4.2a.666.666 0 0 0-.66-.66z"
        fillOpacity={0.098}
      />
      <path
        d="M7.835 4.035h-3.8v9.416h3.8a.666.666 0 0 0 .66-.66V4.697a.666.666 0 0 0-.66-.661zm0 0h-3.8v8.425h3.8a.666.666 0 0 0 .66-.66V4.697a.666.666 0 0 0-.66-.661zm-.496 0H4.035v8.425H7.34A.666.666 0 0 0 8 11.8V4.697a.666.666 0 0 0-.66-.661z"
        fillOpacity={0.2}
      />
      <path
        d="M.731 4.035H7.34c.362 0 .66.299.66.661v6.608c0 .362-.298.66-.66.66H.73a.664.664 0 0 1-.66-.66V4.696c0-.362.298-.66.66-.66z"
        fill="#185abd"
      />
      <path
        d="M5.993 10.478H5.1L4.06 7.058l-1.09 3.42h-.892l-.992-4.956h.893l.693 3.47 1.041-3.37h.743l.992 3.37.693-3.47h.843z"
        fill="#fff"
      />
    </g>
    <path d="M170 90.004h219.993v219.993H170Z" fill="none" />
  </svg>
);

export default SvgWord;
