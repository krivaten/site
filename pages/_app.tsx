import React from "react";
/* eslint import/no-default-export: off */
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import siteConfig from "../config/siteConfig";
import { NavItem, NavGroup } from "@flowershow/core";

import "../styles/global.css";
import "../styles/docsearch.css";
import "../styles/prism.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export interface CustomAppProps {
  meta: Partial<IPost> & {
    showToc: boolean;
    showEditLink: boolean;
    showSidebar: boolean;
    showComments: boolean;
    urlPath: string; // not sure what's this for
    editUrl?: string;
    [key: string]: any;
  };
  siteMap?: Array<NavItem | NavGroup>;
  [key: string]: any;
}

const MyApp = ({ Component, pageProps }: AppProps<CustomAppProps>) => {
  return (
    <>
      <DefaultSeo defaultTitle={siteConfig.title} {...siteConfig.nextSeo} />
      <Navigation />
      <main className="mt-5">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default MyApp;
