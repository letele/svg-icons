import * as React from "react";

const SvgNodejs = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 16 16"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="nodejs_svg__b"
        x1={79.822}
        x2={32.862}
        y1={21.347}
        y2={105.422}
        gradientTransform="scale(.93682 1.06744)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#41873F" />
        <stop offset="32.88%" stopColor="#418B3D" />
        <stop offset="63.52%" stopColor="#419637" />
        <stop offset="93.19%" stopColor="#3FA92D" />
        <stop offset="100%" stopColor="#3FAE2A" />
      </linearGradient>
      <linearGradient
        id="nodejs_svg__d"
        x1={51.369}
        x2={184.674}
        y1={64.595}
        y2={-19.865}
        gradientTransform="scale(.92602 1.07989)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="13.76%" stopColor="#41873F" />
        <stop offset="40.32%" stopColor="#54A044" />
        <stop offset="71.36%" stopColor="#66B848" />
        <stop offset="90.81%" stopColor="#6CC04A" />
      </linearGradient>
      <linearGradient
        id="nodejs_svg__e"
        x1={5.463}
        x2={60.625}
        y1={1.396}
        y2={1.396}
        gradientTransform="scale(1.63182 .61281)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="9.192%" stopColor="#6CC04A" />
        <stop offset="28.64%" stopColor="#66B848" />
        <stop offset="59.68%" stopColor="#54A044" />
        <stop offset="86.24%" stopColor="#41873F" />
      </linearGradient>
      <linearGradient
        id="nodejs_svg__f"
        x1={-1.422}
        x2={120.279}
        y1={66.99}
        y2={66.99}
        gradientTransform="scale(.92515 1.0809)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="9.192%" stopColor="#6CC04A" />
        <stop offset="28.64%" stopColor="#66B848" />
        <stop offset="59.68%" stopColor="#54A044" />
        <stop offset="86.24%" stopColor="#41873F" />
      </linearGradient>
      <linearGradient
        id="nodejs_svg__g"
        x1={117.947}
        x2={169.562}
        y1={68.392}
        y2={68.392}
        gradientTransform="scale(.65492 1.5269)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="9.192%" stopColor="#6CC04A" />
        <stop offset="28.64%" stopColor="#66B848" />
        <stop offset="59.68%" stopColor="#54A044" />
        <stop offset="86.24%" stopColor="#41873F" />
      </linearGradient>
      <linearGradient
        id="nodejs_svg__h"
        x1={-1.039}
        x2={87.897}
        y1={150.751}
        y2={150.751}
        gradientTransform="scale(1.26597 .7899)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="9.192%" stopColor="#6CC04A" />
        <stop offset="28.64%" stopColor="#66B848" />
        <stop offset="59.68%" stopColor="#54A044" />
        <stop offset="86.24%" stopColor="#41873F" />
      </linearGradient>
      <linearGradient
        id="nodejs_svg__i"
        x1={100.854}
        x2={46.004}
        y1={37.182}
        y2={216.513}
        gradientTransform="scale(1.26597 .7899)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#41873F" />
        <stop offset="32.88%" stopColor="#418B3D" />
        <stop offset="63.52%" stopColor="#419637" />
        <stop offset="93.19%" stopColor="#3FA92D" />
        <stop offset="100%" stopColor="#3FAE2A" />
      </linearGradient>
      <path
        id="nodejs_svg__a"
        d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085z"
      />
    </defs>
    <g fill="none">
      <path
        fill="#539e43"
        d="M7.914 12.645a.326.326 0 0 1-.15-.038l-.477-.27c-.072-.038-.036-.052-.015-.059a.89.89 0 0 0 .215-.092c.011-.007.025-.004.036.003l.366.21c.014.006.032.006.043 0l1.43-.793c.015-.007.022-.02.022-.038v-1.58c0-.018-.007-.031-.022-.038l-1.43-.79c-.014-.006-.032-.006-.043 0l-1.43.79c-.015.006-.022.024-.022.037v1.581c0 .014.007.031.021.038l.391.216c.212.103.344-.017.344-.137v-1.56c0-.021.018-.042.043-.042h.183c.022 0 .043.018.043.042v1.56c0 .27-.154.429-.423.429-.082 0-.147 0-.33-.086l-.376-.206a.287.287 0 0 1-.15-.25V9.99c0-.103.057-.2.15-.25l1.43-.793a.333.333 0 0 1 .302 0l1.43.792c.093.052.15.148.15.25v1.582a.287.287 0 0 1-.15.25l-1.43.792a.38.38 0 0 1-.151.031zm.44-1.087c-.626 0-.756-.274-.756-.508 0-.02.018-.04.043-.04h.187c.021 0 .04.013.04.034.028.181.11.27.49.27.302 0 .43-.065.43-.219 0-.09-.035-.154-.505-.199-.39-.038-.634-.12-.634-.418 0-.278.243-.443.652-.443.459 0 .685.151.714.48 0 .01-.004.021-.011.031-.007.007-.018.014-.029.014H8.79a.042.042 0 0 1-.04-.03c-.043-.19-.154-.251-.448-.251-.33 0-.37.11-.37.192 0 .1.047.13.492.185.441.055.649.134.649.429-.004.302-.262.473-.717.473z"
      />
      <path
        fill="#333"
        d="M3.475 6.462a.173.173 0 0 0-.093-.151l-1.52-.837a.228.228 0 0 0-.082-.024h-.015a.176.176 0 0 0-.082.024l-1.52.837a.173.173 0 0 0-.093.15l.003 2.25c0 .031.018.062.047.076a.084.084 0 0 0 .09 0l.903-.494a.173.173 0 0 0 .093-.15V7.09c0-.062.036-.12.093-.151l.384-.213a.18.18 0 0 1 .093-.024.16.16 0 0 1 .09.024l.383.213c.058.03.094.089.094.15v1.053c0 .062.035.12.093.151l.903.494a.09.09 0 0 0 .093 0 .085.085 0 0 0 .047-.075zm7.307-3.097a.103.103 0 0 0-.09 0 .089.089 0 0 0-.046.076V5.67c0 .02-.01.04-.032.055a.071.071 0 0 1-.065 0l-.38-.21a.185.177 0 0 0-.183 0l-1.52.84a.173.173 0 0 0-.093.152v1.676c0 .062.036.12.093.151l1.52.84a.185.177 0 0 0 .183 0l1.52-.84a.173.173 0 0 0 .093-.15v-4.18a.175.175 0 0 0-.093-.155l-.907-.484Zm-.14 4.266c0 .018-.007.031-.021.038l-.52.288a.053.05 0 0 1-.047 0l-.52-.288c-.014-.007-.021-.024-.021-.038v-.576c0-.017.007-.03.021-.038l.52-.288a.053.05 0 0 1 .047 0l.52.288c.014.007.021.024.021.038zm5.199-.59a.17.17 0 0 0 .09-.15v-.408a.177.177 0 0 0-.09-.151l-1.51-.837a.185.177 0 0 0-.182 0l-1.52.84a.173.173 0 0 0-.094.15v1.678c0 .062.036.12.093.15l1.51.824c.057.03.125.03.18 0l.913-.487a.085.085 0 0 0 .047-.076.085.085 0 0 0-.047-.075l-1.527-.84a.089.089 0 0 1-.047-.076V7.06c0-.031.018-.062.047-.076l.477-.26a.088.084 0 0 1 .093 0l.477.26a.089.089 0 0 1 .047.076v.411c0 .031.017.062.046.076a.09.09 0 0 0 .093 0z"
      />
      <path
        fill="#539e43"
        d="M14.217 6.963a.033.031 0 0 1 .036 0l.29.16c.01.008.018.018.018.032v.322a.036.036 0 0 1-.018.03l-.29.162a.033.031 0 0 1-.036 0l-.29-.161a.036.036 0 0 1-.019-.031v-.322c0-.014.008-.024.018-.031z"
      />
      <g transform="matrix(.03102 0 0 .02967 4.221 5.447)">
        <mask id="nodejs_svg__c" fill="#fff">
          <use xlinkHref="#nodejs_svg__a" />
        </mask>
        <use
          fill="url(#nodejs_svg__b)"
          xlinkHref="#nodejs_svg__a"
          style={{
            fill: "url(#nodejs_svg__b)",
          }}
        />
        <g mask="url(#nodejs_svg__c)">
          <path d="M51.893 1.85 3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693Zm4.739 123.203c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079z" />
          <path
            fill="url(#nodejs_svg__d)"
            d="M106.676 29.934 57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156z"
            style={{
              fill: "url(#nodejs_svg__d)",
            }}
          />
        </g>
        <g mask="url(#nodejs_svg__c)">
          <path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271zM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116Z" />
          <path
            fill="url(#nodejs_svg__e)"
            fillRule="evenodd"
            d="m50.391.809-.693.347h.924z"
            transform="translate(0 -9.246)"
            style={{
              fill: "url(#nodejs_svg__e)",
            }}
          />
          <path
            fill="url(#nodejs_svg__f)"
            fillRule="evenodd"
            d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2z"
            transform="translate(0 -9.246)"
            style={{
              fill: "url(#nodejs_svg__f)",
            }}
          />
          <path
            fill="url(#nodejs_svg__g)"
            fillRule="evenodd"
            d="m111.3 104.712-.347-.578v.809l.346-.231z"
            transform="translate(0 -9.246)"
            style={{
              fill: "url(#nodejs_svg__g)",
            }}
          />
          <path
            fill="url(#nodejs_svg__h)"
            fillRule="evenodd"
            d="m106.792 105.636-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
            transform="translate(0 -9.246)"
            style={{
              fill: "url(#nodejs_svg__h)",
            }}
          />
          <path
            fill="url(#nodejs_svg__i)"
            fillRule="evenodd"
            d="m106.792 105.636-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
            transform="translate(0 -9.246)"
            style={{
              fill: "url(#nodejs_svg__i)",
            }}
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgNodejs;
