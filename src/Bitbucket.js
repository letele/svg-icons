import * as React from "react";

const SvgBitbucket = ({ title, titleId, ...props }) => (
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
      fill="#2680f8"
      d="M2.946 15.219H13.22a.51.51 0 0 0 .505-.431l2.142-13.406a.512.512 0 0 0-.416-.588l-.089-.007L.636.781a.508.508 0 0 0-.51.509l.005.09 2.143 13.253a.692.692 0 0 0 .672.586ZM10.45 5.63l-.795 4.728h-3.28l-.887-4.728Z"
    />
    <path fill="#dedede" d="m5.49 5.631.885 4.729H8V5.63z" />
    <path
      fill="#216fd8"
      d="M.63.781a.508.508 0 0 0-.505.509l.006.09 2.143 13.253a.692.692 0 0 0 .672.586H8v-4.86H6.375L5.49 5.632H8V.785L.636.78H.63Z"
    />
  </svg>
);

export default SvgBitbucket;
