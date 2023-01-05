import * as React from "react";

const SvgMicrosoft = ({ title, titleId, ...props }) => (
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
      d="M15.976 7.838v-.28h-.348V7.12l-.012.004-.327.1-.007.002v.33h-.516v-.184c0-.086.019-.151.057-.195a.2.2 0 0 1 .16-.065c.049 0 .1.012.15.034l.014.006v-.295l-.006-.003a.59.59 0 0 0-.194-.025.567.567 0 0 0-.274.066.469.469 0 0 0-.189.186.555.555 0 0 0-.066.273v.202h-.243v.28h.243V9.02h.348V7.838h.516v.75c0 .31.146.467.434.467a.71.71 0 0 0 .255-.05l.005-.003v-.283l-.014.009a.243.243 0 0 1-.07.03.266.266 0 0 1-.069.012c-.067 0-.117-.018-.148-.054-.031-.036-.047-.1-.047-.188v-.69Zm-2.579.932a.37.37 0 0 1-.296-.124.529.529 0 0 1-.106-.352c0-.155.035-.276.106-.36a.364.364 0 0 1 .293-.127c.121 0 .217.04.286.12.07.081.104.202.104.359 0 .159-.033.28-.098.362-.064.081-.162.122-.289.122zm.016-1.248c-.241 0-.433.07-.57.21-.136.14-.205.332-.205.573 0 .23.067.414.2.548.134.134.315.202.54.202.233 0 .421-.072.558-.213.136-.141.205-.332.205-.568 0-.232-.065-.418-.193-.551-.128-.133-.308-.2-.535-.2zm-1.337 0a.63.63 0 0 0-.403.125.398.398 0 0 0-.157.324c0 .069.011.13.034.182a.364.364 0 0 0 .104.135.905.905 0 0 0 .211.119c.08.033.139.06.177.082a.245.245 0 0 1 .077.064c.014.02.022.048.022.082 0 .099-.074.146-.225.146a.716.716 0 0 1-.385-.134l-.015-.01v.336l.005.002c.05.023.112.042.185.057a.99.99 0 0 0 .197.023.668.668 0 0 0 .426-.125.406.406 0 0 0 .158-.333.382.382 0 0 0-.085-.25.731.731 0 0 0-.29-.185.747.747 0 0 1-.206-.108.15.15 0 0 1-.042-.112c0-.043.017-.077.053-.105a.237.237 0 0 1 .148-.041.607.607 0 0 1 .33.098l.015.01v-.318l-.006-.003a.96.96 0 0 0-.328-.061zM10.608 8.77a.37.37 0 0 1-.296-.124.528.528 0 0 1-.107-.352c0-.155.036-.276.107-.36a.363.363 0 0 1 .293-.127c.12 0 .217.04.286.12.07.081.104.202.104.359 0 .159-.033.28-.098.362-.065.081-.162.122-.289.122zm.016-1.248c-.242 0-.433.07-.57.21-.136.14-.205.332-.205.573 0 .23.067.414.2.548.134.134.315.202.54.202.233 0 .42-.072.557-.213.137-.141.206-.332.206-.568 0-.232-.065-.418-.193-.551-.128-.133-.308-.2-.535-.2zm-1.304.289v-.254h-.344V9.02h.344v-.748c0-.128.029-.232.086-.311a.263.263 0 0 1 .222-.118.404.404 0 0 1 .184.048l.014.01v-.346l-.005-.003a.356.356 0 0 0-.135-.02.353.353 0 0 0-.23.082.466.466 0 0 0-.132.197zm-.96-.289a.85.85 0 0 0-.418.1.677.677 0 0 0-.276.284.904.904 0 0 0-.095.42c0 .139.03.266.092.377.061.112.148.2.257.26.11.061.236.092.377.092a.824.824 0 0 0 .414-.097l.005-.003V8.64l-.014.01a.647.647 0 0 1-.334.12.424.424 0 0 1-.322-.125.488.488 0 0 1-.118-.348c0-.148.041-.268.123-.357a.421.421 0 0 1 .323-.133c.113 0 .223.038.328.114l.014.01V7.6l-.005-.002a.568.568 0 0 0-.159-.054.95.95 0 0 0-.192-.021zm-1.026.035H6.99V9.02h.344zm-.168-.623a.207.207 0 0 0-.147.058.19.19 0 0 0-.061.143c0 .056.02.104.06.14a.21.21 0 0 0 .148.057.212.212 0 0 0 .147-.056.183.183 0 0 0 .062-.14.193.193 0 0 0-.06-.143.205.205 0 0 0-.15-.059zm-.859.515v1.57h.351V6.98h-.486l-.617 1.516-.6-1.516H4.45v2.04h.33V7.45h.011l.633 1.57h.249l.623-1.57z"
      fill="#706d6e"
    />
    <path d="M1.642 7.915H.024V6.297h1.618z" fill="#f1511b" />
    <path d="M3.429 7.915H1.81V6.297h1.618z" fill="#80cc28" />
    <path d="M1.642 9.703H.024V8.085h1.618z" fill="#00adef" />
    <path d="M3.429 9.703H1.81V8.085h1.618z" fill="#fbbc09" />
  </svg>
);

export default SvgMicrosoft;