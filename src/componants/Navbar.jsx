import React, { useEffect, useState } from "react";
import { IoIosRose } from "react-icons/io";
import {
  SimpleGrid,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Button,
  Stack,
  useDisclosure,
  Show,
  Hide,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import "../componants/style/nav.css";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [styletop, setstyletop] = useState("0");
  const navstyle = {
    position: "fixed",
    top: styletop,
    display: "block",
    overflow: "hidden",
    // transition: "top 0.3s",
    width: "100%",
    zIndex: 2,
  };
  // const prevPos = window.pageYOffset;
  // window.onscroll = () => {
  //   const currPos = window.pageYOffset;

  //   if (prevPos >= currPos) {
  //     setstyletop("0");
  //   } else {
  //     setstyletop("-40px");
  //   }
  // };
  const handlepdfclick = () => {
    // fetch("../../").then((response) => {
    //   response.blob().then((blob) => {
    //     // Creating new object of PDF file
    //     const fileURL = window.URL.createObjectURL(blob);
    //     // Setting various property values
    //     let alink = document.createElement("a");
    //     alink.href = fileURL;
    //     alink.download = "SamplePDF.pdf";
    //     alink.click();
    //   });
    // });
  };
  return (
    <Stack style={navstyle} bg="black" p={2} color="white">
      <Show below="lg">
        <MdMenu ref={btnRef} onClick={onOpen} fontSize="25px" />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerContent bg="whitesmoke">
            <SimpleGrid
              columns={1}
              align="center"
              justify="space-between"
              id="navbar"
            >
              <Flex
                align="center"
                justify="right"
                gap={9}
                fontWeight="bold"
                flexDirection="column"
              >
                <Link activeClass="active1" smooth spy to="home">
                  Home
                </Link>
                <Link activeClass="active1" smooth spy to="about">
                  About
                </Link>
                <Link activeClass="active1" smooth spy to="skill">
                  Skills
                </Link>
                <Link activeClass="active1" smooth spy to="projects">
                  Project
                </Link>
                <Link activeClass="active1" smooth spy to="contact">
                  Contact
                </Link>
              </Flex>
            </SimpleGrid>
          </DrawerContent>
        </Drawer>
      </Show>
      <Show above="lg">
        <SimpleGrid
          columns={2}
          align="center"
          justify="space-between"
          id="navbar"
        >
          <Stack></Stack>
          <Flex
            columns={5}
            align="center"
            justify="right"
            gap={9}
            fontWeight="bold"
          >
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
            <Link activeClass="active" smooth spy to="skill">
              Skills
            </Link>
            <Link activeClass="active" smooth spy to="projects">
              Project
            </Link>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
            <Button
              // as="link"
              // activeClass="active"
              // href="https://drive.google.com/file/d/1pRULwZCsuw54yPK0-eDQNN0oDaMG3hyj/view"
              // target="_blank"
              onClick={handlepdfclick}
              variant="link"
              // href="src/componants/Assets/Urvashi_Sohaliya_Resume.pdf"
              // download
            >
              Resume
            </Button>
          </Flex>
        </SimpleGrid>
      </Show>
    </Stack>
  );
};

export default Navbar;
