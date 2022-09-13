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
            <Heading fontSize="60px" color="white">
              I'm Urvashi
            </Heading>
            <Heading fontSize="40px" color="white">
              Full Stack Web Developer
            </Heading>
            <Flex align="center" gap={5}>
              <Button bg="pink" color="white">
                Resume
              </Button>
              <Link
                className="iconlink"
                bg="white"
                borderRadius="50%"
                border="1px solid black"
                fontSize="30px"
                color="pink"
              >
                <BsGithub className="icon" />
              </Link>
            </Flex>
          </Stack>
          <Box
            w={["100%", "100%", "45%", "30%"]}
            h="100%"
            align="center"
            pt={3}
          >
            <Image
              border=" 2px solid #c3073f"
              src={profile}
              w={["90%", "72%"]}
              h={["90%", "85%", "50%", "50%"]}
              mt={["5%", "5%", "50%", "30%"]}
              bg="#B0B8B4FF"
            />
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Home;
