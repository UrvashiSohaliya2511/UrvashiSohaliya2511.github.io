import React from "react";
import "./style/home.css";
import {
  Image,
  Stack,
  SimpleGrid,
  Box,
  Heading,
  Flex,
  Text,
  Tooltip,
  Button,
  Link,
  Container,
} from "@chakra-ui/react";

import { BsGithub } from "react-icons/bs";
import { arrow } from "./style/theme";
const profile = require("../componants/Assets/Profile3.png");
const bg = require("../componants/Assets/bg.jpg");
const Home = () => {
  const imagestyle = {
    width: "90%",
    height: "65%",
  };

  return (
    <>
      {" "}
      <Stack id="home" h="100vh" mt={["-10px"]} w="100%" bg="black" pb={3}>
        <Flex
          m="auto"
          direction={["column", "column", "row"]}
          h="100%"
          align="center"
          w="100%"
        >
          <Stack
            textAlign="left"
            m="auto"
            spacing={3}
            w={["100%", "100%", "65%", "70%"]}
            h="100%"
            justify="center"
            pl={"10%"}
          >
            <Box w={["30%", "25%", "30%", "20%"]}>
              <Flex gap={2} bg="pink" p={1} align="center">
                <Heading fontWeight="300" color="white">
                  Hello
                </Heading>
                <Heading className="hand">👋</Heading>
              </Flex>

              <Box style={arrow} bg="pink"></Box>
            </Box>
            <Heading fontSize="75px" fontWeight=" 600" color="whiteSmoke">
              I'm Urvashi
            </Heading>
            <Heading fontSize="40px" color="white" fontWeight=" 300">
              Full Stack Web Developer
            </Heading>
            <Flex align="center" gap={5}>
              <Button bg="pink" color="white" mt="5">
                Resume
              </Button>
            </Flex>
          </Stack>
          <Box
            w={["100%", "100%", "45%", "30%"]}
            h="100%"
            align="center"
            pt={3}
          >
            <Image
              src={profile}
              w={["90%", "72%"]}
              h={["90%", "85%", "50%", "50%"]}
              mt={["5%", "5%", "50%", "30%"]}
              bg="#d2cde2"
              border="3px solid black"
              borderRadius="5% 20% 5% 20%"
            />
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Home;
