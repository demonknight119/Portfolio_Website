import React from "react";
import {
  Box,
  Heading,
  HStack,
  Text,
  Tag,
  Button,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
const ProjectCard = ({ description, github, demo, title, tech, image }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100%"}
      borderWidth="1px"
      borderRadius="lg"
      p={5}
      bg={useColorModeValue("gray.200", "gray.800")}
      shadow="md"
      _hover={{ shadow: "0 4px 10px rgba(128, 90, 213, 1)" }}
      transition="all 0.3s"
    >
      <Box mb={4}>
        <Image
          p={"2px"}
          src={image}
          fallbackSrc="https://placehold.co/600x270"
          border={"2px"}
          borderColor={"yellow"}
          borderRadius={"md"}
        />
      </Box>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
      <Stack direction="row" wrap="wrap">
        {tech.map((tag, index) => (
          <Tag colorScheme="teal" key={index}>
            {tag}
          </Tag>
        ))}
      </Stack>
      {(github || demo) && (
        <HStack spacing={4} mt={6}>
          {github && (
            <Button
              width={"full"}
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="purple"
              variant="outline"
              size="md"
              href={github}
            >
              Github
            </Button>
          )}
          {demo && (
            <Button
              as="a"
              width={"full"}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="teal"
              variant="outline"
              size="md"
            >
              Demo
            </Button>
          )}
        </HStack>
      )}
    </Box>
  );
};

export default ProjectCard;
