import * as React from "react";

const SvgStackoverflow = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path
        fill="#ff810f"
        d="m10.02 13.837-6.342.004v-1.343l6.34-.004zm4.285-7.605L13.22.036l-1.334.23L12.97 6.46l1.335-.229Zm-4.133 4.54-6.315-.577-.124 1.338 6.315.576.124-1.337zm.417-1.752L4.465 7.387l-.352 1.298 6.124 1.632zm.8-1.537L5.925 4.29l-.688 1.157L10.7 8.64l.688-1.156zm1.339-.94L9.154 1.348l-1.118.756L11.609 7.3l1.119-.756z"
      />
      <path
        fill="#bebcbc"
        d="M11.097 9.42v5.49H2.779V9.42H1.695v6.544h10.48V9.42Z"
      />
    </g>
  </svg>
);

export default SvgStackoverflow;
