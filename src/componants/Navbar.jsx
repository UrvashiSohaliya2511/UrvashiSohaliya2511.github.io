import React, { useEffect, useState } from "react";
import { IoIosRose } from "react-icons/io";
import { SimpleGrid, Flex, Stack } from "@chakra-ui/react";
import { Link } from "react-scroll";
import "../componants/style/nav.css";
const Navbar = () => {
  const [styletop, setstyletop] = useState("0");
  const navstyle = {
    position: "fixed",
    top: styletop,
    display: "block",
    transition: "top 0.3s",
    width: "100%",
  };
  const prevPos = window.pageYOffset;
  window.onscroll = () => {
    const currPos = window.pageYOffset;

    if (prevPos >= currPos) {
      setstyletop("0");
    } else {
      setstyletop("-40px");
    }
  };

  return (
    <Stack style={navstyle} bg="transperent" p={2} color="#4e4e50">
      <SimpleGrid
        columns={2}
        align="center"
        justify="space-between"
        id="navbar"
      >
        <IoIosRose fontSize="34px" color="#c3073f" />
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
        </Flex>
      </SimpleGrid>
    </Stack>
  );
};

export default Navbar;
