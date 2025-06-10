import React from "react";
import { RESUME_LINK } from "../assets/resumeLink";
import {
  HStack,
  SimpleGrid,
  Box,
  Heading,
  Link,
  Text,
  Button,
  VStack,
  Container,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaReact, FaJava, FaGitAlt, FaPhone } from "react-icons/fa";
import {
  SiJavascript,
  SiSpringboot,
  SiChakraui,
  SiFirebase,
} from "react-icons/si";

const Home = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("gray.900", "white");

  const skills = [
    { icon: SiJavascript, label: "JavaScript", color: "yellow.400" },
    { icon: FaReact, label: "React", color: "blue.400" },
    { icon: SiChakraui, label: "Chakra UI", color: "teal.400" },
    { icon: SiFirebase, label: "Firebase", color: "orange.400" },
    { icon: FaJava, label: "Java", color: "red.500" },
    { icon: SiSpringboot, label: "Spring Boot", color: "green.500" },
    { icon: FaGitAlt, label: "Git", color: "orange.600" },
  ];

  return (
    <Box minH="100vh" bg={bg} pt={{ base: "120px", md: "140px" }}>
      <Container maxW="1200px" py={8}>
        {/* Hero Section */}
        <VStack spacing={6} align="flex-start" mb={16} px={4}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color={headingColor}
            lineHeight="1.2"
          >
            Hi, I'm Akhil Kumar
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={textColor}
            maxW="800px"
            lineHeight="1.7"
          >
            A passionate full-stack developer building clean, scalable
            applications using React, Chakra UI, Java, and Spring Boot.
          </Text>
        </VStack>

        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "center", lg: "flex-start" }}
          gap={10}
          px={4}
        >
          {/* Skills Section */}
          <Box w={{ base: "100%", lg: "60%" }}>
            <Heading as="h2" size="lg" mb={8} color={headingColor}>
              My Tech Stack
            </Heading>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={6} mb={8}>
              {skills.map((skill, index) => (
                <VStack
                  key={index}
                  spacing={3}
                  align="center"
                  p={4}
                  borderRadius="lg"
                  bg={cardBg}
                  boxShadow="sm"
                  transition="all 0.2s"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                >
                  <Icon as={skill.icon} boxSize={8} color={skill.color} />
                  <Text fontWeight="medium" fontSize="sm" color={textColor}>
                    {skill.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>

          {/* Contact Card */}
          <Box
            w={{ base: "100%", lg: "35%" }}
            bg={cardBg}
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            border="1px"
            borderColor={useColorModeValue("gray.200", "gray.600")}
          >
            <VStack spacing={6} align="flex-start">
              <Heading size="lg" color={headingColor}>
                Let's Collaborate
              </Heading>
              <Text fontSize="md" color={textColor} lineHeight="1.6">
                Interested in working together? I'm always open to discussing
                new projects and opportunities.
              </Text>
              <HStack spacing={3}>
                <Icon as={FaPhone} color="teal.500" />
                <Link
                  href="tel:+919526904855"
                  color={useColorModeValue("teal.600", "teal.300")}
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                >
                  +91 9526904855
                </Link>
              </HStack>
              <VStack spacing={3} w="full">
                <Button
                  as="a"
                  href="mailto:akhilkumar0024@gmail.com"
                  colorScheme="blue"
                  size="md"
                  width="full"
                  leftIcon={<Icon as={FaPhone} />}
                >
                  Contact Me
                </Button>
                <Button
                  as="a"
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="green"
                  variant="outline"
                  size="md"
                  width="full"
                >
                  View Resume
                </Button>
              </VStack>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
