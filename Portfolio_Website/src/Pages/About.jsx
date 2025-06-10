import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Tag,
  Wrap,
  Link,
  WrapItem,
  Button,
  Image,
  IconButton,
  Flex,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { RESUME_LINK } from "../assets/resumeLink";
import profilePicture from "../images/ProfilePicture.jpg";
import { EmailIcon } from "@chakra-ui/icons";
import { FaLinkedin } from "react-icons/fa";

const skills = [
  "JavaScript",
  "React",
  "Chakra UI",
  "Firebase",
  "Spring Boot",
  "Java",
  "Git",
  "REST APIs",
  "Responsive Design",
  "Redux Toolkit",
  "MySQL",
  "MongoDB",
];

const About = () => {
  const headingColor = useColorModeValue("gray.900", "white");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Container maxW="800px" px={4}>
      <VStack spacing={8} align="stretch">
        {/* Profile Picture */}
        <Box alignSelf="center" textAlign="center">
          <Image
            objectFit="cover"
            objectPosition="center"
            borderRadius="full"
            boxSize="200px"
            src={profilePicture}
            alt="Akhil Kumar - Full Stack Developer"
            border="4px"
            borderColor={useColorModeValue("white", "gray.700")}
            boxShadow="xl"
          />
        </Box>

        {/* About Section */}
        <VStack spacing={6} align="stretch">
          <Heading as="h2" size="xl" textAlign="center" color={headingColor}>
            About Me
          </Heading>

          <Text
            fontSize="lg"
            lineHeight="1.8"
            color={textColor}
            textAlign="center"
          >
            I'm a passionate full-stack developer with expertise in building
            responsive, user-friendly web applications. I specialize in
            translating complex designs into functional, scalable solutions that
            deliver exceptional user experiences.
          </Text>

          <Text
            fontSize="lg"
            lineHeight="1.8"
            color={textColor}
            textAlign="center"
          >
            On the frontend, I leverage React and modern JavaScript to create
            dynamic interfaces, while my backend expertise with Java and Spring
            Boot enables me to develop robust, API-driven architectures that
            scale with business needs.
          </Text>
        </VStack>

        {/* Skills Section */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center" color={headingColor}>
            Technical Skills
          </Heading>
          <Wrap justify="center" spacing={3}>
            {skills.map((skill, idx) => (
              <WrapItem key={idx}>
                <Tag
                  size="lg"
                  colorScheme="teal"
                  variant="subtle"
                  borderRadius="full"
                  px={4}
                  py={2}
                >
                  {skill}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        {/* Action Buttons */}
        <Flex
          gap={4}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          pt={4}
        >
          <Button
            as="a"
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="green"
            variant="solid"
            size="lg"
            minW="140px"
          >
            View Resume
          </Button>

          <Link
            href="mailto:akhilkumar0024@gmail.com"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <IconButton
              icon={<EmailIcon />}
              colorScheme="red"
              variant="outline"
              size="lg"
              aria-label="Send Email"
              _hover={{ transform: "translateY(-2px)" }}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/akhil-kumar-s-48b17048/"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <IconButton
              icon={<FaLinkedin />}
              colorScheme="blue"
              variant="outline"
              size="lg"
              aria-label="LinkedIn Profile"
              _hover={{ transform: "translateY(-2px)" }}
            />
          </Link>
        </Flex>
      </VStack>
    </Container>
  );
};

export default About;
