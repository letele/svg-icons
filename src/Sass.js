import * as React from "react";

const SvgSass = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#cf649a"
      d="M13.666 8.874a3.235 3.235 0 0 0-1.423.33c-.147-.29-.294-.545-.319-.735-.028-.221-.061-.356-.028-.62.034-.264.187-.638.187-.668-.003-.028-.033-.163-.35-.166-.315-.003-.588.061-.619.144-.03.083-.092.273-.132.47-.055.288-.631 1.31-.96 1.846-.107-.209-.199-.393-.217-.54-.028-.22-.062-.356-.028-.62.034-.263.187-.638.187-.668-.003-.028-.034-.163-.35-.166-.315-.003-.588.062-.62.144-.03.083-.063.28-.13.47-.065.19-.832 1.895-1.032 2.34-.1.227-.19.408-.254.53-.064.123-.003.01-.01.022l-.085.162v.004c-.043.076-.09.15-.11.15-.016 0-.047-.206.006-.488.113-.592.39-1.515.386-1.549 0-.015.052-.178-.178-.26-.224-.083-.304.055-.322.055-.018 0-.034.049-.034.049s.249-1.04-.475-1.04c-.454 0-1.08.494-1.39.945l-1.055.576c-.168.092-.343.19-.509.28l-.033-.037c-.878-.936-2.5-1.598-2.433-2.856.025-.457.184-1.662 3.117-3.122 2.401-1.196 4.324-.868 4.658-.138.476 1.043-1.027 2.981-3.524 3.26-.95.108-1.45-.26-1.576-.399-.132-.144-.15-.15-.2-.122-.08.043-.03.172 0 .248.074.193.38.537.902.709.457.15 1.574.233 2.923-.289 1.512-.585 2.693-2.211 2.347-3.57-.353-1.383-2.647-1.837-4.816-1.067-1.291.46-2.69 1.178-3.696 2.12C.275 5.723.085 6.698.165 7.103c.279 1.445 2.27 2.386 3.067 3.082l-.11.062c-.4.196-1.917.99-2.298 1.83-.43.952.068 1.636.399 1.728 1.024.285 2.073-.227 2.64-1.07.565-.844.498-1.94.237-2.44l-.01-.018.313-.184c.203-.12.402-.23.577-.325-.098.267-.169.583-.205 1.043-.043.54.177 1.24.469 1.515a.52.52 0 0 0 .377.123c.337 0 .49-.28.66-.614.208-.407.392-.88.392-.88s-.23 1.28.399 1.28c.23 0 .46-.298.564-.452v.003l.019-.03a1.108 1.108 0 0 0 .036-.059v-.006c.092-.16.298-.524.605-1.128.395-.78.776-1.755.776-1.755s.036.24.15.632c.067.233.215.488.328.736-.092.129-.147.203-.147.203l.003.003a8.718 8.718 0 0 1-.242.306c-.313.375-.687.801-.737.924-.058.144-.046.251.068.337.083.061.23.074.386.061.283-.018.479-.089.577-.132.153-.055.328-.138.497-.26.307-.227.494-.55.475-.979a1.967 1.967 0 0 0-.18-.69c.027-.04.055-.08.082-.122.485-.709.859-1.488.859-1.488s.037.24.15.632c.058.2.175.417.28.632-.455.37-.74.8-.838 1.082-.181.522-.04.758.227.813.12.025.291-.03.42-.086.16-.052.353-.14.53-.273.307-.227.602-.543.587-.969a1.858 1.858 0 0 0-.132-.573c.386-.16.886-.252 1.521-.175 1.365.16 1.635 1.012 1.583 1.368-.053.356-.338.552-.433.613-.095.058-.126.08-.116.123.012.064.055.061.138.049.113-.019.717-.291.742-.948.037-.843-.764-1.763-2.184-1.754zM3.14 12.422c-.451.494-1.086.681-1.356.522-.291-.169-.178-.896.377-1.42.338-.32.776-.614 1.065-.795.064-.04.162-.098.279-.168a.328.328 0 0 1 .03-.019c.022-.012.047-.027.071-.043.206.749.01 1.405-.466 1.923zm3.297-2.242c-.156.384-.488 1.368-.687 1.313-.172-.046-.276-.791-.034-1.527.123-.372.384-.813.537-.985.248-.276.518-.368.586-.255.08.148-.304 1.215-.402 1.454Zm2.72 1.3c-.067.034-.128.059-.156.04-.021-.012.028-.058.028-.058s.34-.365.475-.533c.077-.098.169-.212.267-.34v.036c0 .442-.423.736-.614.856zm2.098-.478c-.049-.037-.043-.15.123-.506.064-.14.212-.377.466-.601.03.092.05.18.046.264-.003.552-.395.757-.635.843z"
      style={{
        strokeWidth: 0.0306709,
      }}
    />
  </svg>
);

export default SvgSass;
