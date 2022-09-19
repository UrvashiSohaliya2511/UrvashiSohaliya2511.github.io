import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import "./style/skill.css";
import { arrow } from "./style/theme";
const css = require("../componants/Assets/css.png");
const express = require("../componants/Assets/express.png");
const html = require("../componants/Assets/html.png");
const js = require("../componants/Assets/js.png");
const mongo = require("../componants/Assets/mongodb.png");
const react = require("../componants/Assets/react.png");
const redux = require("../componants/Assets/redux.png");
const node = require("../componants/Assets/node.png");
const chakra = require("../componants/Assets/chakra.png");
const dsa = require("../componants/Assets/dsa.png");
const learn = require("../componants/Assets/self-learning.png");
const team = require("../componants/Assets/networking.png");
const problemsolving = require("../componants/Assets/problem-solving.png");

const Skill = () => {
  return (
    <Box id="skill" pt={10} pb="10%">
      {/* <Box m="auto" w={["50%", "25%", "30%", "15%"]}>
        <Heading bg="pink" fontWeight="300" color="white" p={1}>
          My Skills
        </Heading>
        <Box style={arrow} bg="pink"></Box>
      </Box> */}
      <Heading fontSize="62px" fontWeight="500" color="whiteSmoke">
        MY SKILLS
      </Heading>
      <Text color="yellow " mt="4%" fontWeight="bold">
        TECH - SKILLS
      </Text>
      <SimpleGrid
        id="skillDiv"
        columns={[2, 2, 3, 3]}
        align="center"
        justify="space-evenly"
        spacingY={12}
        spacingX={12}
        mt="2%"
      >
        {/* <Box>
          <Image src={dsa} alt="html" />
          <Text>Data structure</Text>
          <Text>and algorithms</Text>
        </Box> */}

        <Box>
          <Image src={html} alt="html" />
          <Text>HTML</Text>
        </Box>
        <Box>
          <Image src={css} alt="css" />
          <Text>CSS</Text>
        </Box>
        <Box>
          <Image src={js} alt="JavaScript" />
          <Text>JavaScript</Text>
        </Box>
        <Box>
          <Image src={react} alt="React" />
          <Text>React</Text>
        </Box>
        <Box>
          <Image src={mongo} alt="mongoDB" />
          <Text>MongoDB</Text>
        </Box>
        <Box>
          <Image src={redux} alt="redux" />
          <Text>Redux</Text>
        </Box>
        <Box>
          <Image src={node} alt="Node.js" />
          <Text>NodeJS</Text>
        </Box>
        <Box>
          <Image
            src={express}
            alt="Express.js"
            border="1px solid white"
            borderRadius="50%"
            bg="whitesmoke"
          />
          <Text>Express.js</Text>
        </Box>
        <Box>
          <Image src={chakra} alt="Chakra-ui" />
          <Text>Chakra-UI</Text>
        </Box>
      </SimpleGrid>

      <Flex id="skillDiv" align="center" justify="center" gap={3} mt={10}>
        <Image src={dsa} alt="mongoDB" />
        <Box>
          <Text>DATA STRUCTURE</Text>
          <Text> AND ALGORITHMS</Text>
        </Box>
      </Flex>
      <Text mt="4%" color="yellow" fontWeight="bold">
        SOFT - SKILLS
      </Text>
      <SimpleGrid
        id="skillDiv"
        columns={[2, 2, 3, 3]}
        align="center"
        justify="space-evenly"
        spacingY={12}
        spacingX={12}
        mt="2%"
      >
        <Box>
          <Image src={learn} alt="mongoDB" />
          <Text>Self Learning</Text>
        </Box>
        <Box>
          <Image src={team} alt="mongoDB" />
          <Text>Team Work</Text>
        </Box>
        <Box>
          <Image src={problemsolving} alt="mongoDB" />
          <Text>Problem Solving Mindset</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Skill;
