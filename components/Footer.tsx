import { Box, Button, chakra, Container, Link, Stack, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";
import TwitterIcon from "./icons/TwitterIcon";
import GitHubIcon from "./icons/GitHubIcon";
import Logo from "./icons/Logo";

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <Button
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      bg="transparent"
      _hover={{ bg: "transparent" }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={4} spacing={4} justify={"center"} align={"center"}>
        <Logo width={"20"} height={"20"} />
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Posts</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/now"}>Now</Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>&copy; {new Date().getFullYear()} Krivaten. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"https://twitter.com/krivaten"}>
              <TwitterIcon width="6" height="6" />
            </SocialButton>
            <SocialButton label={"GitHub"} href={"https://github.com/krivaten"}>
              <GitHubIcon width="6" height="6" />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
