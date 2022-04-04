import { chakra, Stack, Text } from "@chakra-ui/react";

const Footer = () => {

  return (
      <Stack
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        gridRowGap={4}
        w="full"
        spacing={0}
        pb="4"
      >
        <Text color="gray.500" fontSize="sm">
          ©{" "}
          <chakra.span as="time" color="purple.500">
            {new Date().getFullYear()}
          </chakra.span>{" "}
          Noor
        </Text>
      </Stack>
  );
};

export default Footer;
