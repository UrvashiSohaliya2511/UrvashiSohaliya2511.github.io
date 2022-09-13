import { Box, Heading, Image, Stack, Text, SimpleGrid } from "@chakra-ui/react";
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
const Skill = () => {
  return (
    <Box id="skill" pt={10} pb="10%">
      <Box m="auto" w={["50%", "25%", "30%", "15%"]}>
        <Heading bg="pink" fontWeight="300" color="white" p={1}>
          My Skills
        </Heading>
        <Box style={arrow} bg="pink"></Box>
      </Box>
      <SimpleGrid
        id="skillDiv"
        columns={[2, 3, 3, 3]}
        align="center"
        justify="space-evenly"
        spacingY={12}
        spacingX={12}
        mt="5%"
      >
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
          <Image src={express} alt="Express.js" />
          <Text>Express.js</Text>
        </Box>
        <Box>
          <Image src={chakra} alt="Chakra-ui" />
          <Text>Chakra-UI</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Skill;
