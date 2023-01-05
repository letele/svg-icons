import * as React from "react";

const SvgSqlite = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="sqlite_svg__a"
        x1={92.697}
        x2={92.697}
        y1={17.661}
        y2={157.956}
        gradientTransform="scale(.97318 1.02756)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#97D9F6" />
        <stop offset="92.024%" stopColor="#0F80CC" />
        <stop offset="100%" stopColor="#0F80CC" />
      </linearGradient>
    </defs>
    <path
      fill="#003b57"
      d="M6.104 7.953a.716.716 0 0 0-.513.187.645.645 0 0 0-.198.489.722.722 0 0 0 .2.526c.069.072.205.171.409.297.25.153.413.276.491.373a.474.474 0 0 1 .118.303.429.429 0 0 1-.142.339.556.556 0 0 1-.383.127.621.621 0 0 1-.628-.643H5.38v.705h.078c.024-.066.057-.1.1-.1.02 0 .07.014.145.04.183.066.334.097.453.097a.713.713 0 0 0 .524-.217.718.718 0 0 0 .219-.525c0-.16-.049-.3-.144-.424-.095-.123-.28-.267-.555-.431-.238-.143-.392-.26-.463-.35a.475.475 0 0 1-.108-.3c0-.119.044-.214.13-.286a.515.515 0 0 1 .34-.106c.158 0 .29.047.396.142a.596.596 0 0 1 .183.396h.077V7.98h-.072a.185.185 0 0 1-.025.06c-.007.01-.021.014-.042.014a.523.523 0 0 1-.134-.031 1.193 1.193 0 0 0-.378-.07zm2.544 0c-.257 0-.49.06-.7.181-.212.121-.378.29-.502.503-.123.214-.184.44-.184.683 0 .325.106.614.32.868.215.254.473.412.771.473.068.035.166.127.294.275.144.168.265.289.365.36a1.1 1.1 0 0 0 .323.16c.114.035.238.053.371.053.162 0 .307-.029.434-.087l-.028-.07a.621.621 0 0 1-.578-.072c-.114-.076-.257-.219-.427-.43a1.47 1.47 0 0 0-.167-.19c.327-.063.595-.221.804-.475.21-.253.314-.542.314-.865a1.3 1.3 0 0 0-.408-.971 1.385 1.385 0 0 0-1.002-.396zm1.588 0 .004.083c.17 0 .267.05.288.152.008.036.012.103.012.2l-.001 1.841c-.001.138-.021.225-.059.264-.037.037-.101.061-.194.07l-.004.084h1.704l.044-.418h-.078c-.022.114-.073.195-.154.242-.081.046-.225.07-.433.07h-.161c-.187 0-.295-.068-.324-.204a.427.427 0 0 1-.008-.087l.007-1.863c0-.137.017-.23.053-.274.037-.045.102-.07.197-.077l-.004-.083zm-1.56.1c.289 0 .525.115.708.345.182.23.273.546.273.945 0 .378-.092.681-.276.91a.895.895 0 0 1-.733.34.857.857 0 0 1-.712-.352c-.181-.235-.271-.54-.271-.916 0-.386.09-.695.274-.926a.892.892 0 0 1 .736-.345zm3.918.397a.119.119 0 0 0-.097.042.115.115 0 0 0-.023.104c.008.04.03.075.067.105a.18.18 0 0 0 .116.045c.04 0 .07-.015.093-.045a.126.126 0 0 0 .02-.105.18.18 0 0 0-.064-.104.172.172 0 0 0-.112-.042zm1.124.283c-.07.271-.224.418-.459.442l.003.078h.274l-.005.92c0 .157.005.262.016.316.027.127.11.192.25.192.202 0 .413-.123.635-.369l-.067-.057c-.16.162-.301.243-.425.243-.076 0-.123-.044-.14-.13a.33.33 0 0 1-.007-.073l.003-1.042h.419l-.004-.124h-.414v-.396zm1.62.346c-.234 0-.425.114-.573.34a.966.966 0 0 0-.135.754.65.65 0 0 0 .206.376.587.587 0 0 0 .393.132c.147 0 .351-.037.437-.112.086-.075.166-.196.24-.362l-.06-.061a.636.636 0 0 1-.53.323c-.245 0-.395-.134-.451-.401a.977.977 0 0 1-.017-.11c.292-.045.512-.127.661-.245.15-.118.298-.243.27-.376a.304.304 0 0 0-.12-.187c-.063-.046-.228-.07-.32-.07zm-2.562.01-.506.116v.09l.175-.022c.085 0 .135.039.15.115a.617.617 0 0 1 .01.106l-.006.827c0 .114-.014.18-.04.2-.025.02-.093.03-.203.03l-.002.078h.801l-.001-.078a.558.558 0 0 1-.216-.026c-.032-.017-.053-.048-.063-.095a1.013 1.013 0 0 1-.01-.175l.002-1.166h-.091zm2.434.153a.23.23 0 0 1 .144.056.216.216 0 0 1 .084.123c.046.22-.149.371-.587.456a.774.774 0 0 1 .086-.437c.07-.131.162-.198.273-.198z"
    />
    <path
      fill="#0f80cc"
      d="M4.972 4.799H.625a.531.531 0 0 0-.53.53v4.795c0 .291.238.53.53.53h2.863c-.032-1.425.454-4.19 1.484-5.855Z"
    />
    <path
      fill="url(#sqlite_svg__a)"
      d="M152.775 14.955H17.15c-6.698 0-12.148 5.449-12.148 12.148v143.883c30.716-11.788 76.817-21.96 108.693-21.498 6.406-33.494 25.232-99.134 39.08-134.533z"
      style={{
        fill: "url(#sqlite_svg__a)",
      }}
      transform="matrix(.0309 0 0 .0309 .095 4.491)"
    />
    <path
      fill="#003b57"
      d="M5.987 4.642c-.298-.266-.659-.159-1.015.157a2.502 2.502 0 0 0-.158.154C4.206 5.6 3.641 6.795 3.465 7.71a2.516 2.516 0 0 1 .18.546l.025.108-.028-.086a5.712 5.712 0 0 0-.015-.042.487.487 0 0 0-.01-.023 5.31 5.31 0 0 0-.197-.372 9.29 9.29 0 0 0-.109.34c.14.254.225.692.225.692s-.007-.028-.043-.127a4.715 4.715 0 0 0-.222-.423c-.063.232-.088.388-.066.427.044.073.086.201.122.342.083.318.14.704.14.704l.005.065a6.46 6.46 0 0 0 .016.793c.028.331.079.615.145.768l.044-.025c-.096-.3-.135-.692-.118-1.145.026-.692.185-1.527.48-2.398.497-1.313 1.187-2.367 1.818-2.87-.575.52-1.354 2.202-1.587 2.825a11.297 11.297 0 0 0-.558 1.98c.192-.588.814-.84.814-.84s.306-.377.662-.915c-.213.049-.564.132-.682.182-.173.072-.22.097-.22.097s.562-.342 1.043-.497c.663-1.043 1.384-2.525.658-3.173"
    />
  </svg>
);

export default SvgSqlite;
