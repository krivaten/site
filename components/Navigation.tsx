import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/components/icons/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Posts", href: "/" },
  { name: "About", href: "/about" },
  { name: "Now", href: "/now" },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex justify-between flex-1">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center"
                  title="Krivaten"
                >
                  <Logo className="h-14 w-auto" />
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-10">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    let classNames =
                      "inline-flex items-center px-1 pt-1 text-md font-medium";
                    classNames += isActive
                      ? " text-brand"
                      : " hover:text-brand";
                    return (
                      <Link
                        href={item.href}
                        className={classNames}
                        key={`desktop-${item.name}`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:text-brand focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                let classNames = "block border-l-4 py-2 pl-3 pr-4 font-medium";
                classNames += isActive
                  ? " border-brand-500 text-brand"
                  : " border-transparent hover:border-text hover:text-text dark:hover:border-text-dark dark:hover:text-text-dark";
                return (
                  <Disclosure.Button
                    as="a"
                    key={`mobile-${item.name}`}
                    href={item.href}
                    className={classNames}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
