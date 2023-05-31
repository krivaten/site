import * as React from "react";
import { SVGProps } from "react";
const ContrastIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 1C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1zM3 12c0-4.963 4.038-9 9-9v18c-4.962 0-9-4.037-9-9z"
    />
  </svg>
);
export default ContrastIcon;
