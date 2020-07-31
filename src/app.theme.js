import { theme } from "@chakra-ui/core";

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
      600: 'rgba(38,81,130,1)',
      700: "rgba(9,47,75,1)",
    },
    orange: {
      ...theme.colors.orange,
      500: "#EBA71F",
      600: "#EBA71F",
      700:"#EBA71F"
    },
    red: {
      ...theme.colors.red,
      300: "#F3726A"
    },
    gray: {
      ...theme.colors.gray,
      600: "#343434"
    }
  },
};

export default AppTheme;
