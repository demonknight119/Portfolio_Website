import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../Components/ProjectCard";
const Projects = () => {
  const projects = [
    {
      title: "Expense Manager",
      description: "A simple app to track expenses and manage budgets.",
      tech: ["React", "javascript", "Tailwind CSS", "Redux Toolkit"],
      github: "https://github.com/demonknight119/ExpenseManagerRTK",
    },
    {
      title: "Nutri Scan",
      description:
        "An app usefull for restaurant to scan QR code and get nutritional information.",
      tech: ["React", "javascript", "Tailwind CSS", "MongoDb", "Express"],
      github: "https://github.com/pragatisharma21/nutri-scan/tree/akhil",
      demo: "https://nutri-scan-site.vercel.app/",
    },
    {
      title: "Casio Website clone",
      tech: ["html", "css", "javascript"],
      description: "A website clone of casio.com",
      github: "https://github.com/demonknight119/casioClone",
      demo: "https://67a8f393b3b13ef4a8033fdd--inquisitive-bienenstitch-fc1112.netlify.app/",
    },
    {
      title: "Anti Resume PLatform",
      description:
        "A platform to assess candidates based on their skills and match them with suitable jobs",
      tech: ["react", "JavaScript", "Firebase", "Chakra UI"],
      github: "https://github.com/demonknight119/April_Hackathon",
      demo: "https://deft-dieffenbachia-fdee24.netlify.app/",
    },
    {
      title: "Housing Society Management System",
      description:
        "An Application to help facilitate renting and publishing of residential establishments",
      tech: ["Spring Boot", "Java", "React", "HTML", "CSS", "MySQL"],
      github:
        "https://github.com/Sankalp-Pateriya/Housing-Society-Management-System",
    },
  ];
  return (
    <>
      <Heading p={6}>My Projects</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Projects;
