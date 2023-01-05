import * as React from "react";

const SvgGoogleCloud = ({ title, titleId, ...props }) => (
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
      d="m10.627 5.135 1.383-1.383.092-.583c-2.52-2.292-6.528-2.032-8.8.543a6.395 6.395 0 0 0-1.35 2.527l.496-.07 2.766-.456.214-.218c1.23-1.352 3.312-1.534 4.733-.384z"
      fill="#ea4335"
    />
    <path
      d="M13.98 6.198a6.232 6.232 0 0 0-1.878-3.029l-1.941 1.942c.82.67 1.287 1.68 1.267 2.738v.344c.954 0 1.728.774 1.728 1.728 0 .955-.774 1.71-1.728 1.71H7.967l-.34.368v2.073l.34.325h3.46a4.478 4.478 0 0 0 4.53-4.44 4.495 4.495 0 0 0-1.976-3.759"
      fill="#4285f4"
    />
    <path
      d="M4.51 14.397h3.457V11.63H4.51c-.247 0-.485-.053-.71-.155l-.49.15-1.393 1.384-.12.47c.78.59 1.734.922 2.713.918"
      fill="#34a853"
    />
    <path
      d="M4.51 5.422a4.495 4.495 0 0 0-2.713 8.057l2.005-2.004a1.728 1.728 0 1 1 2.286-2.287l2.005-2.004A4.49 4.49 0 0 0 4.51 5.422"
      fill="#fbbc05"
    />
  </svg>
);

export default SvgGoogleCloud;
