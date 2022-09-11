import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
const About = () => {
  return (
    <Box id="about" h="100vh">
      <Box w="12%" m="auto">
        <Heading fontWeight="300" color="white" bg="green">
          About
        </Heading>
        <Box style={arrow} bg="green"></Box>
      </Box>
    </Box>
  );
};

export default About;
