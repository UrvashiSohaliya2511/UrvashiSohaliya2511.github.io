import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Show,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { IoIosCall, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { arrow } from "./style/theme";
import { BsGithub } from "react-icons/bs";
import "./style/contact.css";
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
    <Stack id="contact" pb={10} bg="black" spacing={5}>
      <Text color="gray" fontWeight="bold">
        CONTACT ME
      </Text>
      <Heading color="lightgray">Get in Touch</Heading>
      {/* <Heading fontSize="62px" fontWeight=" 600" color="whiteSmoke">
        CONTACT ME
      </Heading> */}
      {/* <Box m="auto" w={["50%", "40%", "30%", "20%"]}>
        <Heading bg="#9b37ff" fontWeight="300" color="whitesmoke">
          Contact Me
        </Heading>
        <Box style={arrow} bg="#9b37ff"></Box>
      </Box> */}

      {/* <div class="custom-shape-divider-top-1665406615">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </svg>
      </div> */}

      <Flex
        justify="space-between"
        align="center"
        p={3}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Flex
          fontSize="34px"
          align="center"
          justify="center"
          gap={12}
          color="white"
        >
          <Box style={iconstyle} _hover={iconhover}>
            <Link
              href="https://www.linkedin.com/in/urvashi-sohaliya-012919235/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </Link>
          </Box>
          <Box style={iconstyle} _hover={iconhover}>
            <Link href="https://github.com/UrvashiSohaliya2511" target="_blank">
              <BsGithub />
            </Link>
          </Box>
        </Flex>
        <SimpleGrid>
          <Flex
            fontSize="34px"
            align="center"
            justify="center"
            gap={8}
            color="white"
            flexDirection={["column", "column", "row", "row"]}
          >
            <Flex align="center" justify="center" gap={3}>
              <Box style={iconstyle} _hover={iconhover}>
                <IoIosCall />
              </Box>
              <Text fontSize="20px" color="gray">
                +91 6351938080
              </Text>
            </Flex>
            <Flex align="center" justify="center" gap={3}>
              <Box style={iconstyle} _hover={iconhover}>
                <IoMdMail />
              </Box>
              <Text fontSize="20px" color="gray">
                urvashisohaliya00@gmail.com
              </Text>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Stack>
  );
};

export default Contact;
