import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

import {
  GITHUB_PROFILE,
} from "src/constants";
import { Link as LinkType } from "@/types/link";

type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  {
    href: GITHUB_PROFILE,
    label: "GitHub",
    color: "purple.500",
  },
];

const Hero = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: "column-reverse", md: "row" }}
      w="full"
      spacing={12}
    >
      <VStack alignItems="center" w="full" spacing={3}>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
          w="full"
          spacing={3}
        >
          <Heading as="h1" size="lg">
            Hi, I’m Noor.
          </Heading>
        </Stack>
        <Text as="h2" lineHeight="175%" pb="4">
          I’m a designer and a full-stack developer.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={3}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              justifyContent={{ base: "flex-start", md: "center" }}
              px={4}
              color={color}
              href={href}
              rightIcon={<Icon as={FiArrowUpRight} />}
              target="_blank"
              variant="outline"
              border="2px"
              borderColor="purple.500"
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
    </Stack>
  );
};

export default Hero;
