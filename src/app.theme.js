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
    }
}

export default AppTheme;