import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Skill from "./Skill.jsx";
import Navbar from "./Navbar.jsx";
import GitHub from "./Github";
import AOS from "aos";

const Main = () => {
  React.useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return (
    <Stack id="main" w="100%" overflow="hidden">
      <Navbar />
      <Box>
        <Home />
        <About />
        <Skill />

        <Project />
        <GitHub />
        <Contact />
      </Box>
    </Stack>
  );
};

export default Main;
