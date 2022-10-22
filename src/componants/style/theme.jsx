import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    pink: "#BD4B4B",
    gray: "#919291",
    lightgray: "#EEEEEE",
    lightpink: "#EFB7B7",
  },
  sizes: {
    basic: "25px",
  },
});
export const arrow = {
  height: "13px",
  width: "13px",
  position: "relative",
  left: "9%",
  top: "-7px",
  transform: "rotate(45deg)",
};
