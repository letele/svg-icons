import * as React from "react";

const SvgVisacard = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g data-name="Visa credit card">
      <path
        fill="#273991"
        d="m3.075 8.073-.433-2.092a.512.512 0 0 0-.563-.384H.076l-.015.1c1.557.373 2.587 1.28 3.014 2.376zm1.455-2.43-1.265 3.23-.13-.488A5.063 5.063 0 0 0 1.34 6.424l1.155 3.946h1.365l2.034-4.727zm1.89 0-.807 4.737h1.28l.81-4.737zm8.474 0H13.89a.64.64 0 0 0-.676.394l-1.908 4.338h1.355s.22-.584.271-.712h1.652c.039.164.156.707.156.707h1.199Zm-1.59 3.052c.107-.271.512-1.324.512-1.324s.108-.271.172-.45l.09.407.296 1.367zm-3-1.155c-.447-.217-.724-.366-.721-.586.002-.22.233-.407.737-.407a2.325 2.325 0 0 1 .966.182l.118.053.174-1.024a3.301 3.301 0 0 0-1.155-.197c-1.28 0-2.175.64-2.182 1.562 0 .679.64 1.06 1.13 1.28.488.22.678.382.678.59 0 .317-.402.463-.769.463A2.71 2.71 0 0 1 8.067 9.2L7.9 9.123l-.182 1.06a4.064 4.064 0 0 0 1.44.256c1.354 0 2.235-.635 2.246-1.618-.003-.533-.346-.943-1.1-1.28z"
      />
      <path
        fill="#f99f1b"
        d="M2.642 5.98a.512.512 0 0 0-.563-.383H.076l-.015.1c1.557.376 2.587 1.28 3.014 2.379z"
      />
    </g>
  </svg>
);

export default SvgVisacard;