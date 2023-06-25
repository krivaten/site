import fs from "fs";
import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { CldImage } from "next-cloudinary";
import sortBy from "lodash/sortBy";
import { Box, Heading, Link, Text, Divider, useColorModeValue, Container, Grid } from "@chakra-ui/react";
import clientPromise from "../lib/mddb.mjs";
import computeFields from "../lib/computeFields";
import type { CustomAppProps } from "./_app";
import FormattedDate from "@/components/FormattedDate";
import serializeBannerPath from "@/lib/serializeBannerPath";
import config from "@/content/config.mjs";
import { NextSeo } from "next-seo";

interface BlogIndexPageProps extends CustomAppProps {
  blogs: IPost[]; // TODO types
}

export default function Blog({ blogs, meta: { title, description } }: BlogIndexPageProps) {
  const [firstBlog, ...restBlogs] = blogs;

  return (
    <>
      <NextSeo title={title} description={description} />
      <Container maxW={"7xl"} p={12}>
        <Heading as="h1">Latest Posts</Heading>
        <Grid templateColumns={{ md: "50% 1fr", lg: "60% 1fr" }} gap={{ base: 5, md: 12 }} mt={5}>
          <Box>
            <Box borderRadius="lg" overflow="hidden">
              <Link href={firstBlog.urlPath} tabIndex={-1}>
                <CldImage
                  src={serializeBannerPath(firstBlog)}
                  alt=""
                  width="1200"
                  height="675"
                  crop="fill"
                  format="auto"
                />
              </Link>
            </Box>
          </Box>
          <Box>
            <Heading as="h3">
              <Link href={firstBlog.urlPath} textDecor="none" _hover={{ textDecor: "none" }}>
                {firstBlog.title}
              </Link>
            </Heading>
            <Text as="p" color={"gray.500"} fontSize="sm" mt={2} fontStyle={"italic"}>
              <FormattedDate post={firstBlog} />
            </Text>
            <Text as="p" mt={2} color={useColorModeValue("gray.700", "gray.200")} fontSize="lg">
              {firstBlog.description}
            </Text>
          </Box>
        </Grid>
        <Divider my="12" />
        <Grid templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={12} mt={5}>
          {restBlogs.map((blog) => {
            return (
              <Box w="full" key={blog.urlPath}>
                <Box borderRadius="lg" overflow="hidden">
                  <Link href={blog.urlPath} tabIndex={-1}>
                    <CldImage
                      src={serializeBannerPath(blog)}
                      alt=""
                      width="1200"
                      height="675"
                      crop="fill"
                      format="auto"
                    />
                  </Link>
                </Box>
                <Heading as="h3" size="md" mt={2}>
                  <Link href={blog.urlPath} textDecor="none" _hover={{ textDecor: "none" }}>
                    {blog.title}
                  </Link>
                </Heading>
                <Text as="p" color={"gray.500"} fontSize="sm" mt={2} fontStyle={"italic"}>
                  <FormattedDate post={blog} />
                </Text>
                <Text as="p" fontSize="md" mt={2} noOfLines={3}>
                  {blog.description}
                </Text>
              </Box>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<BlogIndexPageProps>> => {
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
