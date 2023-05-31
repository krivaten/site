import * as React from "react";
import { SVGProps } from "react";
const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <g fill="currentColor">
      <path d="M0 11h3v2H0zM2.807 4.222l1.414-1.415L6.343 4.93 4.928 6.343zM11 0h2v3h-2zM17.657 4.929l2.121-2.122 1.414 1.415-2.121 2.12zM21 11h3v2h-3zM17.657 19.071l1.414-1.414 2.122 2.121-1.415 1.415zM11 21h2v3h-2zM2.807 19.778l2.122-2.12 1.414 1.413-2.122 2.122z" />
      <circle cx={12} cy={12} r={7} />
    </g>
  </svg>
);
export default SunIcon;
