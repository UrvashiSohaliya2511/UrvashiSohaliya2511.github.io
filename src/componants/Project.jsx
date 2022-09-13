import { Box, Heading, Stack, Image } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
const Project = () => {
  return (
    <Box h="100vh" id="projects">
      <Box w="12%" m="auto">
        <Heading bg="pink" fontWeight="300" color="white">
          Projects
        </Heading>
        <Box style={arrow} bg="pink"></Box>
      </Box>
      <Stack>
        <Box>
          <Box>
            <Image />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Project;
