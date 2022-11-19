import React from "react";
import {
  Stack,
  Box,
  Heading,
  Center,
  Flex,
  Text,
  SimpleGrid,
  Img,
} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
const Github = () => {
  React.useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);
  return (
    <Stack id="cal" bg="#111111" p={"10%"}>
      <Heading
        fontSize={["30px", "45px", "50px", "62px"]}
        fontWeight="500"
        color="whiteSmoke"
        mb={5}
      >
        Statistics
      </Heading>
      <SimpleGrid
        justify="space-evenly"
        color="whiteSmoke"
        columns={[3, 3, 5, 5]}
      >
        <Box align="center" data-aos="zoom-in">
          <Heading color="#2cb67d" fontSize={["18px", "24px", "26px", "35px"]}>
            1200+
          </Heading>
          <Text fontSize={["11px", "13px", "15px", "17px"]}>
            hours of coding
          </Text>
        </Box>
        <Box data-aos="zoom-in">
          <Heading color="#2cb67d" fontSize={["18px", "24px", "26px", "35px"]}>
            500+
          </Heading>
          <Text fontSize={["11px", "13px", "15px", "17px"]}>hours of DSA</Text>
        </Box>

        <Box data-aos="zoom-in">
          <Heading color="#2cb67d" fontSize={["18px", "24px", "26px", "35px"]}>
            6
          </Heading>
          <Text fontSize={["11px", "13px", "15px", "17px"]}>
            Months of Training
          </Text>
        </Box>
        <Box data-aos="zoom-in">
          <Heading color="#2cb67d" fontSize={["18px", "24px", "26px", "35px"]}>
            3
          </Heading>
          <Text fontSize={["11px", "13px", "15px", "17px"]}>
            Projects Completed
          </Text>
        </Box>
        <Box w="80%" data-aos="zoom-in">
          <Heading color="#2cb67d" fontSize={["18px", "24px", "26px", "35px"]}>
            6
          </Heading>
          <Text fontSize={["11px", "13px", "15px", "17px"]}>
            Months of training on interpersonal skills
          </Text>
        </Box>
      </SimpleGrid>
      <Text color="#2cb67d" fontWeight="bold" textDecoration="underline">
        MY CONTRIBUTIONS
      </Text>
      <Center m="auto" align="center" p={10} data-aos="zoom-in">
        <GitHubCalendar
          username="urvashisohaliya2511"
          style={{ color: "white" }}
        />
      </Center>

      <SimpleGrid columns={2} spacing={5} align="center" justify="center">
        <Img
          src="https://github-readme-stats.vercel.app/api?username=Urvashisohaliya2511&theme=gotham&hide_border=false&include_all_commits=false&count_private=false&show_icons=true"
          data-aos="zoom-in"
        />
        <Img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Urvashisohaliya2511&theme=gotham&hide_border=false"
          data-aos="zoom-in"
        />
      </SimpleGrid>
    </Stack>
  );
};

export default Github;
