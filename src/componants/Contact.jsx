import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
const Contact = () => {
  return (
    <Box id="contact" h="100vh">
      <Box w="14%" m="auto">
        <Heading bg="green" fontWeight="300" color="white">
          Contacts
        </Heading>
        <Box style={arrow} bg="green"></Box>
      </Box>
    </Box>
  );
};

export default Contact;
