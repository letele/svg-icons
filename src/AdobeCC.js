import * as React from "react";

const SvgAdobeCC = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#F44336"
      d="M10 2a5.978 5.978 0 0 0-4.508 2.05C5.328 4.033 5.168 4 5 4a5 5 0 0 0 0 10h5a6 6 0 1 0 0-12z"
    />
    <path
      fill="#FAFAFA"
      d="M10 3c-1.27 0-2.444.471-3.345 1.293a4.218 4.218 0 0 1 .995.467l.003.002A3.96 3.96 0 0 1 10 4c2.206 0 4 1.794 4 4s-1.794 4-4 4a3.959 3.959 0 0 1-2.384-.792 3.641 3.641 0 0 1-.704-.669.436.436 0 0 0-.035-.04l-1.49-1.816a.5.5 0 1 0-.774.634l1.519 1.852.026.029c.242.298.525.564.863.813A4.945 4.945 0 0 0 10 13c2.757 0 5-2.243 5-5s-2.243-5-5-5z"
    />
    <path
      fill="#FAFAFA"
      d="M5.499 11.955c-.163.027-.33.045-.499.045-1.654 0-3-1.346-3-3 0-1.985 1.917-3.563 4.006-2.818.178.05.372.141.577.271l.029.017 3.123 1.955a.5.5 0 0 0 .531-.849L7.12 5.607a3.078 3.078 0 0 0-.81-.377A3.829 3.829 0 0 0 5 5C2.794 5 1 6.794 1 9s1.794 4 4 4c.471 0 .928-.087 1.358-.242a5.629 5.629 0 0 1-.859-.803z"
    />
  </svg>
);

export default SvgAdobeCC;
