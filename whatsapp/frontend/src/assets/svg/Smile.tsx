import type { SVGProps } from "react";

export default function SmileSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      //   color="#8696A0"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <circle cx={12} cy={12} r={10}></circle>
        <path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path>
      </g>
    </svg>
  );
}
