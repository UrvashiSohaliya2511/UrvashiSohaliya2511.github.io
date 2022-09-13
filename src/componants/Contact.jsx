import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { IoIosCall, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { arrow } from "./style/theme";
const Contact = () => {
  const iconstyle = {
    borderRadius: "30% 5% 30% 5%",

    padding: 3,
  };
  const iconhover = {
    // transform: "",
  };
  return (
    <Box id="contact" pb={10} pt={10} bg="#6f2232">
      <Box m="auto" w={["50%", "40%", "30%", "20%"]}>
        <Heading bg="whitesmoke" fontWeight="300" color="pink">
          Contact Me
        </Heading>
        <Box style={arrow} bg="whitesmoke"></Box>
      </Box>

      <Heading color="whitesmoke" m="2%">
        Urvashi Sohaliya
      </Heading>
      <Flex
        fontSize="34px"
        align="center"
        justify="center"
        gap={12}
        color="white"
      >
        <Box style={iconstyle} _hover={iconhover}>
          <IoIosCall />
        </Box>
        <Box style={iconstyle} _hover={iconhover}>
          <IoMdMail />
        </Box>
        <Box style={iconstyle} _hover={iconhover}>
          <IoLogoLinkedin />
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
