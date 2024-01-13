import { SVGAttributes } from "react";

const MenuIcon = (props: SVGAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M23 10H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h22c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zM23 2H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM23 18H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h22c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z"
      fill="currentColor"
    />
  </svg>
);
export default MenuIcon;
