import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { Mermaid, Pre } from "@flowershow/core";
import { CldImage } from "next-cloudinary";
import serializeBannerPath from "@/lib/serializeBannerPath";
import FormattedDate from "./FormattedDate";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  mermaid: Mermaid,
  pre: Pre,
};

export default function MdxPage({ source, frontMatter }) {
  const { title, date } = frontMatter;
  const banner = serializeBannerPath(frontMatter);
  return (
    <div className="py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl leading-7">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-md italic leading-8 text-gray-500 dark:text-gray-400">
          <FormattedDate post={frontMatter} />
        </p>
        {banner && (
          <CldImage
            src={banner}
            alt=""
            width="1200"
            height="675"
            format="auto"
            className="mt-6 rounded-lg sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:w-full lg:h-96"
          />
        )}
        <div className="mt-10 max-w-2xl prose dark:prose-dark prose-headings:text-text dark:prose-headings:text-text-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </div>
  );
}
