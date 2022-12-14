import * as React from "react";

const SvgWhatsapp = ({ title, titleId, ...props }) => (
  <svg
    height="1em"
    viewBox="-11.9 -2 16 16"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="whatsapp_svg__a"
        gradientUnits="userSpaceOnUse"
        x1={14849.46}
        y1={3789.77}
        x2={14849.51}
        y2={16498.59}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#5efb7b",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#06b724",
          }}
        />
      </linearGradient>
    </defs>
    <g
      transform="matrix(.0012 0 0 .0012 -21.585 -6.513)"
      style={{
        clipRule: "evenodd",
        fillRule: "evenodd",
        imageRendering: "optimizeQuality",
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
      }}
    >
      <rect
        className="whatsapp_svg__fil3"
        x={8132.09}
        y={3789.76}
        width={13434.73}
        height={13434.73}
        rx={3134.85}
        ry={3134.85}
        style={{
          fill: "url(#whatsapp_svg__a)",
        }}
      />
      <path
        className="whatsapp_svg__fil4"
        d="M13785.11 8378.33c-90.6-201.24-185.91-205.32-272-208.86-70.5-2.99-151.12-2.8-231.67-2.8-80.66 0-211.55 30.27-322.28 151.21-110.8 120.96-423.12 413.34-423.12 1008.07s433.17 1169.35 493.51 1250.07c60.44 80.63 836.19 1340.02 2064.88 1824.49 1021.01 402.63 1228.78 322.55 1450.48 302.43 221.62-20.1 715.13-292.36 815.8-574.61 100.75-282.24 100.75-524.05 70.58-574.61-30.27-50.46-110.82-80.64-231.76-141.07-120.88-60.43-715.14-352.9-825.96-393.21-110.8-40.32-191.35-60.45-271.97 60.52-80.57 120.95-312.06 393.12-382.65 473.76-70.48 80.74-140.97 90.8-261.94 30.36-120.87-60.62-510.18-188.1-971.99-599.9-359.34-320.37-601.88-716.03-672.47-837-70.48-120.95-7.52-186.35 53.1-246.61 54.26-54.2 120.86-141.17 181.4-211.76 60.24-70.57 80.45-120.96 120.65-201.5 40.34-80.74 20.22-151.31-10.05-211.75-30.15-60.42-265.1-658.21-372.54-897.23zm-3596.44 6896.77 679.45-2480.9c-419.06-726.02-639.53-1549.7-639.26-2393.51 1.08-2639.83 2149.35-4787.49 4789.27-4787.49 1281.07.67 2483.48 499.19 3387.81 1404.14 904.08 904.97 1401.92 2107.83 1401.46 3387.2-1.16 2639.66-2149.8 4787.67-4789.27 4787.67-.19 0 .19 0 0 0h-2.06c-801.46-.32-1589.03-201.38-2288.57-582.86zm2656.41-1532.51 145.51 86.22c611.01 362.63 1311.57 554.4 2026.01 554.77h1.53c2194.02 0 3979.65-1785.19 3980.56-3979.38.39-1063.29-413.27-2063.17-1164.84-2815.3-751.59-752.11-1750.93-1166.53-2814.18-1166.97-2195.75 0-3981.39 1785.02-3982.17 3979.03-.38 751.86 210.04 1484.15 608.48 2117.78l94.74 150.54-402.21 1468.35z"
        style={{
          fill: "#fff",
        }}
      />
    </g>
  </svg>
);

export default SvgWhatsapp;
