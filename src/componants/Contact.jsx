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
    <Box id="contact" pb={10} pt={10} bg="#16161a">
      {/* <Heading fontSize="62px" fontWeight=" 600" color="whiteSmoke">
        CONTACT ME
      </Heading> */}
      {/* <Box m="auto" w={["50%", "40%", "30%", "20%"]}>
        <Heading bg="#9b37ff" fontWeight="300" color="whitesmoke">
          Contact Me
        </Heading>
        <Box style={arrow} bg="#9b37ff"></Box>
      </Box> */}
      <Show above="lg">
        <Flex justify="space-between" align="center" p={3}>
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
              <Link
                href="https://github.com/UrvashiSohaliya2511"
                target="_blank"
              >
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
            >
              <Flex align="center" justify="center" gap={3}>
                <Box style={iconstyle} _hover={iconhover}>
                  <IoIosCall />
                </Box>
                <Text fontSize="20px">+91 6351938080</Text>
              </Flex>
              <Flex align="center" justify="center" gap={3}>
                <Box style={iconstyle} _hover={iconhover}>
                  <IoMdMail />
                </Box>
                <Text fontSize="20px">urvashisohaliya00@gmail.com</Text>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Show>
      <Show below="lg">
        <Stack fontSize="34px" gap={3} color="white" pl={3}>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <IoIosCall />
            </Box>
            <Text fontSize="20px">+91 6351938080</Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Box style={iconstyle} _hover={iconhover}>
              <IoMdMail />
            </Box>
            <Text fontSize="20px">urvashisohaliya00@gmail.com</Text>
          </Flex>
          <Flex fontSize="34px" align="center" gap={12} color="white">
            <Box style={iconstyle} _hover={iconhover}>
              <Link
                href="https://www.linkedin.com/in/urvashi-sohaliya-012919235/"
                target="_blank"
              >
                <IoLogoLinkedin />
              </Link>
            </Box>
            <Box style={iconstyle} _hover={iconhover}>
              <Link
                href="https://github.com/UrvashiSohaliya2511"
                target="_blank"
              >
                <BsGithub />
              </Link>
            </Box>
          </Flex>
        </Stack>
      </Show>
    </Box>
  );
};

export default Contact;
