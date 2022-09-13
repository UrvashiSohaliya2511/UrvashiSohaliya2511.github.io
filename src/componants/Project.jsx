import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import "./style/project.css";
import { arrow } from "./style/theme";

import { FaTelegramPlane, FaGithub } from "react-icons/fa";
const nord = require("../componants/Assets/nord.png");
const bestbuy = require("../componants/Assets/bestbuy.png");

const cardStyle = {
  borderRadius: "10px",
  // border: "1px Solid black",
  textAlign: "left",
  padding: "5%",
  boxShadow: " #c3073f 0px 2px 4px 0px inset",
  backgroundColor: "rgb(166,198,197,0.2)",
  color: "#1A1A1D",
};
const imgcardstyle = {
  marginTop: "-130px",
};
const Project = () => {
  return (
    <Box id="projects">
      <Box m="auto" w={["50%", "40%", "30%", "20%"]}>
        <Heading bg="pink" fontWeight="300" color="white">
          Projects
        </Heading>
        <Box style={arrow} bg="pink"></Box>
      </Box>
      <SimpleGrid
        columns={[1, 1, 1, 1, 2]}
        align="center"
        justify="center"
        spacingY={10}
        pt={"5%"}
        pb={"5%"}
      >
        <Box w="70%" m="auto" className="card">
          <Stack w="100%" h={"370px"} style={cardStyle}>
            <Heading fontSize="27px">NORDSTROMRACK.COM - CLONE</Heading>
            <Text>
              Nordstromrack.com is an apparel and accessories e-commerce website
              that delivers an immersive and engaging shopping experience.
            </Text>
            <Text>An Individual Project ,Executed in 5 days.</Text>
            <Text>Tech Skill used : React | Chakra UI | JavaScript</Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/UrvashiSohaliya2511/gamy-part-5391"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link href="https://nordstromrack.vercel.app/" target="_blank">
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
          <Box w="90%" h="330px" className="imageBox" style={imgcardstyle}>
            <Image
              src={nord}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
        </Box>
        <Box w="70%" m="auto" className="card">
          <Stack w="100%" h={"370px"} style={cardStyle}>
            <Heading fontSize="27px">BESTBUY.COM - CLONE</Heading>
            <Text>
              Bestbuy.com is an e-commerce website for various electronic
              products like laptops, home appliances, etc.
            </Text>
            <Text>
              Collaborative project with 6 team-members , executed in 5 days.
            </Text>
            <Text>Tech Skill used : HTML | CSS | Javascript</Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/UrvashiSohaliya2511/Bestbuy"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link
                  href="https://normal-ducks-2238-urvashisohaliya2511.vercel.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
          <Box w="90%" h="330px" className="imageBox" style={imgcardstyle}>
            <Image
              src={bestbuy}
              w="100%"
              h="100%"
              pb="0"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Project;
