import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

import {
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

import React from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const nameColor = useColorModeValue("blue.500", "blue.300");
  return (
    <Box bg={bg} px={4} py={6} boxShadow="md">
      <Flex align="center" justify="space-between" px={8}>
        <Heading>
          Crafted in Code by{" "}
          <Text color={nameColor} as={"span"}>
            Akhil Kumar
          </Text>
        </Heading>
        <HStack spacing={4} ml="auto">
          <Button as={RouterLink} to="/" variant="ghost">
            Home
          </Button>
          <Button as={RouterLink} to="/projects" variant="ghost">
            Projects
          </Button>
          <Button as={RouterLink} to="/about" variant="ghost">
            About
          </Button>

          <IconButton
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
            variant="ghost"
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
