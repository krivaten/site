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
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-md leading-8">
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
        <div className="mt-10 max-w-2xl prose">
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </div>
  );
}
