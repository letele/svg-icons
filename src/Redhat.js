import * as React from "react";

const SvgRedhat = ({ title, titleId, ...props }) => (
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
    <path d="M14.664 12.315a4.3 4.3 0 0 0-.959-.115c-.561 0-1.072.098-1.449.254a.128.128 0 0 0-.071.114c0 .017.005.036.011.051.045.13-.028.27-.393.35-.54.118-.882.676-1.077.862-.23.217-.877.351-.78.221.076-.101.368-.418.545-.76.159-.306.3-.393.495-.685.057-.085.278-.386.342-.624.073-.232.048-.523.076-.643.04-.173.203-.549.215-.76.007-.12-.5.17-.741.17-.24 0-.476-.144-.69-.154-.267-.013-.438.205-.68.167-.137-.022-.253-.143-.493-.152-.343-.013-.761.19-1.547.165-.773-.025-1.487-.977-1.584-1.128-.114-.178-.254-.178-.406-.038-.152.139-.34.03-.393-.064-.101-.177-.372-.696-.792-.804-.58-.15-.875.321-.836.697.038.38.285.488.399.69.114.203.172.334.387.424.152.063.209.157.163.282-.04.109-.198.133-.302.138a.805.805 0 0 1-.489-.121c-.131-.084-.238-.2-.353-.398-.133-.218-.342-.313-.586-.313a.7.7 0 0 0-.321.08 2.88 2.88 0 0 1-1.326.316H.477a7.938 7.938 0 1 1 14.187 1.777" />
    <path
      d="M14.664 12.314a4.3 4.3 0 0 0-.959-.114c-.561 0-1.072.097-1.449.254a.128.128 0 0 0-.071.113c0 .018.005.037.011.052.045.13-.028.269-.393.35-.54.118-.882.676-1.077.86-.23.219-.877.353-.78.223.076-.101.368-.418.545-.76.159-.306.3-.393.495-.685.057-.085.278-.386.342-.624.073-.232.048-.523.076-.643.04-.174.203-.549.215-.761.007-.12-.5.171-.741.171-.24 0-.476-.144-.69-.154-.267-.013-.438.205-.68.167-.137-.022-.253-.143-.493-.152-.343-.013-.761.19-1.547.165-.773-.025-1.487-.977-1.584-1.129-.114-.177-.254-.177-.406-.038-.152.14-.34.03-.393-.063-.101-.177-.372-.696-.792-.805-.58-.15-.875.322-.836.697.038.382.285.488.399.69.114.204.172.334.387.424.152.064.209.157.163.283-.04.108-.198.133-.302.138a.807.807 0 0 1-.489-.121c-.131-.085-.238-.2-.353-.399-.133-.218-.342-.313-.586-.313a.703.703 0 0 0-.321.08c-.382.2-.837.317-1.326.317H.477a7.94 7.94 0 0 0 14.187 1.777"
      fill="#fff"
    />
    <path d="M9.748 11.587c.041.04.111.174.025.344a.678.678 0 0 1-.193.227c-.111.09-.33.193-.629.003-.16-.102-.17-.136-.393-.107-.158.02-.222-.14-.164-.273.057-.133.291-.24.583-.07.13.077.335.24.514.096.075-.06.12-.1.222-.218a.026.026 0 0 1 .035-.002" />
    <path
      d="M12.48 5.888c-.08.264-.19.601-.687.856-.072.037-.1-.024-.066-.08.187-.32.22-.4.275-.526.076-.183.116-.445-.036-.991-.298-1.074-.92-2.51-1.373-2.976-.437-.45-1.229-.576-1.944-.393-.264.068-.78.336-1.735.12-1.655-.372-1.9.457-1.995.817a60.65 60.65 0 0 0-.323 1.387c-.076.418-.175 1.144 2.394 1.634 1.197.228 1.258.537 1.31.76.095.398.247.626.418.74.171.114 0 .209-.19.228-.51.053-2.393-.487-3.507-1.12-.912-.558-.927-1.06-.719-1.485-1.377-.15-2.41.13-2.598.781-.322 1.119 2.46 3.03 5.628 3.99 3.324 1.006 6.743.303 7.123-1.786.172-.95-.627-1.652-1.976-1.956M7.383 3.842c-.917.067-1.013.166-1.184.348-.242.258-.561-.334-.561-.334-.192-.04-.424-.35-.299-.637.123-.285.351-.2.423-.111.087.108.272.285.513.278.24-.006.518-.057.905-.057.392 0 .656.147.671.273.013.107-.032.209-.468.24m.963-1.515H8.34c-.014 0-.025-.01-.025-.024 0-.01.006-.018.014-.021.178-.094.443-.169.747-.2.09-.01.18-.014.265-.015h.046c.509.012.916.214.91.452-.006.238-.423.422-.932.41a1.793 1.793 0 0 1-.453-.066.035.035 0 0 1-.027-.033c0-.016.012-.03.028-.033.317-.074.531-.194.516-.307-.02-.15-.435-.233-.927-.183a2.865 2.865 0 0 0-.157.02"
      fill="#c00"
    />
  </svg>
);

export default SvgRedhat;