import * as React from "react";

const SvgParcel = ({ title, titleId, ...props }) => (
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
    <defs>
      <linearGradient
        x1={140.762}
        y1={211.397}
        x2={141.275}
        y2={211.918}
        id="parcel_svg__a"
        gradientTransform="scale(1.2477 .80147)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1={57.205}
        y1={281.654}
        x2={57.085}
        y2={281.777}
        id="parcel_svg__b"
        gradientTransform="scale(1.61804 .61803)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1={92.793}
        y1={74.087}
        x2={98.576}
        y2={75.815}
        id="parcel_svg__c"
        gradientTransform="scale(1.17773 .8491)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C37A44" offset="0%" />
        <stop stopColor="#BB713D" offset="44.42%" />
        <stop stopColor="#A05728" offset="64.06%" />
        <stop stopColor="#964E23" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={59.621}
        y1={51.936}
        x2={40.914}
        y2={36.77}
        id="parcel_svg__d"
        gradientTransform="scale(1.31582 .75998)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9B880" offset="0%" />
        <stop stopColor="#E4AF76" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={55.719}
        y1={86.93}
        x2={55.069}
        y2={86.239}
        id="parcel_svg__e"
        gradientTransform="scale(1.6097 .62123)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C37A45" stopOpacity={0} offset="0%" />
        <stop stopColor="#C37A45" offset="13.34%" />
        <stop stopColor="#D08D55" offset="29.45%" />
        <stop stopColor="#DEA167" offset="50.21%" />
        <stop stopColor="#E8AF73" offset="69.66%" />
        <stop stopColor="#ECB477" offset="86.31%" />
        <stop stopColor="#ECB477" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1={138.288}
        y1={65.814}
        x2={123.019}
        y2={95.343}
        id="parcel_svg__f"
        gradientTransform="scale(1.09015 .9173)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AF6938" offset="8.81%" />
        <stop stopColor="#9A5227" offset="48.29%" />
        <stop stopColor="#8D4520" offset="77.92%" />
      </linearGradient>
      <linearGradient
        x1={113.117}
        y1={53.892}
        x2={125.612}
        y2={43.903}
        id="parcel_svg__g"
        gradientTransform="scale(1.49966 .66682)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E4AF76" offset="3.27%" />
        <stop stopColor="#E9B880" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={79.652}
        y1={99.804}
        x2={80.034}
        y2={99.351}
        id="parcel_svg__h"
        gradientTransform="scale(1.9358 .51658)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AF6A38" stopOpacity={0} offset="0%" />
        <stop stopColor="#AF6A38" offset="8.6%" />
        <stop stopColor="#B87542" offset="19.77%" />
        <stop stopColor="#D59C66" offset="58.28%" />
        <stop stopColor="#E4AF76" offset="77.71%" />
        <stop stopColor="#E4AF76" stopOpacity={0} offset="92.39%" />
      </linearGradient>
      <linearGradient
        x1={407.956}
        y1={18.765}
        x2={417.987}
        y2={18.765}
        id="parcel_svg__i"
        gradientTransform="scale(.28906 3.45944)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#743F1A" stopOpacity={0} offset="0%" />
        <stop stopColor="#743F1A" stopOpacity={0.887} offset="49.29%" />
        <stop stopColor="#743F1A" stopOpacity={0.9} offset="50%" />
        <stop stopColor="#743F1A" stopOpacity={0.847} offset="52.97%" />
        <stop stopColor="#743F1A" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1={56.655}
        y1={282.344}
        x2={56.713}
        y2={282.286}
        id="parcel_svg__j"
        gradientTransform="scale(1.62643 .61484)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#322214" offset="0%" />
        <stop stopColor="#322314" stopOpacity={0.989} offset="23.97%" />
        <stop stopColor="#322214" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1={44.475}
        y1={120.277}
        x2={42.168}
        y2={123.162}
        id="parcel_svg__k"
        gradientTransform="scale(1.63392 .61203)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C69866" offset="4.76%" />
        <stop stopColor="#BA8C5E" offset="41.56%" />
        <stop stopColor="#B5875B" offset="81.35%" />
      </linearGradient>
      <linearGradient
        x1={71.636}
        y1={87.235}
        x2={51.605}
        y2={67.267}
        id="parcel_svg__l"
        gradientTransform="scale(1.0555 .94742)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#845F35" offset="0%" />
        <stop stopColor="#91673C" offset="43.11%" />
        <stop stopColor="#976A40" offset="44.07%" />
        <stop stopColor="#986B40" offset="87.37%" />
        <stop stopColor="#AB8157" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={141.054}
        y1={211.43}
        x2={141.116}
        y2={211.493}
        id="parcel_svg__m"
        gradientTransform="scale(1.25025 .79984)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#322214" stopOpacity={0} offset="0%" />
        <stop stopColor="#322214" offset="100%" />
      </linearGradient>
      <linearGradient
        x1={217.939}
        y1={74.773}
        x2={220.763}
        y2={57.73}
        id="parcel_svg__n"
        gradientTransform="scale(.91536 1.09247)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A9794B" offset="0%" />
        <stop stopColor="#AE7F53" offset="38.57%" />
        <stop stopColor="#AC7D50" offset="45.57%" />
        <stop stopColor="#A9794B" offset="62.36%" />
        <stop stopColor="#B2875D" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="m140.515 191.333 70.257-44.428c.26-.16.6-.09.76.17.16.26.09.6-.17.76l-70.487 44.568c-.09.06-.19.09-.29.09z"
      fill="url(#parcel_svg__a)"
      style={{
        fill: "url(#parcel_svg__a)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="M140.585 192.493c-.06 0-.13-.01-.19-.03l-95.787-35.699a.543.543 0 0 1-.32-.71c.11-.29.42-.43.71-.32l95.537 35.599z"
      fill="url(#parcel_svg__b)"
      style={{
        fill: "url(#parcel_svg__b)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="m14.964 3.417-.681 1.127-2.736 1.163-.152.065L8.937 8.07a.321.321 0 0 0-.085.153c-.003.012-.014.007-.024.006-.011 0-.027.004-.028-.01-.001-.049-.007-.104-.086-.153L7.482 7.27l-.898-.582-2.53-.65-2.119-.542L.593 3.41l.02-.024.002-.002 5.036-1.309c.008-.002.009 0 .012.003l1.718 2.573.034.051c.037.054.04.087.04.111h.032V4.8l.001-.006.001-.007c0-.003 0-.005.002-.008l.006-.029c0-.003.002-.006.003-.008l.01-.03.005-.012a.28.28 0 0 1 .03-.058L9.093 2.39c.004-.006.006-.008.014-.007l5.847 1.006z"
      fill="#e8b67f"
    />
    <path
      fill="url(#parcel_svg__c)"
      style={{
        fill: "url(#parcel_svg__c)",
      }}
      d="m63.898 64.378 55.257-19.87.15-.29v.29l.28 39.86h-.01l-14.58-9.45z"
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="M119.155 44.509 63.898 64.368l-4.98-1.28-29.42-7.55L7.71 21.69l.35-.41L89.857.02c.12-.04.14-.02.19.05l27.898 41.789.55.82c.6.9.66 1.44.66 1.83z"
      fill="url(#parcel_svg__d)"
      style={{
        fill: "url(#parcel_svg__d)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="M119.35 46.619 67.102 65.398l-8.15-2.09 59.028-21.22.55.82c.6.88.66 1.42.66 1.81h.15z"
      fill="url(#parcel_svg__e)"
      style={{
        fill: "url(#parcel_svg__e)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path fill="#d2a679" d="m.594 3.41.02-.023 1.367 2.119-.045-.012z" />
    <path
      d="m185.613 59.008-2.47 1.05-39.929 37.339c-.77.77-1.29 1.87-1.38 2.48-.04.21-.22.12-.39.11-.18-.01-.43.06-.45-.16-.02-.8-.11-1.69-1.4-2.49l-20.009-12.97-.27-39.848v-.29l.37.29z"
      fill="url(#parcel_svg__f)"
      style={{
        fill: "url(#parcel_svg__f)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="m241.1 21.81-11.059 18.309-40.438 17.19-3.98 1.69-65.948-14.49c-.04-.51.31-1.67.69-2.41.08-.16.16-.29.24-.4l25.15-36.579c.06-.09.09-.13.22-.11l94.966 16.34z"
      fill="url(#parcel_svg__g)"
      style={{
        fill: "url(#parcel_svg__g)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="m189.603 57.308-6.45 2.74-.83.8-63.018-13.93.29-2.42h.08c-.04-.51.31-1.67.69-2.41z"
      fill="url(#parcel_svg__h)"
      style={{
        fill: "url(#parcel_svg__h)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      fill="url(#parcel_svg__i)"
      opacity={0.75}
      style={{
        fill: "url(#parcel_svg__i)",
      }}
      d="M119.585 84.367h-.01l-1.93-1.26V45.05l1.51-.54h.51l1.39.3v40.508z"
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="m8.75 13.886-5.902-2.202c-.033-.014-.038-.046-.04-.085l-.254-5.03c0-.013.015-.021.014-.03a.347.347 0 0 0-.052-.098L.119 5.08l.02-.046 6.445 1.654 2.13 1.38c.079.049.085.104.085.153.001.013.017.01.028.01s.022.006.024-.007a.317.317 0 0 1 .085-.152l2.459-2.3 4.458-1.894.027.037-2.407 2.115c-.047.047-.068.104-.059.128l-.246 4.93c-.004.03-.019.04-.05.062l-4.315 2.73c-.017.012-.036.015-.052.007z"
      fill="#bf9064"
    />
    <path
      d="m8.827 8.23-.042 5.659a.051.051 0 0 1-.035-.003l-5.902-2.202c-.034-.014-.039-.046-.04-.084l-.255-5.03v-.006l.002-.002.002-.003c0-.002.001-.002.002-.003l.007-.01v-.003L8.8 8.223c.003.01.017.006.027.007z"
      fill="#bd8f63"
    />
    <path
      d="M140.755 191.613v.26a.83.83 0 0 1-.56-.04l-95.867-35.759c-.38-.16-.53-.47-.6-.85z"
      fill="url(#parcel_svg__j)"
      opacity={0.54}
      style={{
        fill: "url(#parcel_svg__j)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="m6.116 10.44 2.286.747-.006 2.229-2.243-.824zm1.145 1.497.006 1.032 1.107.407v-1.053zm.328.333.223.356.22-.192.037.044-.226.198.227.36-.033.021-.223-.355-.218.191-.038-.044.225-.197-.227-.361zm.658.401v.102l.059.019v.114l-.059-.023v.092l-.128-.194zm-.197-.123.045.014v.405l-.045-.016zm-1.889-.994.017 1.017 1.058.387-.007-1.03zm1.654 1.212.116.187-.231-.084zm.179-.171v.265l-.12-.17zm-.459-.236.045.015v.405l-.045-.015zm.1.11.115.176-.115.088zm-.957-.492.044.015v.026c.13.052.259.182.32.385-.04-.068-.075-.08-.139-.06-.023-.048-.092-.074-.133-.048a.119.119 0 0 0-.046-.048l.002.387c0 .035-.025.067-.086.055-.055-.013-.078-.056-.072-.129l.031.005c0 .049.004.077.04.085.032.008.046-.004.046-.033l-.004-.383a.06.06 0 0 0-.045.013c-.014-.036-.081-.084-.132-.048-.036-.057-.103-.078-.14-.037.048-.145.178-.196.315-.159zm.701.378.125.197-.124.103.003-.097-.06-.014v-.112l.056.02zm.317.042.234.085-.117.103zm-.436-1.551.002 1.053 1.113.387v-1.075Zm.207.91.665.226v.133l-.665-.23zm-.575.25h.003c.004.005.004.05-.01.061a.025.025 0 0 1-.026-.003c-.009-.007-.014-.016-.01-.031s.04-.031.046-.027zm.062-.106.002.001c.005.004.005.05-.01.061a.025.025 0 0 1-.026-.003c-.008-.007-.013-.017-.01-.031.004-.015.041-.031.046-.027zm-.173-.004h.003c.005.005.005.051-.01.062a.025.025 0 0 1-.026-.003c-.009-.007-.014-.017-.01-.032s.04-.03.046-.026zm-.174-.025h.002c.005.005.005.051-.01.061a.025.025 0 0 1-.025-.003c-.009-.006-.014-.016-.01-.031s.04-.03.045-.026zm1.374-.692.16.319-.11-.038v.461l-.11-.038.001-.457-.11-.036zm-1.84-.7.018 1.038 1.071.369-.01-1.053zm1.476.58.161.317-.11-.037v.461l-.11-.038v-.458l-.11-.035zm-1.237-.371.087.028.04.148-.045-.003.13.314-.067-.259h.038l-.039-.181.452.149v.248a.174.174 0 0 1-.246.154v.25l.207.132-.5-.173.2.01-.003-.247a.385.385 0 0 1-.246-.32z"
      fill="#322214"
    />
    <path
      d="M141.435 99.977c-.4.01-.7.54-.71 1.02l-.09.04-101.097-28.04c-.01-.19.21-.31.23-.43.01-.01.01-.02 0-.03-.07-.31-.66-1.48-.85-1.6L0 48.81l.33-.75 104.656 26.849h.01l34.589 22.409c1.29.81 1.39 1.69 1.4 2.49 0 .01 0 .03.01.04.04.19.28.12.44.13z"
      fill="url(#parcel_svg__k)"
      style={{
        fill: "url(#parcel_svg__k)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="M13.474 6.029c-.047.046-.068.104-.06.127L8.882 8.301l-.009-.007c0-.036-.023-.06-.04-.064.009.002.017.005.02-.007a.165.165 0 0 1 .016-.051.347.347 0 0 1 .058-.09l.011-.012 2.459-2.299 4.458-1.895.027.038z"
      fill="#cd9c6b"
    />
    <path
      d="M95.996 109.136c.11.03.15.04.15-.05l-.38-20.339c-.03-.69-.2-2.05-1.03-2.6L57.868 63.748l-17.28-4.46 37.469 22.39c.94.62 1.02 1.78 1.06 2.64l.54 19.778c0 .1.02.12.09.15z"
      fill="url(#parcel_svg__l)"
      style={{
        fill: "url(#parcel_svg__l)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="M8.827 8.23c-.025 0-.044.035-.044.065 0 .002-.004.002-.005 0-.005-.067-.033-.142-.069-.169L6.562 6.742l.021-.056 2.13 1.38c.08.05.086.104.086.153l.001.003c.003.011.017.007.027.008z"
      fill="#d4a271"
    />
    <path fill="#deb37e" d="m.119 5.08.02-.046 6.444 1.653-.021.055z" />
    <path
      d="m13.415 6.156-.246 4.93c-.004.031-.018.04-.05.062L8.804 13.88a.065.065 0 0 1-.019.009l.043-5.659c.01 0 .021.006.024-.007v-.005l4.562-2.067.001.006z"
      fill="#dbad77"
    />
    <path
      d="M211.952 146.335v.04c-.06.51-.3.66-.81 1.01l-70.077 44.358c-.1.07-.21.11-.31.14v-.26z"
      fill="url(#parcel_svg__m)"
      opacity={0.54}
      style={{
        fill: "url(#parcel_svg__m)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path
      d="m13.088 8.939-.098 2.007-1.435.893.074-2.089zm-.767 1.453-.713.42-.034.987.71-.441zm-.34.424-.002.033c.086-.042.166-.012.2.129-.023-.033-.066-.02-.094.046-.013-.027-.079-.005-.089.053-.005-.01-.015-.013-.025-.011l-.016.38c-.001.033-.003.068-.044.094-.02.008-.07.015-.063-.056l.024-.018c-.002.045.01.058.034.043.03-.017.024-.046.026-.072l.013-.361a.086.086 0 0 0-.037.055c-.008-.022-.08-.009-.088.055-.02-.027-.076-.001-.097.067.039-.177.135-.324.23-.388v-.03zm1.04-.838-.68.402-.037.969.672-.423zm-.21.327.02.018-.148.336.122.169-.02.042-.121-.167-.147.332-.02-.018.149-.338-.126-.173.022-.042.123.17zm-.413.386.077.093-.082.176v-.077l-.035.02.002-.1.035-.02zm.133-.122-.016.371-.028.018.015-.37zm.13.194.065.086-.141.087zm-.755.027c.003 0 .002.042-.009.063-.004.008-.01.016-.016.016s-.008-.005-.005-.021a.188.188 0 0 1 .03-.058zm.655-.17.066.08-.077.15zm-.468.093a.14.14 0 0 1-.009.063c-.003.008-.01.016-.016.016-.005 0-.008-.005-.005-.021a.188.188 0 0 1 .03-.058zm.274-1.345-.72.404-.038 1.008.715-.421zm.475 1.012-.018.37-.024.016.016-.37zm-.816.305c.003 0 .001.043-.01.063-.003.008-.01.016-.016.016-.005.001-.008-.005-.004-.021a.188.188 0 0 1 .03-.058zm.752-.198-.01.237-.064-.076zm.153-.112-.004.09.036-.019-.004.101-.035.02-.001.084-.075-.09zm-.79.188c.003 0 .001.043-.01.064-.003.007-.01.015-.015.016-.006 0-.008-.006-.005-.022a.188.188 0 0 1 .03-.058zm.602-.143-.076.175-.066-.09zm-.544-.838-.009.254a.45.45 0 0 1-.175.308l-.011.24.137-.03-.334.193.139-.132.007-.235c-.09.05-.16-.044-.156-.14l.008-.233.06-.033.02.113-.033.026.072.209-.028-.19.025-.029-.019-.15zm.875-.607-.69.386-.043.99.683-.408zm-.18.854-.009.118-.404.239.006-.12zm-.286-.508.09.189-.068.037-.02.423-.064.037.012-.423-.064.039zm.224-.124.087.185-.071.04-.015.42-.068.038.021-.423-.067.039z"
      fill="#322214"
    />
    <path
      d="M11.432 5.82 8.994 8.086c-.069.065-.114.164-.113.215 0 .003-.007.004-.01 0 .004-.04-.022-.066-.04-.07.01 0 .018.004.02-.008a.165.165 0 0 1 .017-.051.349.349 0 0 1 .068-.101l2.459-2.3Z"
      fill="#d7aa77"
    />
    <path
      d="M175.003 105.476c0 .11.05.16.12.13l11.89-6.1c.02-.01.03-.03.04-.07l.66-19.489c.02-1.07.62-2.13 1.44-2.86L228.64 41.6l-12.02 5.15-39.688 35.958c-1.02 1-1.37 2.18-1.39 3.18z"
      fill="url(#parcel_svg__n)"
      style={{
        fill: "url(#parcel_svg__n)",
      }}
      transform="translate(.119 2.074) scale(.06157)"
    />
    <path fill="#f8ce93" d="M15.854 3.877 11.395 5.77l.037.049 4.449-1.906z" />
  </svg>
);

export default SvgParcel;
