import * as React from "react";

const SvgGitlab = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    preserveAspectRatio="xMinYMin"
    viewBox="0 0 1.638 1.638"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="#e24329" d="m.82 1.569.299-.922h-.6l.3.922z" />
    <path fill="#fc6d26" d="M.82 1.569.52.647H.1Z" />
    <path
      fill="#fca326"
      d="m.1.647-.091.28a.062.062 0 0 0 .022.07l.788.572L.1.647Z"
    />
    <path fill="#e24329" d="M.1.647h.42L.34.09a.031.031 0 0 0-.06 0z" />
    <path fill="#fc6d26" d="m.82 1.569.299-.922h.42l-.72.922z" />
    <path
      fill="#fca326"
      d="m1.539.647.09.28a.062.062 0 0 1-.022.07l-.788.572.72-.922z"
    />
    <path fill="#e24329" d="M1.539.647h-.42l.18-.556a.031.031 0 0 1 .06 0z" />
  </svg>
);

export default SvgGitlab;
