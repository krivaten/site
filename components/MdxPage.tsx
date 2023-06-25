import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { Mermaid, Pre } from "@flowershow/core";

import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
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
    <Container as="article" maxW={"2xl"} p={4}>
      <Box as="header" mb={4}>
        <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
          {title}
        </Heading>
        {date && (
          <Text as="p" color={"gray.500"} fontSize="sm" mt={5} fontStyle={"italic"}>
            <FormattedDate post={frontMatter} />
          </Text>
        )}
        {banner && (
          <Box mt={5} borderRadius="lg" overflow="hidden">
            <CldImage src={banner} alt="" width="1200" height="675" format="auto" />
          </Box>
        )}
      </Box>
      <Prose>
        <MDXRemote {...source} components={components} />
      </Prose>
    </Container>
  );
}
