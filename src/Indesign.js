import * as React from "react";

const SvgIndesign = ({ title, titleId, ...props }) => (
  <svg
    id="indesign_svg__Layer_1"
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
      {".indesign_svg__st1{fill:#f36}"}
    </style>
    <g id="indesign_svg__g309" transform="translate(-.478 -.014) scale(.06623)">
      <g id="indesign_svg__Surfaces">
        <g id="indesign_svg__Publishing_Surface">
          <g id="indesign_svg__Outline_no_shadow">
            <path
              d="M50.5 4h155C229 4 248 23 248 46.5v149c0 23.5-19 42.5-42.5 42.5h-155C27 238 8 219 8 195.5v-149C8 23 27 4 50.5 4Z"
              id="indesign_svg__path4"
              style={{
                fill: "#49021f",
              }}
            />
          </g>
        </g>
      </g>
      <g id="indesign_svg__Outlined_Mnemonics_Logos">
        <g id="indesign_svg__Id">
          <path
            className="indesign_svg__st1"
            d="M95.2 65.2v102.6c0 1.1-.5 1.6-1.4 1.6H74.2c-.9 0-1.3-.5-1.3-1.6V65.2c0-.9.5-1.3 1.4-1.3h19.5c.6-.1 1.2.3 1.3 1 .1.1.1.2.1.3z"
            id="indesign_svg__path9"
          />
          <path
            className="indesign_svg__st1"
            d="M152.8 171c-7.4.1-14.8-1.4-21.5-4.5-6.3-2.9-11.5-7.7-15.1-13.6-3.7-6.1-5.5-13.7-5.5-22.8-.1-7.4 1.8-14.7 5.5-21.1 3.8-6.5 9.3-11.9 15.9-15.5 7-3.9 15.4-5.8 25.3-5.8.5 0 1.2 0 2.1.1.9.1 1.9.1 3.1.2V56.4c0-.7.3-1.1 1-1.1h20.3c.5-.1.9.3 1 .7v95.4c0 1.8.1 3.8.2 6 .2 2.1.3 4.1.4 5.8 0 .7-.3 1.3-1 1.6-5.2 2.2-10.7 3.8-16.3 4.8-5 .9-10.2 1.4-15.4 1.4zm9.8-20v-44c-.9-.2-1.8-.4-2.7-.5-1.1-.1-2.2-.2-3.3-.2-3.9 0-7.8.8-11.3 2.6-3.4 1.7-6.3 4.2-8.5 7.4s-3.3 7.5-3.3 12.7c-.1 3.5.5 7 1.7 10.3 1 2.7 2.5 5.1 4.5 7.1 1.9 1.8 4.2 3.2 6.8 4 2.7.9 5.5 1.3 8.3 1.3 1.5 0 2.9-.1 4.2-.2 1.3.1 2.5-.1 3.6-.5z"
            id="indesign_svg__path11"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgIndesign;
