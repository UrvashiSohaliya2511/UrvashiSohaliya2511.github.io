import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Show,
  Link,
  Img,
} from "@chakra-ui/react";
import React from "react";
import { IoIosCall, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { arrow } from "./style/theme";
import { BsGithub } from "react-icons/bs";
import "./style/contact.css";
// import {} from "react-animation-on-scroll";
const Contact = () => {
  const iconstyle = {
    borderRadius: "30% 5% 30% 5%",
    backgroundColor: "whitesmoke",
    color: "black",
    padding: 3,
  };
  const iconhover = {
    cursor: "pointer",
  };
  return (
    <Stack id="contact" pb={10} pt={2} bg="black" spacing={5}>
      {/* <Text color="pink" fontWeight="bold" textAlign="left">
        :::
      </Text> */}
      <Text color="gray" fontWeight="bold">
        CONTACT ME
      </Text>
      <Heading color="lightgray">Get in Touch</Heading>

      <SimpleGrid>
        {/* <Flex
          fontSize="34px"
          align="center"
          justify="center"
          gap={8}
          color="white"
        > */}
        <Stack w="50%" fontSize="30px" spacing={5} p={5}>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <Link
                href="https://github.com/UrvashiSohaliya2511"
                target="_blank"
              >
                <BsGithub />
              </Link>
            </Box>
            <Link href="https://github.com/UrvashiSohaliya2511" target="_blank">
              <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
                Github
              </Text>
            </Link>
          </Flex>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <Link
                href="https://www.linkedin.com/in/urvashi-sohaliya-012919235/"
                target="_blank"
              >
                <IoLogoLinkedin />
              </Link>
            </Box>
            <Link
              href="https://www.linkedin.com/in/urvashi-sohaliya-012919235/"
              target="_blank"
            >
              {" "}
              <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
                Linkedin
              </Text>
            </Link>
          </Flex>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <IoIosCall />
            </Box>
            <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
              +91 6351938080
            </Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Link
              href="mailto:urvashisohaliya00@gmail.com?subject = Feedback&body = Message"
              color="white"
            >
              <Box style={iconstyle} _hover={iconhover}>
                <IoMdMail />
              </Box>
            </Link>

            <Text fontSize={["12px", "16px", "18px", "20px"]} color="gray">
              urvashisohaliya00@gmail.com
            </Text>
          </Flex>
        </Stack>
        <Box></Box>
        {/* </Flex> */}
      </SimpleGrid>

      {/* <Img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1666608457~exp=1666609057~hmac=cdd8f763c90e23489d52a54357ca462cd36fdc8efee07ced9207421205c6495a" /> */}
    </Stack>
  );
};

export default Contact;
