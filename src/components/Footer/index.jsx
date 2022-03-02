import React from "react";

import {
  Button,
  ButtonGroup,
  Image,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import banner from "assets/images/banner.webp";

const Footer = () => (
  <>
    <Flex
      justify="space-between"
      bg={{ base: "blue.700", md: "rgb(245,248,255)" }}
      color={{ base: "white", md: "unset" }}
    >
      <Flex align="center" justify="center" flexGrow={1}>
        <Flex direction="column" maxW="400px" p="16px">
          <Text variant="h2" as="h2">
            Earn up to $13 worth of crypto
          </Text>
          <Text variant="p" as="p" my="16px">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </Text>
          <Button variant="primary" alignSelf="flex-start">
            Start earning
          </Button>
        </Flex>
      </Flex>
      <Box display={{ base: "none", md: "block" }}>
        <Image src={banner} width="auto" draggable={false} />
      </Box>
    </Flex>
    <Stack
      spacing="8"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      py={{ base: "12", md: "16" }}
      px={{ base: "5px", sm: "64px" }}
    >
      <Stack spacing={{ base: "6", md: "8" }} align="start">
        <Logo width="250px" />
        <Text color="muted">Trade anything remarkably fast.</Text>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "column", lg: "row" }}
        spacing={{ base: "12", md: "8" }}
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How it works</Button>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Privacy</Button>
              <Button variant="link">Terms</Button>
              <Button variant="link">License</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Stay up to date
          </Text>
          <Stack
            spacing="4"
            direction={{ base: "column", sm: "row" }}
            maxW={{ lg: "360px" }}
          >
            <Input placeholder="Enter your email" type="email" required />
            <Button variant="primary" type="submit" flexShrink={0}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
      px="64px"
    >
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} CoinBase, Inc. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          //   href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          //   href="#"
          aria-label="GitHub"
          icon={<FaGithub fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          //   href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </Stack>
  </>
);
export default Footer;
