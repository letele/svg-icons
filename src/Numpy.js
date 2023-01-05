import * as React from "react";

const SvgNumpy = ({ title, titleId, ...props }) => (
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
    <path
      d="m11.71 10.89.004 3.533-3.136 1.564v-3.532zM15.473 9v3.547L12.8 13.88l-.002-3.53zm-3.767-2.84.003 3.496-3.13 1.556V7.714zm3.767-1.873V7.76l-2.677 1.361-.002-3.503zm-7.371-.411L10.9 5.288 7.997 6.746 5.25 5.367ZM4.209 1.91l2.669 1.347L4.021 4.75 1.279 3.373Zm7.63.02 2.875 1.442-2.571 1.291L9.338 3.25zM8.014.013l2.588 1.297L8.12 2.635 5.453 1.29Z"
      fill="#4dabcf"
    />
    <path
      d="M7.471 7.714 5.36 6.653v4.589s-2.583-5.496-2.822-5.99c-.03-.063-.158-.133-.19-.15-.463-.243-1.82-.93-1.82-.93v8.108l1.877 1.003V9.045s2.555 4.91 2.581 4.964c.026.054.283.572.557.753.365.242 1.93 1.183 1.93 1.183z"
      fill="#4d77cf"
    />
  </svg>
);

export default SvgNumpy;
