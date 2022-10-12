import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        p: 0,
        m: 0,
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#ffffff",
      },
    },
  },
  colors: {
    White: {
      100: "#FFFFFF",
      200: "#FDF9EA",
    },
    Black: "#000000",
    // 색깔 확인할 것
    Orange: {
      100: "#FF6B00",
      200: "#FEA801",
      300: "rgba(255, 107, 0, 0.3)",
    },
    orange: {
      600: "#FF6B00",
    },
    Blue: {
      100: "#52D5F2",
    },
    Yellow: {
      50: "rgba(255, 229, 128, 0.3)",
      100: "rgba(255, 229, 128, 0.8)",
      200: "#FAD12B",
    },
    Gray: {
      100: "rgba(97, 100, 107, 0.5)",
      101: "#F6F6F6",
      200: "#DDDDDD",
      300: "#61646B",
    },
  },
  textStyles: {
    h1: {
      fontFmily: "Roboto",
      fontWeight: "700",
      fontSize: "22px",
      letterSpacing: "0.01px",
    },
    h2: {
      fontFmily: "Roboto",
      fontWeight: "500",
      fontSize: "16px",
      letterSpacing: "0.01px",
    },
    h2_bold: {
      fontFmily: "Roboto",
      fontWeight: "700",
      fontSize: "16px",
      letterSpacing: "0.01px",
    },
    h3: {
      fontFmily: "Roboto",
      fontWeight: "500",
      fontSize: "12px",
      letterSpacing: "0.01px",
    },
    h3_bold: {
      fontFmily: "Roboto",
      fontWeight: "700",
      fontSize: "12px",
      letterSpacing: "0.01px",
    },
    body: {
      fontFmily: "Roboto",
      fontWeight: "400",
      fontSize: "15px",
      letterSpacing: "0.01px",
    },
  },
});
