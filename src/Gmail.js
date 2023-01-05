import * as React from "react";

const SvgGmail = ({ title, titleId, ...props }) => (
  <svg
    viewBox="-260.552 -146.192 16 16"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#4285f4"
      d="M-259.332-132.799h2.498v-5.557l-3.568-2.451v7.028c0 .541.48.98 1.07.98z"
    />
    <path
      fill="#34a853"
      d="M-248.27-132.799h2.498c.59 0 1.07-.439 1.07-.98v-7.028l-3.568 2.451Z"
    />
    <path
      fill="#fbbc04"
      d="M-248.27-142.604v4.248l3.568-2.451v-1.307c0-.812-.719-1.47-1.606-1.47-.347 0-.685.102-.963.293z"
    />
    <path
      fill="#ea4335"
      d="M-256.834-138.356v-4.248l4.282 2.941 4.281-2.942v4.25l-4.281 2.94Z"
    />
    <path
      fill="#c5221f"
      d="M-260.402-142.114v1.307l3.568 2.451v-4.248l-.999-.687c-.71-.487-1.716-.356-2.248.294a1.39 1.39 0 0 0-.32.883z"
    />
  </svg>
);

export default SvgGmail;
