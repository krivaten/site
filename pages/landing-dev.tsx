import React from "react";
import fs from "fs";
import { GetStaticProps, GetStaticPropsResult } from "next";

import Hero from "../components/Hero";
import RecentPosts from "../components/RecentPosts";
import type { CustomAppProps } from "./_app";
import Head from "next/head";
import clientPromise from "@/lib/mddb.mjs";
import computeFields from "@/lib/computeFields";

interface HomePageProps extends CustomAppProps {
  blogs: any[];
}

export default function Home({ blogs }: HomePageProps) {
  return (
    <main>
      <Head>
        <meta
          name="description"
          content="A haven for resilient hearts and sharp minds. Thoughtful explorations on faith, family, and home, alongside insightful writings on software engineering."
        />
      </Head>
      <Hero />
      <RecentPosts blogs={blogs} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<HomePageProps>> => {
  const mddb = await clientPromise;
  const blogFiles = await mddb.getFiles({ folder: "blog" });
  const blogsMetadataPromises = blogFiles.map(async (b) => {
    const source = fs.readFileSync(b.file_path, { encoding: "utf-8" });

    // TODO temporary replacement for contentlayer's computedFields
    const frontMatterWithComputedFields = await computeFields({
      frontMatter: b.metadata,
      urlPath: b.url_path,
      filePath: b.file_path,
      source,
    });

    return frontMatterWithComputedFields;
  });

  const blogsList = await Promise.all(blogsMetadataPromises);
  return {
    props: {
      meta: {
        urlPath: "/",
        showToc: false,
        showEditLink: false,
        showSidebar: false,
        showComments: false,
      },
      blogs: blogsList,
    },
  };
};
