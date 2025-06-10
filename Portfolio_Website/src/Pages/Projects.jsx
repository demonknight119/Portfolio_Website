import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import ProjectCard from "../Components/ProjectCard";
import antiResumePlatform from "../images/Anti_Resume_Platform.png";
import expenseManager from "../images/Expense_Manger.png";
import nutriScan from "../images/NUtri_Scan.png";
import casioClone from "../images/Casio_Clone.png";

const Projects = () => {
  const headingColor = useColorModeValue("gray.900", "white");

  const projects = [
    {
      title: "Expense Manager",
      description:
        "A comprehensive expense tracking application with budget management, category-wise analysis, and visual reporting features.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
      github: "https://github.com/demonknight119/ExpenseManagerRTK",
      demo: "https://quiet-kelpie-df873b.netlify.app/",
      image: expenseManager,
    },
    {
      title: "Nutri Scan",
      description:
        "QR code-based nutritional information system for restaurants, providing detailed ingredient analysis and dietary recommendations.",
      tech: ["React", "JavaScript", "Tailwind CSS", "MongoDB", "Express"],
      github: "https://github.com/pragatisharma21/nutri-scan/tree/akhil",
      demo: "https://nutri-scan-site.vercel.app/",
      image: nutriScan,
    },
    {
      title: "Casio Website Clone",
      description:
        "Pixel-perfect recreation of the Casio official website with responsive design and interactive product showcases.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/demonknight119/casioClone",
      demo: "https://67a8f393b3b13ef4a8033fdd--inquisitive-bienenstitch-fc1112.netlify.app/",
      image: casioClone,
    },
    {
      title: "Anti Resume Platform",
      description:
        "Skills-based candidate assessment platform that matches talent with opportunities through practical evaluations rather than traditional resumes.",
      tech: ["React", "JavaScript", "Firebase", "Chakra UI"],
      github: "https://github.com/demonknight119/April_Hackathon",
      demo: "https://deft-dieffenbachia-fdee24.netlify.app/",
      image: antiResumePlatform,
    },
    {
      title: "Housing Society Management System",
      description:
        "Comprehensive residential management platform facilitating property rentals, tenant management, and administrative operations.",
      tech: ["Spring Boot", "Java", "React", "MySQL", "REST APIs"],
      github:
        "https://github.com/Sankalp-Pateriya/Housing-Society-Management-System",
    },
  ];

  return (
    <Container maxW="1200px" px={4}>
      <Heading
        as="h2"
        size="xl"
        mb={12}
        textAlign="center"
        color={headingColor}
      >
        Featured Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
