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
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
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
];

const About = () => {
  return (
    <Box maxW="800px" mx="auto">
      <VStack spacing={6} align="start">
        <Heading>About Me</Heading>

        <Text fontSize="lg">
          I’m a full-stack developer with a strong focus on building responsive,
          user-friendly web applications. I enjoy translating designs into
          functional interfaces and developing robust backend systems. On the
          frontend, I specialize in React and Chakra UI. For backend
          development, I work with Java and Spring Boot to build scalable,
          API-driven architectures.
        </Text>

        <Box>
          <Heading size="md" mb={2}>
            Core Skills
          </Heading>
          <Wrap>
            {skills.map((skill, idx) => (
              <WrapItem key={idx}>
                <Tag size="lg" colorScheme="cyan">
                  {skill}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        <HStack spacing={4}>
          <Button
            as="a"
            href="https://drive.google.com/file/d/1QhHs2xoW-l_rfM-Tj6q_UlMV_Go1dsWu/view?usp=sharing" // Replace with your actual resume path
            target="_blank"
            colorScheme="green"
            variant="outline"
          >
            View Resume
          </Button>
          <Link as={"a"} href="mailto:akhilkumar0024@gmail.com" isExternal>
            <IconButton
              icon={<EmailIcon />}
              colorScheme="red"
              variant="outline"
              aria-label="Email"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/akhil-kumar-s-48b17048/"
            isExternal
          >
            <IconButton
              icon={<FaLinkedin />}
              colorScheme="blue"
              variant="outline"
              aria-label="LinkedIn"
            />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default About;
