import fs from "fs";
import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { BlogsList } from "@flowershow/core";
import clientPromise from "../lib/mddb.mjs";
import computeFields from "../lib/computeFields";
import type { CustomAppProps } from "./_app";
import FormattedDate from "@/components/FormattedDate";
import Image from "next/image.js";
import serializeBannerPath from "@/lib/serializeBannerPath";
import Link from "next/link.js";
import { SimpleLayout } from "@/layouts/index";
import config from "@/content/config.mjs";

interface BlogIndexPageProps extends CustomAppProps {
  blogs: IPost[]; // TODO types
}

export default function Blog({ blogs, meta: { title, description } }: BlogIndexPageProps) {
  return (
    <SimpleLayout title={title} description={description}>
      <ul>
        {blogs.map((blog, index) => {
          const banner = serializeBannerPath(blog);
          return index === 0 ? (
            <li className="w-full mt-16 lg:max-w-3xl mb-24 gap-4 flex flex-col" key={blog.urlPath}>
              <div className="font-semibold text-trueGray-400">
                <FormattedDate post={blog} />
              </div>
              <Link
                href={blog.urlPath}
                className="text-3xl font-semibold tracking-tight  hover:text-primary lg:text-5xl"
              >
                {blog.title}
              </Link>
              <div>
                <Image className="rounded-xl" alt="" src={banner} height={1200} width={1200} />
              </div>
              <p className="font-normal tracking-tight text-2l">{blog.description}</p>
            </li>
          ) : (
            <li className="pt-8 border-t sm:flex" key={blog.urlPath}>
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <Image className="w-full sm:w-40 h-auto rounded-md" alt="" src={banner} height={450} width={800} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-trueGray-400">
                  <FormattedDate post={blog} />
                </span>
                <p className="text-lg font-medium leading-6 text-trueGray-900">
                  <Link href={blog.urlPath} className="text-xl lg:text-2xl hover:text-primary">
                    {blog.title}
                  </Link>
                </p>
                <p className="text-lg">{blog.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </SimpleLayout>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<BlogIndexPageProps>> => {
  const mddb = await clientPromise;
  const blogFiles = await mddb.getFiles({ folder: "blog" });
  const tags = await mddb.getTags();
  console.log(tags);
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
