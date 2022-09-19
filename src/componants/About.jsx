import { Box, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
import "./style/about.css";
const About = () => {
  return (
    <Box id="about" pt={5} p={10} bg="#16161a">
      {/* <Box m="auto" w={["30%", "25%", "30%", "20%"]}> */}
      {/* <Heading fontWeight="300" color="white" bg="pink">
          About Me
        </Heading> */}
      <Heading fontSize="62px" fontWeight="500" color="whiteSmoke">
        ABOUT ME
      </Heading>

      {/* <Box style={arrow} bg="pink"></Box> */}
      {/* </Box> */}
      <Stack
        fontWeight="300"
        color="whitesmoke"
        textAlign="justify"
        fontSize="20px"
        w={["100%", "95%", "70%", "60%"]}
        m="auto"
        mt={10}
        p={8}
        borderRadius="8px"
        // boxShadow="#72757e 1.95px 1.95px 2.6px"
      >
        <Text> Hello 🙋‍♀️</Text>
        <Flex gap={3} align="center">
          <Text>As you know I'm</Text>
          <Heading fontWeight="300px"> Urvashi Sohaliya </Heading>
        </Flex>
        <Text>
          I am Full Stack Web Developer , Having knowledge of MERN Stack
          technology . Collaborative , Proficient in working in team and
          executing goal orianted projects. Looking forward to applying and
          enhancing my skills and knowledge as a developer
        </Text>
      </Stack>
      {/* <Heading fontSize="30px" fontWeight="500" color="whiteSmoke">
        EDUCATION
      </Heading>
      <Stack className="education">
        <Box>
          <Text>Full Stack Web Development</Text>
          <Text>Masai School,Banglore,Karnataka</Text>
          <Text>April2022 - Present</Text>
        </Box>
        <Box>
          <Text>Bachelor of Commerce</Text>
          <Text>Veer narmad south gujarat university Surat ,Gujarat</Text>
          <Text>July 2018 - July 2021</Text>
        </Box>
        <Box>
          <Text>HSC - Commerce</Text>
          <Text>Balanand Vidhyalaya,Surat,Gujarat</Text>
          <Text>April 2016 - March 2018</Text>
        </Box>
      </Stack> */}
    </Box>
  );
};

export default About;
