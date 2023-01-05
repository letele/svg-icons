import * as React from "react";

const SvgGraphql = ({ title, titleId, ...props }) => (
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
      fill="#df34a6"
      d="M3.214 3.58a1.36 1.36 0 0 0-1.876.51 1.412 1.412 0 0 0-.144.368 1.397 1.397 0 0 0 1.013 1.684v3.715a1.367 1.367 0 0 0-.67.393 1.412 1.412 0 0 0 .046 1.972 1.356 1.356 0 0 0 1.939-.045l3.163 1.855a1.418 1.418 0 0 0-.057.397c.001.77.615 1.393 1.372 1.393.146 0 .29-.024.43-.07a1.4 1.4 0 0 0 .871-1.765l3.144-1.845a1.361 1.361 0 0 0 2.212-.23c.068-.118.118-.246.149-.38a1.391 1.391 0 0 0-1.012-1.674V6.144a1.35 1.35 0 0 0 .358-.146 1.41 1.41 0 0 0 .51-1.908 1.384 1.384 0 0 0-.243-.311 1.358 1.358 0 0 0-1.943.05L9.314 1.971c.038-.13.058-.266.057-.402C9.371.8 8.757.178 8 .18c-.132 0-.265.018-.391.057a1.397 1.397 0 0 0-.924 1.732L3.521 3.825a1.326 1.326 0 0 0-.307-.246Zm5.8 9.909A1.36 1.36 0 0 0 8 13.034a1.35 1.35 0 0 0-.987.426L3.848 11.6l.014-.054h8.276c.007.032.015.062.024.093zm-.03-10.946 3.17 1.863-.013.047a1.393 1.393 0 0 0 .999 1.687v3.72c-.017.004-.036.009-.053.015L8.947 2.58a.406.406 0 0 0 .037-.038zm-1.365.369c.249.073.513.073.763 0l4.141 7.291a1.411 1.411 0 0 0-.386.68H3.863a1.418 1.418 0 0 0-.384-.678Zm-3.775 1.49 3.17-1.86.038.04-4.139 7.293-.054-.015V6.14l.049-.015a1.395 1.395 0 0 0 .936-1.724Z"
      style={{
        strokeWidth: 0.651809,
      }}
    />
  </svg>
);

export default SvgGraphql;