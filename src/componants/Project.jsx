import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
const Project = () => {
  return (
    <Box h="100vh" id="projects">
      <Box w="12%" m="auto">
        <Heading bg="green" fontWeight="300" color="white">
          Projects
        </Heading>
        <Box style={arrow} bg="green"></Box>
      </Box>
    </Box>
  );
};

export default Project;
