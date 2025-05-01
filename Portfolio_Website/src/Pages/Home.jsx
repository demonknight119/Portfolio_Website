import React from "react";
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
  const bg = useColorModeValue("gray.100", "gray.900");

  const skills = [
    { icon: SiJavascript, label: "JavaScript", color: "yellow.300" },
    { icon: FaReact, label: "React", color: "teal" },
    { icon: SiChakraui, label: "Chakra UI", color: "cyan.400" },
    { icon: SiFirebase, label: "Firebase", color: "orange" },
    { icon: FaJava, label: "Java", color: "red" },
    { icon: SiSpringboot, label: "Spring Boot", color: "green" },
    { icon: FaGitAlt, label: "Git", color: "purple" },
  ];

  return (
    <Box minH="100vh" bg={bg}>
      <Container maxW="1200px" py={16}>
        <VStack spacing={8} align="flex-start" mb={16} px={4}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Hi, I'm Akhil
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="800px" lineHeight="1.7">
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
          <Box w={{ base: "100%", lg: "60%" }}>
            <Heading as="h2" size="lg" mb={8}>
              My Tech Stack
            </Heading>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={8} mb={8}>
              {skills.map((skill, index) => (
                <VStack key={index} spacing={3} align="center">
                  <Icon as={skill.icon} boxSize={10} color={skill.color} />
                  <Text fontWeight="medium">{skill.label}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>

          <Box
            w={{ base: "100%", lg: "35%" }}
            bg={useColorModeValue("white", "gray.700")}
            p={8}
            borderRadius="lg"
            boxShadow="md"
          >
            <VStack spacing={6} align="flex-start">
              <Heading size="lg">Let's collaborate</Heading>
              <Text fontSize="md" colorScheme="gray.600">
                Interested in working together? I'm always open to discussing
                new projects and opportunities.
              </Text>
              <HStack>
                <Icon as={FaPhone} color="teal.500" />
                <Link href="tel:9526904855" color="gray.600">
                  9526904855
                </Link>
              </HStack>
              <HStack>
                <Button
                  as="a"
                  href="mailto:akhilkumar0024@gmail.com"
                  colorScheme="blue"
                  size="lg"
                  width={{ base: "full", md: "auto" }}
                >
                  Contact Me
                </Button>
                <Button
                  as="a"
                  href="https://drive.google.com/file/d/1QhHs2xoW-l_rfM-Tj6q_UlMV_Go1dsWu/view?usp=sharing" // Replace with your actual resume path
                  target="_blank"
                  colorScheme="green"
                  variant="outline"
                >
                  View Resume
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
