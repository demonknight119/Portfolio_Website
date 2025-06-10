import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";

const App = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <>
      <Header />
      <Box bg={bgColor}>
        <Box id="home">
          <Home />
        </Box>
        <Box id="projects" py={16}>
          <Projects />
        </Box>
        <Box id="about" py={16}>
          <About />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default App;
