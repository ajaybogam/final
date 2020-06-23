import { theme } from "@chakra-ui/core";
import { ThemeConsumer } from "styled-components";

const AppTheme = {
  ...theme,
  fonts: {
    heading: '""Nunito"", sans-serif',
    body: '"Nunito", sans-serif',
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
    },
  },
};

export default AppTheme;
