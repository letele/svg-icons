import * as React from "react";

const SvgFirebase = ({ title, titleId, ...props }) => (
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
      fill="#ffa000"
      d="M9.767 5.831 8.204 7.286 6.754 4.36l.75-1.683c.189-.336.499-.34.688 0z"
    />
    <path fill="#f57f17" d="m8.204 7.286-5.846 5.437L6.754 4.36Z" />
    <path
      fill="#ffca28"
      d="M11.48 3.606c.28-.267.57-.177.642.202l1.52 8.842L8.6 15.676c-.177.099-.646.137-.646.137s-.426-.052-.59-.142L2.36 12.723Z"
    />
    <path
      fill="#ffa000"
      d="m6.754 4.36-4.395 8.363L4.317.498c.074-.38.289-.418.482-.083z"
    />
  </svg>
);

export default SvgFirebase;
