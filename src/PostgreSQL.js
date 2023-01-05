import * as React from "react";

const SvgPostgreSQL = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.84 9.429c.082-.68.058-.78.564-.67l.128.012c.39.017.899-.063 1.198-.202.644-.299 1.026-.798.39-.667-1.448.3-1.547-.191-1.547-.191 1.53-2.27 2.169-5.151 1.617-5.856C11.685-.07 9.079.84 9.035.865L9.02.866a5.149 5.149 0 0 0-.966-.1c-.656-.012-1.153.171-1.53.457 0 0-4.65-1.915-4.433 2.409.046.92 1.318 6.96 2.836 5.136.555-.668 1.09-1.232 1.09-1.232.267.177.585.267.92.235l.026-.022c-.008.083-.005.164.01.26-.39.437-.276.513-1.058.674-.79.163-.326.453-.023.53.368.091 1.219.222 1.794-.583l-.023.092c.153.122.143.881.165 1.424.021.542.058 1.048.168 1.347.11.298.241 1.067 1.269.847.858-.184 1.514-.449 1.574-2.912" />
    <path d="M8.931 12.877c-.454 0-.75-.176-.93-.345-.271-.256-.379-.586-.443-.783l-.028-.082c-.13-.35-.173-.853-.199-1.5a25.738 25.738 0 0 1-.01-.304l-.008-.277a1.958 1.958 0 0 1-.517.163c-.32.055-.665.037-1.024-.053-.253-.063-.516-.195-.666-.397-.437.383-.855.33-1.082.255-.4-.134-.76-.51-1.097-1.148-.24-.456-.472-1.049-.69-1.763-.38-1.245-.621-2.555-.643-2.985-.067-1.347.295-2.31 1.078-2.863C3.906-.077 5.776.436 6.457.67c.458-.276.997-.41 1.606-.401.327.005.638.034.928.086A5.336 5.336 0 0 1 10.57.13c1.256.015 2.298.505 3.011 1.417.51.65.258 2.016.062 2.772a12.395 12.395 0 0 1-1.348 3.18c.16.002.393-.017.724-.085.653-.135.844.215.896.371.207.63-.695 1.104-.976 1.235-.361.167-.949.27-1.43.247l-.022-.001-.126-.011-.012.105-.013.103c-.032 1.248-.21 2.039-.577 2.562-.385.547-.92.7-1.39.802-.16.034-.307.05-.439.05zm-.956-4.544c.293.235.319.677.342 1.502.003.103.005.2.009.292.011.275.037.921.138 1.194.014.038.027.078.04.119.113.345.17.518.657.414.41-.088.62-.167.784-.4.24-.342.373-1.027.397-2.038l.498.013-.494-.06.014-.123c.048-.407.082-.7.354-.895.218-.156.466-.14.664-.105a.744.744 0 0 1-.293-.436l-.042-.205.117-.173a11.34 11.34 0 0 0 1.52-3.36c.302-1.171.21-1.793.118-1.91-1.22-1.56-3.337-.916-3.558-.843l-.037.02-.187.035-.096-.02a4.701 4.701 0 0 0-.874-.09c-.494-.008-.894.109-1.221.357l-.227.172-.264-.108c-.563-.23-2.217-.693-3.09-.075-.484.343-.704 1.015-.655 1.998.016.324.237 1.553.6 2.744.503 1.647.96 2.194 1.15 2.257.033.011.12-.056.206-.159.558-.672 1.09-1.232 1.112-1.256l.288-.303.349.232c.14.093.295.146.454.156l.831-.709L7.46 7.8a.505.505 0 0 0 .007.134l.036.233-.157.176-.018.02.457.21z" />
    <path
      fill="#336791"
      d="M13.121 7.902c-1.449.3-1.548-.191-1.548-.191 1.53-2.27 2.169-5.151 1.617-5.857C11.685-.069 9.08.841 9.035.864l-.014.003a5.172 5.172 0 0 0-.966-.1c-.656-.012-1.153.17-1.53.457 0 0-4.65-1.915-4.433 2.409.046.92 1.318 6.96 2.836 5.136.554-.668 1.09-1.232 1.09-1.232.267.177.585.267.92.235l.025-.022c-.008.083-.004.164.01.26-.39.437-.275.513-1.057.674-.79.163-.326.453-.023.53.368.091 1.219.222 1.793-.583l-.023.092c.154.122.261.798.243 1.41-.018.612-.03 1.033.09 1.361.122.328.242 1.067 1.27.847.858-.184 1.303-.66 1.365-1.456.044-.565.143-.482.15-.987l.08-.24c.091-.766.014-1.014.543-.899l.128.012c.39.018.9-.063 1.198-.202.644-.299 1.026-.798.391-.667z"
    />
    <path
      fill="#fff"
      d="M8.983 12.57c-.857 0-1.128-.678-1.239-.955-.162-.407-.197-1.984-.161-3.278a.166.166 0 0 1 .332.01c-.042 1.491.017 2.844.137 3.144.188.47.473.88 1.278.707.764-.163 1.05-.453 1.177-1.192.098-.567.291-2.18.315-2.498a.166.166 0 1 1 .331.025 48.92 48.92 0 0 1-.319 2.53c-.15.872-.54 1.268-1.435 1.46-.152.033-.29.047-.416.047zM4.339 9.257a.69.69 0 0 1-.22-.036c-.556-.185-1.086-1.092-1.575-2.693-.372-1.22-.608-2.492-.629-2.905-.06-1.226.255-2.093.939-2.578C4.207.086 6.484.999 6.58 1.039a.166.166 0 0 1-.126.307c-.022-.009-2.205-.884-3.409-.03-.585.415-.853 1.186-.798 2.29.017.349.238 1.59.614 2.825.437 1.43.933 2.332 1.363 2.475.067.023.272.091.566-.261.552-.664 1.059-1.194 1.064-1.2a.166.166 0 0 1 .24.23c-.006.005-.505.527-1.049 1.182-.258.31-.505.4-.706.4zm7.224-1.398a.166.166 0 0 1-.138-.259c1.546-2.295 2.09-5.067 1.624-5.661C12.464 1.19 11.638.8 10.593.778a4.608 4.608 0 0 0-1.488.215l-.025.01a.166.166 0 0 1-.142-.299l.044-.018H8.98h.002c.171-.062.795-.25 1.568-.24 1.156.011 2.11.457 2.76 1.288.308.393.31 1.299.003 2.485-.313 1.21-.9 2.51-1.613 3.566a.166.166 0 0 1-.137.074zm.078 1.062c-.264 0-.5-.037-.642-.122a.333.333 0 0 1-.177-.27c-.04-.697.345-.819.542-.874-.028-.041-.067-.09-.107-.14a2.474 2.474 0 0 1-.392-.633 4.12 4.12 0 0 0-.147-.275c-.372-.668-1.147-2.058-.65-2.77.23-.328.69-.458 1.365-.386-.198-.605-1.145-2.5-3.392-2.537-.675-.011-1.23.196-1.646.617-.932.941-.898 2.645-.898 2.662a.166.166 0 1 1-.332.008c-.002-.075-.037-1.863.994-2.904C6.642.81 7.277.569 8.047.582c1.437.023 2.362.754 2.885 1.363.57.663.85 1.395.873 1.64.017.181-.113.218-.14.223l-.06.001c-.663-.106-1.088-.032-1.264.22-.379.54.354 1.855.667 2.416.08.143.138.247.164.31.103.25.237.417.345.552.094.118.176.22.206.342.013.023.207.31 1.355.073.287-.06.46-.009.512.15.104.314-.478.68-.8.83-.289.134-.75.219-1.149.219zm-.488-.418c.036.036.218.1.596.084.335-.015.689-.088.901-.186a1.9 1.9 0 0 0 .547-.364l-.052.01c-.734.151-1.253.131-1.543-.06a.623.623 0 0 1-.056-.042c-.032.013-.06.02-.081.027-.165.046-.335.093-.312.53zm-4.74.927c-.183 0-.374-.025-.57-.074-.203-.05-.546-.204-.54-.455.006-.281.415-.366.57-.398.556-.114.593-.16.767-.381.05-.065.114-.145.2-.241.128-.143.268-.216.415-.216.103 0 .188.035.243.058a.714.714 0 0 1 .387.465.596.596 0 0 1-.074.52c-.336.473-.82.722-1.398.722zm-.752-.514c.05.038.15.09.262.118.17.042.334.064.49.064.473 0 .852-.196 1.128-.582.058-.08.04-.183.025-.237-.032-.112-.112-.215-.195-.25a.323.323 0 0 0-.116-.032c-.018 0-.074 0-.168.105-.079.089-.136.161-.186.225-.217.275-.316.369-.962.502a1.045 1.045 0 0 0-.278.087zm1.277-.766a.166.166 0 0 1-.164-.14.778.778 0 0 1-.008-.084 1.623 1.623 0 0 1-1.14-.513 1.856 1.856 0 0 1-.49-1.552 7.327 7.327 0 0 0 .038-1.48 3.296 3.296 0 0 1-.009-.185c0-.052.002-.192.467-.428.166-.084.498-.23.86-.268.602-.062.998.206 1.117.754.32 1.48.025 2.135-.19 2.613-.04.09-.078.173-.108.255l-.027.072c-.114.305-.212.568-.182.765a.166.166 0 0 1-.139.19zm-1.44-3.908.007.119c.018.309.052.885-.04 1.546-.067.477.079.942.4 1.277.253.264.587.41.93.41h.007c.039-.161.102-.332.17-.516L7 7.006c.035-.092.075-.18.117-.275.207-.46.465-1.033.168-2.407-.059-.272-.201-.43-.436-.481-.481-.106-1.199.256-1.35.399zm1.002-.07c-.008.058.108.215.259.236.15.02.28-.102.288-.16.008-.059-.108-.124-.259-.145-.15-.02-.28.01-.288.069zm.294.294-.043-.003a.399.399 0 0 1-.253-.158c-.023-.03-.06-.089-.052-.141.01-.077.103-.123.25-.123.032 0 .066.003.1.008.08.01.154.034.208.064.095.053.102.112.098.143-.012.084-.147.21-.308.21zm-.239-.285c.005.037.095.156.211.172l.027.002c.108 0 .189-.085.198-.113-.01-.018-.079-.066-.21-.084a.61.61 0 0 0-.086-.006c-.084 0-.13.02-.14.03zm4.537-.13c.008.06-.107.216-.258.237-.151.021-.28-.101-.289-.16-.008-.059.108-.123.259-.144.15-.021.28.01.288.068zm-.293.267c-.145 0-.27-.113-.281-.186-.012-.088.133-.155.282-.176a.692.692 0 0 1 .097-.007c.129 0 .214.038.223.1.005.039-.025.1-.077.154a.363.363 0 0 1-.205.113zm.098-.313a.664.664 0 0 0-.09.006c-.15.02-.239.081-.234.113.005.036.1.139.226.139l.03-.002a.309.309 0 0 0 .173-.096c.046-.048.065-.094.062-.11-.002-.02-.058-.05-.167-.05zm.412 3.417a.166.166 0 0 1-.138-.258c.354-.529.29-1.067.227-1.588a4.478 4.478 0 0 1-.047-.671c.007-.227.036-.413.064-.594.033-.214.064-.417.05-.657a.166.166 0 0 1 .332-.017c.015.274-.02.503-.054.724-.027.171-.054.348-.06.554-.007.195.018.402.044.622.067.553.142 1.181-.28 1.811a.166.166 0 0 1-.138.074z"
    />
    <path d="M.099 12.93c.141-.023.326-.043.561-.043.289 0 .5.067.635.188a.609.609 0 0 1 .198.474c0 .205-.06.366-.175.483-.154.165-.406.249-.692.249-.087 0-.168-.004-.235-.02v.907H.1Zm.292 1.092a.98.98 0 0 0 .242.024c.353 0 .568-.172.568-.484 0-.299-.212-.443-.534-.443-.128 0-.225.01-.276.023zm2.872.32c0 .6-.417.862-.81.862-.44 0-.779-.322-.779-.836 0-.544.356-.863.806-.863.467 0 .783.34.783.836zm-1.29.016c0 .356.205.625.494.625.282 0 .494-.266.494-.632 0-.275-.138-.624-.487-.624-.35 0-.5.322-.5.63zm1.622.507a.775.775 0 0 0 .39.118c.215 0 .316-.108.316-.242 0-.141-.084-.219-.303-.3-.292-.103-.43-.264-.43-.46 0-.261.212-.476.561-.476.165 0 .31.047.4.1l-.074.216a.633.633 0 0 0-.332-.094c-.175 0-.272.1-.272.221 0 .135.097.195.309.276.282.107.426.248.426.49 0 .285-.221.487-.608.487a.927.927 0 0 1-.456-.11zm1.727-1.79v.467h.423v.225h-.423v.876c0 .202.057.316.221.316.078 0 .135-.01.172-.02l.013.221a.723.723 0 0 1-.262.04c-.137 0-.248-.043-.319-.123-.084-.088-.114-.232-.114-.424v-.886H4.78v-.225h.252v-.39zm2.136.467a7.055 7.055 0 0 0-.014.446v.944c0 .373-.074.601-.231.743-.158.147-.387.194-.592.194-.194 0-.41-.047-.54-.134l.073-.225a.917.917 0 0 0 .477.128c.303 0 .524-.158.524-.568v-.181H7.15a.58.58 0 0 1-.518.272c-.403 0-.691-.343-.691-.793 0-.55.359-.863.732-.863.282 0 .436.148.507.282h.007l.013-.245zm-.306.641a.426.426 0 0 0-.43-.447c-.282 0-.483.239-.483.615 0 .32.16.585.48.585a.432.432 0 0 0 .41-.303.514.514 0 0 0 .023-.158v-.292zm.762-.134c0-.192-.003-.356-.013-.507h.259l.01.319h.013c.074-.218.252-.356.45-.356.034 0 .057.003.084.01v.279a.443.443 0 0 0-.1-.01c-.209 0-.357.157-.397.38a.832.832 0 0 0-.013.137v.866h-.293zm1.23.36c.006.399.262.564.557.564.212 0 .34-.037.45-.084l.05.211c-.104.047-.282.1-.54.1-.5 0-.8-.328-.8-.819 0-.49.29-.876.763-.876.53 0 .672.467.672.765 0 .06-.007.108-.01.138H9.143zm.866-.212c.003-.188-.077-.48-.41-.48-.298 0-.43.275-.453.48z" />
    <path
      fill="#336791"
      d="M10.631 14.811c.131.08.323.148.524.148.3 0 .474-.158.474-.386 0-.212-.121-.333-.427-.45-.37-.131-.597-.323-.597-.642 0-.352.292-.614.732-.614.231 0 .4.053.5.11l-.08.239a.902.902 0 0 0-.43-.107c-.31 0-.427.184-.427.339 0 .211.138.315.45.436.383.148.578.333.578.665 0 .35-.259.652-.793.652-.218 0-.457-.064-.578-.145zm3.564.689c-.306-.08-.605-.171-.867-.262a.434.434 0 0 0-.137-.034c-.538-.02-.998-.416-.998-1.145 0-.725.443-1.192 1.055-1.192.614 0 1.014.477 1.014 1.145 0 .581-.269.954-.645 1.085v.013c.225.057.47.111.662.145zm-.242-1.475c0-.453-.235-.92-.715-.92-.494 0-.736.457-.733.947-.003.48.262.914.72.914.466 0 .728-.423.728-.94zm.688-1.121h.293v2.018h.967v.245h-1.26z"
    />
  </svg>
);

export default SvgPostgreSQL;
