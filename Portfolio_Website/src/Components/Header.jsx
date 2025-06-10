import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
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
  useBreakpointValue,
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(
    "rgba(247, 250, 252, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );
  const nameColor = useColorModeValue("teal.600", "teal.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const isMobile = useBreakpointValue({ base: true, md: false });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      bg={bg}
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={borderColor}
      position="fixed"
      width="100%"
      zIndex={1000}
      top={0}
    >
      <Flex
        align="center"
        justify="space-between"
        px={6}
        py={4}
        maxW="1200px"
        mx="auto"
      >
        {/* Logo/Name */}
        <Heading size={isMobile ? "sm" : "md"} fontWeight="bold">
          {!isMobile && "Crafted in Code by "}
          <Text color={nameColor} as="span">
            Akhil Kumar
          </Text>
        </Heading>

        {/* Navigation */}
        <HStack spacing={2}>
          <Button
            onClick={() => scrollToSection("home")}
            variant="ghost"
            size="sm"
            _hover={{ bg: useColorModeValue("teal.50", "teal.900") }}
          >
            Home
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            variant="ghost"
            size="sm"
            _hover={{ bg: useColorModeValue("teal.50", "teal.900") }}
          >
            Projects
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            variant="ghost"
            size="sm"
            _hover={{ bg: useColorModeValue("teal.50", "teal.900") }}
          >
            About
          </Button>
          <IconButton
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            variant="ghost"
            size="sm"
            _hover={{ bg: useColorModeValue("teal.50", "teal.900") }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
