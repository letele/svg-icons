import * as React from "react";

const SvgReact = ({ title, titleId, ...props }) => (
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
      d="M.044 7.974c0 1.202 1.173 2.324 3.023 2.956-.37 1.86-.066 3.36.947 3.943 1.04.6 2.592.185 4.064-1.102 1.435 1.235 2.885 1.721 3.897 1.135 1.04-.602 1.356-2.202.977-4.12 1.927-.638 3.004-1.594 3.004-2.812 0-1.174-1.175-2.19-3-2.817.408-1.998.062-3.46-.993-4.069-1.017-.586-2.484-.075-3.94 1.192C6.51.935 5.056.525 4.003 1.135c-1.017.588-1.307 2.114-.936 4.008C1.28 5.767.044 6.805.044 7.974Z"
      fill="#fff"
    />
    <path
      d="M12.57 5.78a9.467 9.467 0 0 0-.456-.143 8.6 8.6 0 0 0 .07-.31c.345-1.672.12-3.018-.65-3.462-.736-.425-1.942.018-3.16 1.078-.117.102-.234.21-.352.323a8.604 8.604 0 0 0-.234-.216C6.512 1.917 5.233 1.439 4.465 1.884c-.737.426-.955 1.692-.645 3.276.03.153.065.31.104.468a9.35 9.35 0 0 0-.523.165C1.905 6.315.95 7.133.95 7.98c0 .876 1.025 1.754 2.584 2.287.123.042.25.082.382.12-.043.171-.08.34-.111.504-.296 1.557-.065 2.793.67 3.216.759.438 2.032-.012 3.272-1.096.098-.085.196-.176.295-.271.128.123.255.239.382.348 1.2 1.034 2.387 1.451 3.121 1.026.758-.439 1.004-1.766.685-3.382a8.006 8.006 0 0 0-.085-.378c.09-.026.177-.053.263-.082 1.62-.537 2.674-1.404 2.674-2.292 0-.851-.987-1.674-2.513-2.2z"
      fill="#53c1de"
    />
    <path
      d="M12.218 9.7c-.078.025-.157.05-.238.073a14.16 14.16 0 0 0-.715-1.79c.282-.607.514-1.202.688-1.764.144.042.284.086.42.132 1.307.45 2.105 1.116 2.105 1.63 0 .545-.861 1.255-2.26 1.718zm-.58 1.15c.14.714.161 1.36.067 1.864-.084.454-.253.757-.462.878-.446.258-1.398-.078-2.425-.961a8.652 8.652 0 0 1-.356-.325c.398-.435.796-.941 1.185-1.504.683-.06 1.329-.16 1.914-.295.029.117.054.23.076.342zm-5.87 2.697c-.435.154-.782.158-.992.037-.445-.257-.63-1.25-.378-2.58.03-.153.064-.31.103-.47.58.128 1.22.22 1.905.276.39.55.8 1.056 1.213 1.499-.09.087-.18.17-.27.248-.548.48-1.097.82-1.581.99zM3.729 9.696c-.689-.236-1.258-.542-1.648-.876-.35-.3-.528-.598-.528-.84 0-.515.768-1.17 2.047-1.617a8.71 8.71 0 0 1 .487-.153c.176.575.408 1.177.688 1.785a14.708 14.708 0 0 0-.697 1.81 7.437 7.437 0 0 1-.349-.11zm.683-4.652c-.265-1.357-.089-2.38.355-2.638.473-.274 1.518.117 2.62 1.095.07.063.141.128.212.196-.41.44-.816.943-1.204 1.49-.664.061-1.3.16-1.885.293a8.851 8.851 0 0 1-.098-.436zm6.096 1.506a19.2 19.2 0 0 0-.43-.707c.452.057.884.132 1.29.225-.123.39-.274.799-.453 1.217a21.04 21.04 0 0 0-.407-.735zM8.023 4.128c.278.302.557.639.831 1.004a17.778 17.778 0 0 0-1.67 0c.274-.362.556-.699.839-1.004zM5.52 6.554c-.14.242-.273.486-.4.73a13.328 13.328 0 0 1-.448-1.222c.403-.09.833-.164 1.28-.22-.148.231-.292.469-.432.712zm.446 3.607a12.85 12.85 0 0 1-1.303-.209c.125-.403.279-.822.458-1.248a17.842 17.842 0 0 0 .844 1.457zm2.072 1.713c-.286-.308-.571-.65-.85-1.017a21.104 21.104 0 0 0 1.68-.003c-.275.374-.553.716-.83 1.02zm2.882-3.191c.189.43.348.847.474 1.243-.41.093-.852.169-1.318.225a21.112 21.112 0 0 0 .844-1.468zm-.933.447c-.221.383-.448.749-.678 1.094a19.788 19.788 0 0 1-2.574.005 16.97 16.97 0 0 1-1.294-2.234 16.965 16.965 0 0 1 1.286-2.23 16.982 16.982 0 0 1 2.576 0c.235.345.463.709.682 1.087.222.383.425.762.61 1.134-.184.378-.387.761-.608 1.144zm1.245-6.742c.474.273.658 1.374.36 2.817-.019.092-.04.186-.063.281a14.462 14.462 0 0 0-1.89-.299 14.182 14.182 0 0 0-1.194-1.49c.108-.105.217-.205.325-.299 1.043-.908 2.018-1.266 2.462-1.01z"
      fill="#fff"
    />
    <path
      d="M8.016 6.718a1.262 1.262 0 1 1 0 2.524 1.262 1.262 0 0 1 0-2.524"
      fill="#53c1de"
    />
  </svg>
);

export default SvgReact;
