import * as React from "react";

const SvgIllustrator = ({ title, titleId, ...props }) => (
  <svg
    id="illustrator_svg__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 16 16"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <style type="text/css" id="style2">
      {".illustrator_svg__st1{fill:#ff9a00}"}
    </style>
    <g
      id="illustrator_svg__Layer_2_1_"
      transform="matrix(.06642 0 0 .06642 .03 .229)"
    >
      <g id="illustrator_svg__Surfaces">
        <g id="illustrator_svg__Drawing_Surface">
          <g id="illustrator_svg__Outline_no_shadow">
            <path
              d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0Z"
              id="illustrator_svg__path4"
              style={{
                fill: "#300",
              }}
            />
          </g>
        </g>
      </g>
      <g id="illustrator_svg__Outlined_Mnemonics_Logos">
        <g id="illustrator_svg__Ai">
          <path
            className="illustrator_svg__st1"
            d="M116.3 140.4H79.1l-7.6 23.5c-.2.9-1 1.5-1.9 1.4H50.8c-1.1 0-1.4-.6-1.1-1.8l32.2-92.7c.3-1 .6-2.1 1-3.3.4-2.1.6-4.3.6-6.5-.1-.5.3-1 .8-1.1H110.2c.8 0 1.2.3 1.3.8l36.5 103c.3 1.1 0 1.6-1 1.6h-20.9c-.7.1-1.4-.4-1.6-1.1zm-31.4-20.3h25.4c-.6-2.1-1.4-4.6-2.3-7.2-.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2-1-3.1-1.9-6-2.7-8.9-.8-2.8-1.5-5.4-2.2-7.8h-.2c-.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.4 5.1-2.9 9.8-4.4 14z"
            id="illustrator_svg__path9"
          />
          <path
            className="illustrator_svg__st1"
            d="M169.8 77c-3.3.1-6.5-1.2-8.9-3.5-2.3-2.5-3.5-5.8-3.4-9.2-.1-3.4 1.2-6.6 3.6-8.9 2.4-2.3 5.6-3.5 8.9-3.5 3.9 0 6.9 1.2 9.1 3.5 2.2 2.4 3.4 5.6 3.3 8.9.1 3.4-1.1 6.7-3.5 9.2-2.3 2.4-5.7 3.7-9.1 3.5zm-11.2 86.8v-77c0-1 .4-1.4 1.3-1.4h19.8c.9 0 1.3.5 1.3 1.4v77c0 1.1-.4 1.6-1.3 1.6h-19.6c-1 0-1.5-.6-1.5-1.6z"
            id="illustrator_svg__path11"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgIllustrator;
