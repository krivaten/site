import matter from "gray-matter";
import mdxMermaid from "mdx-mermaid";
import { h } from "hastscript";
import remarkCallouts from "@flowershow/remark-callouts";
import remarkEmbed from "@flowershow/remark-embed";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkSmartypants from "remark-smartypants";
import remarkToc from "remark-toc";
// TODO adjust remark-wiki-link API to:
// import remarkWikiLink, { getPermalinks } from "@flowershow/remark-wiki-link";
import { remarkWikiLink, getPermalinks } from "@flowershow/remark-wiki-link";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypePrismPlus from "rehype-prism-plus";
import { serialize } from "next-mdx-remote/serialize";

import siteConfig from "../config/siteConfig";

/**
 * Parse a markdown or MDX file to an MDX source form + front matter data
 *
 * @source: the contents of a markdown or mdx file
 * @format: used to indicate to next-mdx-remote which format to use (md or mdx)
 * @returns: { mdxSource: mdxSource, frontMatter: ...}
 */
const parse = async function (source, format, scope) {
  const { content, data } = matter(source);
  const permalinks = await getPermalinks(siteConfig.content);

  const mdxSource = await serialize(
    { value: content, path: format },
    {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [
          remarkEmbed,
          remarkGfm,
          [remarkSmartypants, { quotes: false, dashes: "oldschool" }],
          remarkMath,
          remarkCallouts,
          [
            remarkWikiLink,
            {
              permalinks,
              pathFormat: "obsidian-short",
              hrefTemplate: (permalink) => {
                let path = permalink;
                if (path.match(/\.(jpeg|jpg|gif|png|svg)$/)) {
                  path = path.replace(/^.*[\\\/]/, "");
                  path = `/blog/assets/${path}`;
                }
                return path;
              },
            },
          ],
          [
            remarkToc,
            {
              heading: "Table of contents",
              tight: true,
            },
          ],
          [mdxMermaid, {}],
        ],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              properties: { className: "heading-link" },
              test(element) {
                return (
                  ["h2", "h3", "h4", "h5", "h6"].includes(element.tagName) &&
                  element.properties?.id !== "table-of-contents" &&
                  element.properties?.className !== "blockquote-heading"
                );
              },
              content() {
                return [
                  h(
                    "svg",
                    {
                      xmlns: "http:www.w3.org/2000/svg",
                      className: "fill-black",
                      viewBox: "0 0 48 48",
                      width: "20px",
                      height: "20px",
                    },
                    [
                      h("path", {
                        d: "M40 14h-4.478l1.455-9.703a2 2 0 0 0-3.955-.594L31.477 14H19.521l1.455-9.703a2 2 0 0 0-3.955-.594L15.476 14H9.998a2 2 0 0 0 0 4h4.878l-1.8 12H7.998a2 2 0 0 0 0 4h4.478l-1.455 9.703a2 2 0 1 0 3.956.593l1.545-10.297h11.956l-1.455 9.703a2 2 0 1 0 3.956.593l1.545-10.297h5.478a2 2 0 0 0 0-4h-4.878l1.8-12h5.078a2 2 0 0 0 0-4ZM29.078 30H17.122l1.8-12h11.956l-1.8 12Z",
                      }),
                    ]
                  ),
                ];
              },
            },
          ],
          [rehypeKatex, { output: "mathml" }],
          [rehypePrismPlus, { ignoreMissing: true }],
        ],
        format,
      },
      scope: { ...scope, ...data },
    }
  );

  return {
    mdxSource: mdxSource,
    frontMatter: data,
  };
};

export default parse;
