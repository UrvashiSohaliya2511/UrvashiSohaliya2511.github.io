import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
const Skill = () => {
  return (
    <Box id="skill" h="100vh">
      <Box w="12%" m="auto">
        <Heading bg="green" fontWeight="300" color="white">
          Skills
        </Heading>
        <Box style={arrow} bg="green"></Box>
      </Box>
    </Box>
  );
};

export default Skill;
