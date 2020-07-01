import { theme } from "@chakra-ui/core";
import { ThemeConsumer } from "styled-components";

const AppTheme = {
  ...theme,
  fonts: {
    heading: '""Nunito"", sans-serif',
    body: '"Nunito", sans-serif',
  },
  fontSizes: {
      ...theme.fontSizes,
  },
  zIndices: {
    ...theme.zIndices,
    modal: 99999,
    overlay: 99998,
  },
  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      400: "#1E9ED2",
      600:'rgba(38,81,130,1)',
      700: "rgba(9,47,75,1)",
    },
    // orange:{...theme.color.orange,
    //   varientcolor:"rgba(235,167,31,1)"
    // }
    // ,
    custom: {
    100: "red",
    },
    gray: {
      ...theme.colors.gray,
      600: "#343434"
    }
  },
};

export default AppTheme;
