import * as React from "react";

const SvgJupyter = ({ title, titleId, ...props }) => (
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
      d="M1.758 8.364V6.62h.38v1.878a1.134 1.134 0 0 1-.25.85.97.97 0 0 1-.646.236l-.04-.284c.153 0 .3-.056.414-.158.102-.12.142-.281.142-.778zm2.834-.223c0 .212 0 .402.017.567h-.337l-.023-.338a.786.786 0 0 1-.69.386c-.328 0-.72-.178-.72-.907V6.638h.38v1.134c0 .394.123.658.466.658a.53.53 0 0 0 .536-.536v-1.27h.38v1.505zm.72-.829c0-.263 0-.479-.016-.675h.34l.017.355a.822.822 0 0 1 .743-.403c.505 0 .885.423.885 1.052 0 .743-.457 1.112-.95 1.112a.735.735 0 0 1-.644-.326v1.134h-.374v-2.24zm.375.553a.584.584 0 0 0 .584.593c.4 0 .635-.326.635-.8 0-.414-.22-.768-.62-.768a.652.652 0 0 0-.6.62zm2.27-1.23.457 1.223c.049.136.1.3.134.422.04-.124.082-.283.133-.43l.414-1.214h.4L8.928 8.11c-.284.71-.457 1.075-.718 1.296-.131.12-.292.204-.465.244l-.094-.317c.122-.04.234-.103.332-.185.139-.113.248-.256.32-.42a.284.284 0 0 0 .032-.09.326.326 0 0 0-.026-.1L7.538 6.63h.414zm2.547-.594v.595h.544v.284h-.544v1.117c0 .255.073.403.283.403a.85.85 0 0 0 .221-.026l.017.284a.936.936 0 0 1-.337.05.528.528 0 0 1-.411-.158.763.763 0 0 1-.148-.539V6.917h-.323v-.284h.329V6.13zm1.244 1.697a.666.666 0 0 0 .718.718c.194.004.387-.033.567-.108l.065.283c-.22.091-.457.135-.695.128a.964.964 0 0 1-1.026-1.044c0-.623.371-1.117.978-1.117.68 0 .85.596.85.976.004.058.004.117 0 .175H11.74zm1.112-.283a.536.536 0 0 0-.528-.613.627.627 0 0 0-.581.613zm.922-.175c0-.243 0-.453-.017-.646h.34v.405h.018a.627.627 0 0 1 .567-.453.414.414 0 0 1 .108 0v.354a.567.567 0 0 0-.13 0 .53.53 0 0 0-.508.482c-.011.058-.017.117-.017.176v1.103h-.375V7.283z"
      fill="#4e4e4e"
    />
    <path
      d="M13.616.939a.961.961 0 1 1-1.001-.902.95.95 0 0 1 1 .902z"
      fill="#767677"
    />
    <path
      d="M8.008 12.046c-2.552 0-4.795-.916-5.955-2.269a6.35 6.35 0 0 0 11.91 0c-1.156 1.353-3.391 2.269-5.955 2.269zM8.008 3.25c2.553 0 4.796.915 5.956 2.268a6.35 6.35 0 0 0-11.911 0C3.213 4.163 5.445 3.25 8.008 3.25Z"
      fill="#f37726"
    />
    <path
      d="M4.495 14.678a1.21 1.21 0 1 1-1.262-1.134 1.2 1.2 0 0 1 1.262 1.134z"
      fill="#9e9e9e"
    />
    <path
      d="M2.343 2.941a.698.698 0 1 1 .678-.726.706.706 0 0 1-.678.726z"
      fill="#616262"
    />
  </svg>
);

export default SvgJupyter;
