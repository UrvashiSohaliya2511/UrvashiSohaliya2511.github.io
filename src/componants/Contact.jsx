import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
const Contact = () => {
  return (
    <Box id="contact" h="100vh">
      <Box w="14%" m="auto">
        <Heading bg="pink" fontWeight="300" color="white">
          Contacts
        </Heading>
        <Box style={arrow} bg="pink"></Box>
      </Box>
    </Box>
  );
};

export default Contact;
