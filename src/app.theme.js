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
<<<<<<< HEAD
  },
};
=======
    zIndices: {
        ...theme.zIndices,
        modal: 99999,
        overlay: 99998,
    },
    colors: {
        ...theme.colors,
        "blue" : {
            ...theme.colors.blue,
            700: "rgba(9,47,75,1)"
        },
        custom: {
            100: 'red'
        }

        
    }
}
>>>>>>> 8ff8c7e95d85c0e49747eeed8c579552c9d83e1e

export default AppTheme;
