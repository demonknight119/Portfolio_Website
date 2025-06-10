import React from "react";
import {
  Box,
  Heading,
  Text,
  Tag,
  Button,
  VStack,
  HStack,
  Image,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const ProjectCard = ({ description, github, demo, title, tech, image }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const headingColor = useColorModeValue("gray.900", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="xl"
      overflow="hidden"
      bg={cardBg}
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: "teal.300",
      }}
    >
      {/* Project Image */}
      {image && (
        <Box position="relative" overflow="hidden">
          <Image
            src={image}
            alt={`${title} preview`}
            fallbackSrc="https://via.placeholder.com/400x200/E2E8F0/718096?text=Project+Image"
            w="100%"
            h="200px"
            objectFit="cover"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>
      )}

      {/* Card Content */}
      <VStack spacing={4} p={6} align="stretch" flex="1">
        {/* Title */}
        <Heading size="md" color={headingColor} noOfLines={2}>
          {title}
        </Heading>

        {/* Description */}
        <Text
          color={textColor}
          fontSize="sm"
          lineHeight="1.6"
          noOfLines={3}
          flex="1"
        >
          {description}
        </Text>

        {/* Tech Stack */}
        <Box>
          <Wrap spacing={2}>
            {tech.map((technology, index) => (
              <WrapItem key={index}>
                <Tag
                  colorScheme="teal"
                  size="sm"
                  variant="subtle"
                  borderRadius="full"
                >
                  {technology}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        {/* Action Buttons */}
        {(github || demo) && (
          <HStack spacing={3} pt={2}>
            {github && (
              <Button
                as="a"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="gray"
                variant="outline"
                size="sm"
                flex="1"
                _hover={{
                  colorScheme: "teal",
                  transform: "translateY(-1px)",
                }}
              >
                GitHub
              </Button>
            )}
            {demo && (
              <Button
                as="a"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="teal"
                size="sm"
                flex="1"
                _hover={{
                  transform: "translateY(-1px)",
                }}
              >
                Live Demo
              </Button>
            )}
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default ProjectCard;
