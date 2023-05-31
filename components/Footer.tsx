import Link from "next/link";
import GitHubIcon from "./icons/GitHubIcon";
import TwitterIcon from "./icons/TwitterIcon";

const Footer: React.FC<{ links: NavItem[] }> = ({ links }) => {
  return (
    <footer>
      <div className="px-5 py-12 mx-auto border-t max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
        <div className="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
          <a
            href="https://twitter.com/krivaten"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="external nofollow"
          >
            <span className="sr-only">Twitter</span>
            <TwitterIcon className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/krivaten"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="external nofollow"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="w-6 h-6" />
          </a>
        </div>
        <ul className="flex justify-center space-x-6 md:order-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-trueGray-500 hover:text-trueGray-500">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-sm text-center text-trueGray-500">Copyright © {new Date().getFullYear()} Krivaten</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
