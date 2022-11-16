import React from "react";
import "./style/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Stack,
  Heading,
  Flex,
  Text,
  Tooltip,
  Button,
  Link,
} from "@chakra-ui/react";

import { GoTriangleRight } from "react-icons/go";

const bg = require("../componants/Assets/bg.jpg");
const Home = () => {
  const imagestyle = {
    width: "90%",
    height: "65%",
  };

  React.useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return (
    <>
      <Stack id="home" bg="black" pt="13%" pb="13%" spacing={5}>
        <Flex align="center" justify="center">
          <Stack align="center" justify="center" spacing={5}>
            {/* <Text color="pink">
              <BsThreeDots />
            </Text> */}

            <Text
              color="gray"
              fontSize="24px"
              data-aos="zoom-out
"
            >
              HELLO ! I'M,
            </Text>

            <Heading color="white" fontSize={["50px", "60px", "70px", "90px"]}>
              URVASHI SOHALIYA
            </Heading>

            <Flex
              id="txt1"
              color="white"
              gap={3}
              fontSize={["20px", "25px", "30px", "40px"]}
            >
              <Text data-aos="ease-out-sine">FULL STACK WEB </Text>
              <Text id="txt" data-aos="ease-out-sine">
                DEVELOPER
              </Text>
            </Flex>
            <Link
              href="https://drive.google.com/file/d/1pRULwZCsuw54yPK0-eDQNN0oDaMG3hyj/view"
              target="_blank"
            >
              <Button
                bg="pink"
                color="white"
                w="150px"
                borderRadius="none"
                data-aos="ease-out-sine"
              >
                RESUME
                <GoTriangleRight />
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Stack>
      {/* {" "}
      <Stack
        id="home"
        h={["150vh", "150vh", "110vh", "100vh"]}
        mt={["-10px"]}
        w="100%"
        bg="black"
        pb={3}
      >
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
            <Box w={["30%", "25%", "30%", "20%"]} mt={"8%"}>
              <Flex gap={2} bg="#78d8c5" p={1} align="center">
                <Heading fontWeight="300" color="#fffffe">
                  Hello
                </Heading>
                <Heading className="hand">👋</Heading>
              </Flex>

              <Box style={arrow} bg="#78d8c5"></Box>
            </Box>
            <Heading
              fontSize={["60px", "60px", "75px"]}
              fontWeight=" 600"
              color="whiteSmoke"
            >
              I'm Urvashi
            </Heading>
            <Heading
              fontSize={["25px", "30px", "40px"]}
              color="white"
              fontWeight=" 300"
            >
              Full Stack Web Developer
            </Heading>
            <Flex align="center" gap={5}>
              <Link
                href="https://drive.google.com/file/d/1fbJPx0eHsoJcbgDrDtKzfV84s7caBL67/view?usp=sharing"
                target="_blank"
              >
                <Button
                  bg="white"
                  color=" #78d8c5"
                  mt="5"
                  borderRadius="none"
                  size="lg"
                  border="2px solid #78d8c5"
                  _hover={{
                    bg: "#78d8c5",

                    color: "white",
                  }}
                >
                  Resume
                </Button>
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
              src={profile}
              w={["90%", "60%", "72%"]}
              h={["80%", "80%", "50%", "50%"]}
              mt={["5%", "5%", "50%", "33%"]}
              // bg="#d2cde2"
              border="3px solid black"
              borderRadius="5% 20% 5% 20%"
            />
          </Box>
        </Flex>
      </Stack> */}
    </>
  );
};

export default Home;
