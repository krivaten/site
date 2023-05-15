import { useEffect, useState } from "react";
import Head from "next/head.js";
import { NextRouter, useRouter } from "next/router.js";
import clsx from "clsx";

import { useTableOfContents, collectHeadings, Nav, TableOfContents, SiteToc } from "@flowershow/core";
import Footer from "./Footer";

export interface NavItem {
  name: string;
  href: string;
}
export interface NavLink {
  name: string;
  href: string;
}

export type SocialPlatform = "github" | "discord";
export interface SocialLink {
  label: SocialPlatform;
  href: string;
}

export interface NavGroup {
  name: string;
  path: string;
  level: number;
  children: Array<NavItem | NavGroup>;
}

export interface TocSection {
  id: string;
  title: string;
  level: string;
  children?: any;
}

export interface ThemeConfig {
  defaultTheme: "dark" | "light";
  themeToggleIcon: string;
}

export interface NavConfig {
  title: string;
  logo?: string;
  version?: string;
  links: Array<NavLink>;
  social?: Array<SocialLink>;
}

interface Props extends React.PropsWithChildren {
  showComments: boolean;
  showEditLink: boolean;
  showSidebar: boolean;
  showToc: boolean;
  nav: NavConfig;
  theme: ThemeConfig;
  urlPath: string;
  siteMap: Array<NavItem | NavGroup>;
  editUrl?: string;
}

export const Layout: React.FC<Props> = ({ children, nav, theme, showToc, showSidebar, urlPath, siteMap }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [tableOfContents, setTableOfContents] = useState<TocSection[]>([]);
  const currentSection = useTableOfContents(tableOfContents);
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (!showToc) return;
    const headingNodes: NodeListOf<HTMLHeadingElement> = document.querySelectorAll("h1,h2,h3");
    const toc = collectHeadings(headingNodes);
    setTableOfContents(toc ?? []);
  }, [router.asPath, showToc]); // update table of contents on route change with next/link

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#d1461e" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="bg-background dark:bg-background-dark">
        {/* NAVBAR */}
        <div
          className={clsx(
            "sticky top-0 z-50 w-full",
            isScrolled
              ? "dark:bg-background-dark/95 bg-background/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:dark:bg-background-dark/75"
              : "dark:bg-background-dark bg-background"
          )}
        >
          <div className="max-w-8xl mx-auto p-4 md:px-8">
            <Nav
              title={nav.title}
              logo={nav.logo}
              links={nav.links}
              social={nav.social}
              defaultTheme={theme.defaultTheme}
              themeToggleIcon={theme.themeToggleIcon}
            >
              {showSidebar && <SiteToc currentPath={urlPath} nav={siteMap} />}
            </Nav>
          </div>
        </div>
        {/* wrapper for sidebar, main content and ToC */}
        <div
          className={clsx("max-w-8xl mx-auto px-4 md:px-8", showSidebar && "lg:ml-[18rem]", showToc && "xl:mr-[18rem]")}
        >
          {/* SIDEBAR */}
          {showSidebar && (
            <div className="hidden lg:block fixed z-20 w-[18rem] top-[4.6rem] right-auto bottom-0 left-[max(0px,calc(50%-44rem))] pt-8 pl-8 overflow-y-auto">
              <SiteToc currentPath={urlPath} nav={siteMap} />
            </div>
          )}

          {/* MAIN CONTENT & FOOTER */}
          <main className="mx-auto pt-8">{children}</main>

          {/** TABLE OF CONTENTS */}
          {showToc && tableOfContents.length > 0 && (
            <div className="hidden xl:block fixed z-20 w-[18rem] top-[4.6rem] bottom-0 right-[max(0px,calc(50%-44rem))] left-auto pt-8 pr-8 overflow-y-auto">
              <TableOfContents tableOfContents={tableOfContents} currentSection={currentSection} />
            </div>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};
