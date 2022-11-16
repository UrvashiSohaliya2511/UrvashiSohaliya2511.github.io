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
import { AiFillHtml5 } from "react-icons/ai";
import AOS from "aos";

import {
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiChakraui,
  SiExpress,
  SiHtml5,
  SiFrontendmentor,
} from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { BsPuzzle } from "react-icons/bs";

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
  React.useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return (
    <Stack id="skill" pt={10} pb="10%" spacing={["40%", "5%", "5%", "3%"]}>
      <Stack>
        <Text color="gray" fontWeight="bold">
          MY - SKILLS
        </Text>
        <Heading>WHAT I DO ?</Heading>
      </Stack>
      <SimpleGrid
        id="skillDo"
        align="center"
        justify="center"
        color="gray"
        rowGap={"15%"}
        columnGap={"3%"}
        p={10}
        columns={[1, 3, 3, 3]}
      >
        <Box data-aos="zoom-in">
          <Box className="hexagon">
            <span>
              <SiFrontendmentor />
            </span>
          </Box>
          <Text>Front-End Development </Text>
        </Box>
        <Box data-aos="zoom-in">
          <Box className="hexagon">
            <span>
              <FiDatabase />
            </span>
          </Box>

          <Text>Back-End Development</Text>
        </Box>
        <Box data-aos="zoom-in">
          <Box className="hexagon">
            <span>
              <BsPuzzle />
            </span>
          </Box>

          <Text>Data Structures & Algorithms</Text>
        </Box>
      </SimpleGrid>
      <Stack spacing="4%">
        <Text color="pink" fontWeight="bold">
          TECH - SKILLS
        </Text>
        <SimpleGrid
          id="skillDiv"
          columns={[2, 3, 3, 5]}
          align="center"
          justify="space-evenly"
          spacingY={12}
          spacingX={12}
          fontWeight="bold"
          color="gray"
        >
          <Box
            data-aos="fade-up
"
          >
            <Image src={html} alt="html" />
            <Text>HTML</Text>
          </Box>
          <Box
            data-aos="fade-up
"
          >
            <Image src={css} alt="css" />
            <Text>CSS</Text>
          </Box>
          <Box
            data-aos="fade-up
"
          >
            <Image src={js} alt="JavaScript" />
            <Text>JavaScript</Text>
          </Box>
          <Box
            data-aos="fade-up
"
          >
            <Image src={react} alt="React" />
            <Text>React</Text>
          </Box>
          <Box
            data-aos="fade-up
"
          >
            <Image src={mongo} alt="mongoDB" />
            <Text>MongoDB</Text>
          </Box>
          <Box
            data-aos="fade-up

"
          >
            <Image src={redux} alt="redux" />
            <Text>Redux</Text>
          </Box>
          <Box
            data-aos="fade-up
"
          >
            <Image src={node} alt="Node.js" />
            <Text>NodeJS</Text>
          </Box>
          <Box
            data-aos="fade-up
"
          >
            <Image
              src={express}
              alt="Express.js"
              border="1px solid white"
              borderRadius="50%"
            />
            <Text>Express.js</Text>
          </Box>
          <Box
            data-aos="fade-up
"
          >
            <Image src={chakra} alt="Chakra-ui" />
            <Text>Chakra-UI</Text>
          </Box>
        </SimpleGrid>

        <Text color="pink " mt="4%" fontWeight="bold">
          SOFT - SKILLS
        </Text>
        <SimpleGrid
          id="skillDiv"
          columns={[3, 3, 3, 3]}
          align="center"
          justify="space-evenly"
          spacingY={12}
          spacingX={12}
          mt="2%"
          fontWeight="bold"
          color="gray"
        >
          <Box>
            <Image
              src={learn}
              alt="mongoDB"
              data-aos="fade-up
"
            />
            <Text>Self Learning</Text>
          </Box>
          <Box>
            <Image
              src={team}
              alt="mongoDB"
              data-aos="fade-up
"
            />
            <Text>Team Work</Text>
          </Box>
          <Box>
            <Image
              src={problemsolving}
              alt="mongoDB"
              data-aos="fade-up
"
            />
            <Text>Problem Solving Mindset</Text>
          </Box>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Skill;
