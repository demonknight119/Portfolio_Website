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
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/akhil-kumar-s-48b17048/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/demonknight119",
      label: "GitHub",
    },
    {
      icon: FaEnvelope,
      href: "mailto:akhilkumar0024@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      py={10}
    >
      <Container maxW="1200px">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
          gap={8}
        >
          {/* Left side - Name & Copyright */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Text fontWeight="bold" fontSize="xl">
              Akhil Kumar
            </Text>
            <Text color={textColor} fontSize="sm">
              Full-Stack Developer
            </Text>
            <Text color={textColor} fontSize="sm">
              © {currentYear} All rights reserved
            </Text>
          </VStack>

          {/* Middle - Navigation Links */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Text fontWeight="bold" mb={2}>
              Quick Links
            </Text>
            {navLinks.map((link, index) => (
              <RouterLink
                key={index}
                to={link.href}
                color={textColor}
                _hover={{ color: "teal.500", textDecoration: "none" }}
              >
                {link.name}
              </RouterLink>
            ))}
          </VStack>

          {/* Right side - Social Media */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Text fontWeight="bold" mb={2}>
              Connect
            </Text>
            <HStack spacing={4}>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  isExternal
                  aria-label={social.label}
                >
                  <Icon
                    as={social.icon}
                    boxSize={5}
                    color={textColor}
                    _hover={{ color: "teal.500" }}
                  />
                </Link>
              ))}
            </HStack>
          </VStack>
        </Flex>

        <Divider my={8} borderColor={borderColor} />

        <Text textAlign="center" fontSize="sm" color={textColor}>
          Designed and built with{" "}
          <Text as="span" color="red.500">
            ❤
          </Text>{" "}
          using React & Chakra UI
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
