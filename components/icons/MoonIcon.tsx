import { SVGAttributes } from "react";

const MoonIcon = (props: SVGAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21.4 13.7c-.8.2-1.6.3-2.4.3-5 0-9-4-9-9 0-.8.1-1.6.3-2.4.1-.3 0-.7-.3-1-.3-.3-.6-.4-1-.3C4.3 2.7 1 7.1 1 12c0 6.1 4.9 11 11 11 4.9 0 9.3-3.3 10.6-8.1.1-.3 0-.7-.3-1-.2-.2-.6-.3-.9-.2z"
    />
  </svg>
);
export default MoonIcon;
