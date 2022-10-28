import {
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
// import { arrow } from "./style/theme";
// import { FlipPage } from "react-flip-page";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
const nord = require("../componants/Assets/nord.png");
const bestbuy = require("../componants/Assets/bonsai.jpg");

const cardStyle = {
  borderRadius: "10px",
  // border: "1px Solid black",
  textAlign: "left",
  padding: "5%",
  boxShadow: " #9b37ff 0px 2px 4px 0px inset",
  backgroundColor: "whitesmoke",
  color: "#1A1A1D",
};
const imgcardstyle = {
  marginTop: "-113px",
};
const Project = () => {
  return (
    <Stack id="projects" pb="5%" spacing={5}>
      {/* <Box m="auto" w={["50%", "40%", "30%", "15%"]}>
        <Heading bg="pink" fontWeight="300" color="white">
          Projects
        </Heading>
        <Box style={arrow} bg="pink"></Box>git
      </Box> */}
      <Text color="gray" fontWeight="bold">
        What i did ?
      </Text>
      <Heading>MY PROJECTS</Heading>
      <SimpleGrid>
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "row", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src={nord}
            w={["100%", "100%", "50%", "50%"]}
            h="100%"
            objectFit="cover"
          />
          <Stack
            w={["100%", "100%", "50%", "50%"]}
            bg="#111111"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="30px" color="white">
              NORDSTROMRACK.COM - CLONE
            </Heading>
            <Text color="lightgray" fontSize="18px">
              Nordstromrack.com is an apparel and accessories e-commerce website
              that delivers an immersive and engaging shopping experience.
            </Text>
            <Text color="lightgray" fontSize="18px">
              An Individual Project ,Executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="18px">
              Tech Skill used : React | Chakra UI | JavaScript
            </Text>
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
        </Flex>
        {/* .................................. */}
        <Flex
          // h={["600px", "600px", "480px", "480px"]}
          flexDirection={["column", "column", "row", "row"]}
          p={4}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        >
          <Image
            src={bestbuy}
            w={["100%", "100%", "50%", "50%"]}
            h="100%"
            objectFit="fill"
          />
          <Stack
            w={["100%", "100%", "50%", "50%"]}
            bg="#111111"
            p="5%"
            textAlign="left"
            spacing={5}
          >
            <Heading fontSize="30px" color="white">
              HELLOBONSAI -CLONE
            </Heading>
            <Text color="lightgray" fontSize="18px">
              Hello Bonsai is a freelancing management app, It offers freelance
              proposals and contracts. It handles your freelance invoices and
              payments. It helps you with tracking your expenses.
            </Text>
            <Text color="lightgray" fontSize="18px">
              Working Area : Dashboard and Tasks page
            </Text>
            <Text color="lightgray" fontSize="18px">
              Collaborative project with 5 team-members , executed in 5 days.
            </Text>
            <Text color="lightgray" fontSize="18px">
              Tech Skill used : ReactJS | NodeJS | Express | MongoDb | Chakra-UI
              | JS | HTML| CSS
            </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/PRASHANT7277/Hellobonsai-clone"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link href="https://hellobonsai.vercel.app/" target="_blank">
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </SimpleGrid>
      {/* <SimpleGrid
        columns={[1, 1, 1, 2, 2]}
        align="center"
        justify="center"
        spacingY={10}
        pt={"5%"}
        pb={"5%"}
      >
        <Box w={["100%", "90%", "73%"]} m="auto" className="card">
          <Stack w="100%" h={"380px"} style={cardStyle}>
            <Heading fontSize="150%">NORDSTROMRACK.COM - CLONE</Heading>
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
        <Box w={["100%", "90%", "73%"]} m="auto" className="card">
          <Stack w="100%" h={"380px"} style={cardStyle}>
            <Heading fontSize="150%">BESTBUY.COM - CLONE</Heading>
            <Text>
              Hello Bonsai is a freelancing management app, It offers freelance
              proposals and contracts. It handles your freelance invoices and
              payments. It helps you with tracking your expenses.
            </Text>
            <Text> Working Area : Dashboard and Tasks page</Text>
            <Text>
              Collaborative project with 6 team-members , executed in 5 days.
            </Text>
            <Text>
              Tech Skill used : ReactJS | NodeJS | Express | MongoDb | Chakra-UI
              | JS | HTML| CSS
            </Text>
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
            <Image src={bestbuy} w="100%" h="100%" pb="0" borderRadius="10px" />
          </Box>
        </Box>
      </SimpleGrid> */}
    </Stack>
  );
};

export default Project;
