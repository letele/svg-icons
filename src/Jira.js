import * as React from "react";

const SvgJira = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#2580f8"
      d="m.604 8.445 7.41 7.462c6.466-6.511 5.87-5.92 5.273-5.33-.473.47-.945.938 2.107-2.136a.624.624 0 0 0 0-.883c-2.227-2.245-5.177-5.247-7.38-7.465C2.957 5.186.604 7.559.604 7.559a.632.632 0 0 0 0 .886zm7.41-2.783L10.336 8l-2.323 2.338L5.69 8Z"
    />
    <path fill="#dedede" d="M5.69 8 8 10.324V5.676z" />
    <path
      fill="#206fd8"
      d="M8 .107C2.952 5.191.604 7.56.604 7.56a.633.633 0 0 0 0 .886L8 15.893v-5.569L5.69 8 8 5.676Z"
    />
  </svg>
);

export default SvgJira;
