import React from "react";
import { Box, Text, Button, Heading } from "@chakra-ui/react";

import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Box p={10}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};

export default App;
