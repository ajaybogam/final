import { theme } from "@chakra-ui/core";

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
        "blue" : {
            ...theme.colors.blue,
            700: "rgba(9,47,75,1)"
        },
        custom: {
            100: 'red'
        }

        
    }
}

export default AppTheme;