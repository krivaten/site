import fs from "fs";
import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { CldImage } from "next-cloudinary";
import sortBy from "lodash/sortBy";
import Link from "next/link";
import clientPromise from "../lib/mddb.mjs";
import computeFields from "../lib/computeFields";
import type { CustomAppProps } from "./_app";
import serializeBannerPath from "@/lib/serializeBannerPath";
import config from "@/content/config.mjs";
import { NextSeo } from "next-seo";

interface BlogIndexPageProps extends CustomAppProps {
  blogs: IPost[]; // TODO types
}

export default function Blog({
  blogs,
  meta: { title, description },
}: BlogIndexPageProps) {
  const [firstBlog, ...restBlogs] = blogs;

  return (
    <>
      <NextSeo title={title} description={description} />
      <div className="py-24 sm:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl leading-7">
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Latest Posts
          </h1>
          <div className="mt-10 space-y-16 border-t border-text dark:border-text-dark pt-10 sm:mt-16 sm:pt-16">
            {blogs.map((post) => (
              <article
                key={post.urlPath}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <Link href={post.urlPath} title={post.title} tabIndex={-1}>
                  <CldImage
                    src={serializeBannerPath(post)}
                    alt=""
                    width="1200"
                    height="675"
                    crop="fill"
                    format="auto"
                    className="rounded-lg mb-5"
                  />
                </Link>
                <div className="flex items-center gap-x-4 text-xs">
                  {post.date && (
                    <time
                      dateTime={new Date(post.date).toISOString()}
                      className="italic text-gray-500 dark:text-gray-400"
                    >
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                  )}
                </div>
                <div className="group relative">
                  <h2 className="mt-3 text-lg font-semibold leading-6  group-hover:text-brand">
                    <Link href={post.urlPath}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-5 line-clamp-3 text-sm leading-6">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<BlogIndexPageProps>
> => {
  const mddb = await clientPromise;
  const blogFiles = await mddb.getFiles({ folder: "blog" });
  const sortedBlogFiles = sortBy(blogFiles, (b) => b.metadata?.date).reverse();
  const tags = await mddb.getTags();

  const blogsMetadataPromises = sortedBlogFiles.map(async (b) => {
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
        title: config.blogTitle.text,
        description: config.blogTitle.description,
        showSidebar: false,
        showToc: false,
        showComments: false,
        showEditLink: false,
        urlPath: "/blog",
      },
      blogs: blogsList,
    },
  };
};
