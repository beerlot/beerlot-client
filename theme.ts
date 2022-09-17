import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FDF9EA",
      },
    },
  },

  colors: {
    White: {
      100: "#FFFFFF",
      200: "#FDF9EA",
    },
    Black: "#000000",
    Orange: {
      100: "#FEA801",
      200: "#FF6B00",
    },
    Blue: {
      100: "#52D5F2",
    },
    Yellow: {
      100: "rgba(255, 229, 128, 0.8)",
      200: "#FAD12B",
    },
    Gray: {
      100: "rgba(97, 100, 107, 0.5)",
      200: "#61646B",
    },
  },
  textStyles: {},
});
