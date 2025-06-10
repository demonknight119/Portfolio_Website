import React from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Link,
  Icon,
  Divider,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("gray.900", "white");

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/akhil-kumar-s-48b17048/",
      label: "LinkedIn",
      colorScheme: "linkedin",
    },
    {
      icon: FaGithub,
      href: "https://github.com/demonknight119",
      label: "GitHub",
      colorScheme: "gray",
    },
    {
      icon: FaEnvelope,
      href: "mailto:akhilkumar0024@gmail.com",
      label: "Email",
      colorScheme: "red",
    },
  ];

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
      as="footer"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      py={12}
    >
      <Container maxW="1200px">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
          gap={8}
          mb={8}
        >
          {/* Left side - Brand */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Text fontWeight="bold" fontSize="xl" color={headingColor}>
              Akhil Kumar
            </Text>
            <Text color={textColor} fontSize="sm">
              Full-Stack Developer
            </Text>
            <Text color={textColor} fontSize="sm">
              Building the future, one line of code at a time.
            </Text>
          </VStack>

          {/* Middle - Navigation Links */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Text fontWeight="semibold" mb={2} color={headingColor}>
              Quick Links
            </Text>
            <Button
              onClick={() => scrollToSection("home")}
              variant="ghost"
              size="sm"
              color={textColor}
              _hover={{ color: "teal.500" }}
            >
              Home
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="ghost"
              size="sm"
              color={textColor}
              _hover={{ color: "teal.500" }}
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="ghost"
              size="sm"
              color={textColor}
              _hover={{ color: "teal.500" }}
            >
              About
            </Button>
          </VStack>

          {/* Right side - Social Media */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Text fontWeight="semibold" color={headingColor}>
              Let's Connect
            </Text>
            <HStack spacing={3}>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  isExternal
                  aria-label={social.label}
                  _hover={{ textDecoration: "none" }}
                >
                  <Icon
                    as={social.icon}
                    boxSize={6}
                    color={textColor}
                    transition="all 0.2s"
                    _hover={{
                      color: "teal.500",
                      transform: "translateY(-2px)",
                    }}
                  />
                </Link>
              ))}
            </HStack>
          </VStack>
        </Flex>

        <Divider borderColor={borderColor} />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          pt={8}
          gap={4}
        >
          <Text fontSize="sm" color={textColor}>
            © {currentYear} Akhil Kumar. All rights reserved.
          </Text>

          <Text fontSize="sm" color={textColor} textAlign="center">
            Designed and built with <Icon as={FaHeart} color="red.500" mx={1} />
            using React & Chakra UI
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
