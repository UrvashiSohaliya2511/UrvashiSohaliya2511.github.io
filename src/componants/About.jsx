import { Box, Text, Heading, Stack, Flex, Img } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
import "./style/about.css";
import AOS from "aos";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const profile = require("../componants/Assets/Profile3.png");
const About = () => {
  React.useEffect(() => {
    AOS.init({ offset: 200, duration: 1000 });
  }, []);
  return (
    <Stack id="about" pt="8%" pb="8%" bg="lightgray">
      <Text color="gray" fontWeight="bold" data-aos="zoom-in">
        ABOUT ME
      </Text>
      <Heading data-aos="zoom-in">WHO AM I ?</Heading>
      <Flex
        h="95%"
        align="center"
        justify="center"
        gap={[0, 0, 12]}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Stack textAlign="justify" w={["90%", "90%", "50%"]}>
          <Box color="gray" p={6} fontSize={["18px", "22px"]}>
            <Text
              fontSize="40px"
              textAlign="center"
              color="lightpink"
              mr="99%"
              mb="3%"
              data-aos="zoom-in"
            >
              <ImQuotesLeft />
            </Text>
            <Text data-aos="zoom-in"> Hello !🙋‍♀️</Text>

            <Text data-aos="zoom-in">As you know I'm Urvashi Sohaliya.</Text>

            <Text data-aos="zoom-in">
              Quick learner and Aspiring full-stack web developer with core
              knowledge of MERN stack technology. Collaborative, Proficient in
              working in a team and executing goal-oriented projects, looking
              forward to applying and enhancing skills and expertise as a
              developer with a product-based Company.
            </Text>
            <Text
              fontSize="40px"
              textAlign="center"
              color="lightpink"
              ml="90%"
              data-aos="zoom-in"
            >
              <ImQuotesRight />
            </Text>
          </Box>
        </Stack>
        <Img
          src={profile}
          h="280px"
          bg="rgb(247, 224, 224,0.5)"
          borderRadius="5%"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          data-aos="zoom-in"
        />
      </Flex>
    </Stack>
    // <Box id="about" pt={5} p={10} bg="lightgray">
    //   {/* <Box m="auto" w={["30%", "25%", "30%", "20%"]}> */}
    //   {/* <Heading fontWeight="300" color="white" bg="pink">
    //       About Me
    //     </Heading> */}
    //   <Heading fontSize="62px" fontWeight="500" color="whiteSmoke">
    //     ABOUT ME
    //   </Heading>

    //   {/* <Box style={arrow} bg="pink"></Box> */}
    //   {/* </Box> */}
    //   <Stack
    //     fontWeight="300"
    //     color="whitesmoke"
    //     textAlign="justify"
    //     fontSize="20px"
    //     w={["100%", "95%", "70%", "60%"]}
    //     m="auto"
    //     mt={10}
    //     p={8}
    //     borderRadius="8px"
    //     // boxShadow="#72757e 1.95px 1.95px 2.6px"
    //   >
    //     <Text> Hello 🙋‍♀️</Text>
    //     <Flex gap={3} align="center">
    //       <Text>As you know I'm</Text>
    //       <Heading fontWeight="300px"> Urvashi Sohaliya </Heading>
    //     </Flex>
    //     <Text>
    //       I am Full Stack Web Developer , Having knowledge of MERN Stack
    //       technology . Collaborative , Proficient in working in team and
    //       executing goal orianted projects. Looking forward to applying and
    //       enhancing my skills and knowledge as a developer
    //     </Text>
    //   </Stack>
    //   {/* <Heading fontSize="30px" fontWeight="500" color="whiteSmoke">
    //     EDUCATION
    //   </Heading>
    //   <Stack className="education">
    //     <Box>
    //       <Text>Full Stack Web Development</Text>
    //       <Text>Masai School,Banglore,Karnataka</Text>
    //       <Text>April2022 - Present</Text>
    //     </Box>
    //     <Box>
    //       <Text>Bachelor of Commerce</Text>
    //       <Text>Veer narmad south gujarat university Surat ,Gujarat</Text>
    //       <Text>July 2018 - July 2021</Text>
    //     </Box>
    //     <Box>
    //       <Text>HSC - Commerce</Text>
    //       <Text>Balanand Vidhyalaya,Surat,Gujarat</Text>
    //       <Text>April 2016 - March 2018</Text>
    //     </Box>
    //   </Stack> */}
    // </Box>
  );
};

export default About;
