import React from "react";
import {
  Stack,
  Box,
  Heading,
  Center,
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
const Github = () => {
  return (
    <Stack id="cal" bg="#111111" p={"10%"}>
      <Heading fontSize="62px" fontWeight="500" color="whiteSmoke" mb={5}>
        Statistics
      </Heading>
      <SimpleGrid
        justify="space-evenly"
        color="whiteSmoke"
        columns={[3, 3, 5, 5]}
      >
        <Box align="center">
          <Heading color="#2cb67d">1200+</Heading>
          <Text>hours of coding</Text>
        </Box>
        <Box>
          <Heading color="#2cb67d">500+</Heading>
          <Text>hours of DSA</Text>
        </Box>

        <Box>
          <Heading color="#2cb67d">6</Heading>
          <Text>Months of Training</Text>
        </Box>
        <Box>
          <Heading color="#2cb67d">3</Heading>
          <Text>Projects Completed</Text>
        </Box>
        <Box w="80%">
          <Heading color="#2cb67d">6</Heading>
          <Text>Months of training on interpersonal skills</Text>
        </Box>
      </SimpleGrid>
      <Text color="#2cb67d" fontWeight="bold" textDecoration="underline">
        MY CONTRIBUTIONS
      </Text>
      <Center m="auto" align="center" p={10}>
        <GitHubCalendar
          username="urvashisohaliya2511"
          style={{ color: "white" }}
        />
      </Center>
      {/* <Flex
        justify="center"
        flexDirection={["column", "column", "row"]}
        gap="4"
      >
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=urvashisohaliya2511&layout=compact&theme=gotham"
          width="400"
        />

        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com?user=urvashisohaliya2511&theme=gotham"
          width="400"
        />
      </Flex> */}
    </Stack>
  );
};

export default Github;
