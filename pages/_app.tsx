import React from "react";
/* eslint import/no-default-export: off */
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import siteConfig from "../config/siteConfig";
import { SearchProvider, NavItem, NavGroup } from "@flowershow/core";

import "../styles/global.css";
import "../styles/docsearch.css";
import "../styles/prism.css";
import Header from "@/components/Header";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

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

export const theme = extendTheme(
  {
    config: {
      initialColorMode: "light",
    },
    fonts: {
      body: "'Inter', sans-serif",
      heading: "'Inter', sans-serif",
    },
    styles: {
      global: {},
    },
  },
  withProse({
    baseStyle: {
      "iframe[src*='youtube.com']": {
        aspectRatio: "16/9",
        width: "100%",
        height: "auto",
        border: "none",
      },
      a: {
        color: "orange.500",
        fontWeight: "semibold",
      },
    },
  })
);

const MyApp = ({ Component, pageProps }: AppProps<CustomAppProps>) => {
  const { meta, siteMap } = pageProps;

  const layoutProps = {
    showToc: meta?.showToc,
    showEditLink: meta?.showEditLink,
    showSidebar: meta?.showSidebar,
    showComments: meta?.showComments,
    editUrl: meta?.editUrl,
    urlPath: meta?.urlPath,
    commentsConfig: siteConfig.comments,
    nav: {
      title: siteConfig.navbarTitle?.text ?? siteConfig.title,
      logo: siteConfig.navbarTitle?.logo,
      links: siteConfig.navLinks,
      search: siteConfig.search,
      social: siteConfig.social,
    },
    author: {
      name: siteConfig.author,
      url: siteConfig.domain,
      logo: siteConfig.logo,
    },
    theme: {
      defaultTheme: siteConfig.theme.default,
      themeToggleIcon: siteConfig.theme.toggleIcon,
    },
    siteMap,
  };

  return (
    <>
      <DefaultSeo defaultTitle={siteConfig.title} {...siteConfig.nextSeo} />
      <SearchProvider searchConfig={siteConfig.search}>
        <ChakraProvider theme={theme}>
          <Header />
          <Box as="main" mt={5}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </ChakraProvider>
      </SearchProvider>
    </>
  );
};

export default MyApp;
