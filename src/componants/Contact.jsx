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
import AOS from "aos";
// import {} from "react-animation-on-scroll";
const Contact = () => {
  const iconstyle = {
    // borderRadius: "30% 5% 30% 5%",
    // backgroundColor: "whitesmoke",
    color: "white",
    padding: 3,
  };
  const iconhover = {
    borderRadius: "30% 5% 30% 5%",
    backgroundColor: "#BD4B4B",
    color: "black",
    cursor: "pointer",
  };
  React.useEffect(() => {
    AOS.init({ offset: 100, duration: 1000 });
  }, []);
  return (
    <Stack id="contact" pb={10} pt={10} bg="black" spacing={5}>
      {/* <Text color="pink" fontWeight="bold" textAlign="left">
        :::
      </Text> */}
      <Text color="gray" fontWeight="bold" data-aos="zoom-in">
        CONTACT ME
      </Text>
      <Heading color="lightgray" data-aos="zoom-in">
        Get in Touch
      </Heading>

      {/* <SimpleGrid> */}
      {/* <Flex
          fontSize="34px"
          align="center"
          justify="center"
          gap={8}
          color="white"
        > */}
      <SimpleGrid
        w="100%"
        fontSize="30px"
        spacing={5}
        columns={[1, 1, 2, 4]}
        align="center"
        justify="center"
        padding={10}
        border="1px solid"
      >
        <Flex
          align="center"
          gap={3}
          flexDirection={["row", "row", "column", "column"]}
        >
          <Box style={iconstyle} _hover={iconhover} data-aos="zoom-in">
            <Link href="https://github.com/UrvashiSohaliya2511" target="_blank">
              <BsGithub />
            </Link>
          </Box>
          <Link href="https://github.com/UrvashiSohaliya2511" target="_blank">
            <Text
              fontSize={["12px", "16px", "18px", "20px"]}
              color="gray"
              data-aos="zoom-in"
              _hover={{ color: "pink" }}
            >
              Github
            </Text>
          </Link>
        </Flex>
        <Flex
          align="center"
          gap={3}
          flexDirection={["row", "row", "column", "column"]}
        >
          <Box style={iconstyle} _hover={iconhover} data-aos="zoom-in">
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
            <Text
              fontSize={["12px", "16px", "18px", "20px"]}
              color="gray"
              data-aos="zoom-in"
              _hover={{ color: "pink" }}
            >
              Linkedin
            </Text>
          </Link>
        </Flex>
        <Flex
          align="center"
          gap={3}
          flexDirection={["row", "row", "column", "column"]}
        >
          <Box style={iconstyle} _hover={iconhover} data-aos="zoom-in">
            <IoIosCall />
          </Box>
          <Text
            fontSize={["12px", "16px", "18px", "20px"]}
            color="gray"
            data-aos="zoom-in"
            _hover={{ color: "pink" }}
          >
            +91 6351938080
          </Text>
        </Flex>
        <Flex
          align="center"
          gap={3}
          flexDirection={["row", "row", "column", "column"]}
        >
          <Link
            href="mailto:urvashisohaliya00@gmail.com?subject = Feedback&body = Message"
            color="white"
          >
            <Box style={iconstyle} _hover={iconhover} data-aos="zoom-in">
              <IoMdMail />
            </Box>
          </Link>

          <Text
            fontSize={["12px", "16px", "18px", "20px"]}
            color="gray"
            data-aos="zoom-in"
            _hover={{ color: "pink" }}
          >
            urvashisohaliya00@gmail.com
          </Text>
        </Flex>
      </SimpleGrid>
      <Text color="whitesmoke">
        Designed and Developed by Urvashi Sohaliya © 2022 All rights reserved.
      </Text>
      {/* <Box></Box> */}
      {/* </Flex> */}
      {/* </SimpleGrid> */}

      {/* <Img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1666608457~exp=1666609057~hmac=cdd8f763c90e23489d52a54357ca462cd36fdc8efee07ced9207421205c6495a" /> */}
    </Stack>
  );
};

export default Contact;
