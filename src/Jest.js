import * as React from "react";

const SvgJest = ({ title, titleId, ...props }) => (
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
      d="M14.304 7.878a1.481 1.481 0 0 0-1.638-1.473L14.701.404H6.054L8.086 6.4a1.481 1.481 0 0 0-.54 2.89 6.47 6.47 0 0 1-1.165 1.466 5.932 5.932 0 0 1-2.076 1.289c-.904-.465-1.332-1.498-.946-2.404.043-.103.088-.206.13-.31a1.482 1.482 0 1 0-1.188-.23c-.367.836-.906 1.71-1.073 2.722-.202 1.214-.001 2.502 1.049 3.23 2.444 1.694 5.098-1.05 7.896-1.74 1.013-.25 2.127-.21 3.02-.728a2.53 2.53 0 0 0 1.239-1.755 2.637 2.637 0 0 0-.473-2.002c.215-.257.345-.588.345-.95zm-4.827.006v-.006a1.48 1.48 0 0 0-.714-1.267l1.618-3.27L12 6.646a1.48 1.48 0 0 0-.66 1.232v.033z"
      fill="#c63d14"
    />
    <path
      d="M14.665 7.878c0-.9-.648-1.65-1.502-1.81L15.206.041H5.549l2.046 6.037a1.843 1.843 0 0 0-.571 3.364c-.251.375-.55.728-.891 1.05a5.586 5.586 0 0 1-1.796 1.154c-.656-.412-.933-1.188-.645-1.865l.022-.053.043-.1a1.846 1.846 0 0 0 1.238-1.74A1.845 1.845 0 0 0 3.15 6.046a1.845 1.845 0 0 0-1.843 1.843c0 .513.21.978.55 1.312-.061.131-.126.265-.192.401-.31.637-.662 1.36-.795 2.162-.265 1.593.161 2.867 1.2 3.586a3.27 3.27 0 0 0 1.912.608c1.212 0 2.438-.609 3.637-1.204.864-.43 1.757-.873 2.64-1.09.327-.081.665-.13 1.023-.182.709-.102 1.442-.208 2.091-.584a2.894 2.894 0 0 0 1.414-2.006 2.987 2.987 0 0 0-.393-2.054c.172-.28.27-.608.27-.96zm-.723 0a1.121 1.121 0 0 1-2.24 0 1.12 1.12 0 0 1 2.24 0zm.254-7.113-1.804 5.321a1.821 1.821 0 0 0-.228.071l-1.782-3.636-1.787 3.614a1.82 1.82 0 0 0-.239-.064L6.56.765zm-6.2 5.994a1.12 1.12 0 0 1 0 2.24 1.121 1.121 0 0 1 0-2.24zm-4.845.01a1.12 1.12 0 0 1 0 2.24 1.121 1.121 0 0 1 0-2.24zm10.924 3.999a2.171 2.171 0 0 1-1.063 1.504c-.529.306-1.162.398-1.833.494-.359.052-.73.106-1.093.195-.96.237-1.889.698-2.787 1.145-1.799.893-3.352 1.664-4.816.65-1.073-.744-1.024-2.12-.899-2.874.116-.698.43-1.341.732-1.963L2.47 9.6c.15.06.31.101.477.12-.308 1.017.176 2.123 1.194 2.646l.139.071.147-.052a6.27 6.27 0 0 0 2.203-1.367c.425-.4.79-.844 1.09-1.318a1.845 1.845 0 0 0 2.12-1.823 1.84 1.84 0 0 0-.618-1.376l1.158-2.342 1.17 2.387c-.35.336-.57.808-.57 1.331 0 1.017.827 1.844 1.843 1.844.39 0 .753-.123 1.051-.33.207.423.285.9.202 1.376z"
      fill="#fff"
    />
  </svg>
);

export default SvgJest;