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
const Home = () => {
  const imagestyle = {
    width: "90%",
    height: "70%",
  };

  return (
    <>
      {" "}
      <Stack h="100vh" id="home" mt={["-10px"]} w="100%">
        <Flex
          m="auto"
          direction={["column", "row", "row"]}
          h="100%"
          align="center"
          w="100%"
        >
          <Stack
            textAlign="left"
            m="auto"
            spacing={3}
            w={["100%", "65%", "70%"]}
            h="100%"
            justify="center"
            pl={"10%"}
          >
            <Box w={"20%"}>
              <Flex gap={2} bg="green" p={1} align="center">
                <Heading fontWeight="300" color="white">
                  Hello
                </Heading>
                <Heading className="hand">👋</Heading>
              </Flex>

              <Box style={arrow} bg="green"></Box>
            </Box>
            <Heading fontSize="60px" color="darkslategray">
              I'm Urvashi
            </Heading>
            <Heading fontSize="40px" color="darkslategray">
              Full Stack Web Developer
            </Heading>
            <Flex align="center" gap={5}>
              <Button bg="green" color="white">
                Resume
              </Button>
              <Link className="iconlink" fontSize="30px" color="darkslategray">
                <BsGithub className="icon" />
              </Link>
            </Flex>
          </Stack>
          <Box w={["100%", "35%", "30%"]} h="100%" align="center">
            <Image
              src="{profile}"
              w={["90%", "85%"]}
              h={["90%", "85%", "70%", "65%"]}
              mt={["5%", "30%"]}
            />
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Home;
