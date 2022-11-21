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

            <Text color="gray" fontSize="24px" data-aos="zoom-in">
              HELLO ! I'M,
            </Text>

            <Heading
              color="white"
              fontSize={["50px", "60px", "70px", "90px"]}
              data-aos="zoom-in"
            >
              URVASHI SOHALIYA
            </Heading>

            <Flex
              id="txt1"
              color="white"
              gap={3}
              fontSize={["20px", "25px", "30px", "40px"]}
              data-aos="zoom-in"
            >
              <Text data-aos="ease-out-sine">FULL STACK WEB </Text>
              <Text id="txt">DEVELOPER</Text>
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
                data-aos="zoom-in"
              >
                RESUME
                <GoTriangleRight />
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default Home;
