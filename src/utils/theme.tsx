// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
	initialColorMode: "system",
	useSystemColorMode: false,
};

const colors = {
	colors: {
		lightColors: {
			primary: "#f90e15",
			secondary: "#70ff01",
			detail: "#14ff74",
		},
		darkColors: {
			// Define your dark colors here
			primary: "#06f1ea",
			secondary: "#8f00fe",
			detail: "#eb008b",
		},
    text: {
      white: "#ffffff",
      black: "#000000",
    }
	},
	semanticTokens: {
		colors: {
			primary: {
				default: "lightColors.primary",
				_dark: "darkColors.primary",
			},
      secondary: {
				default: "lightColors.secondary",
				_dark: "darkColors.secondary",
			},
      detail: {
				default: "lightColors.detail",
				_dark: "darkColors.detail",
			},
      text: {
        default: "text.black",
        _dark: "text.white",
      },
		},
	},
};

// #06f1ea	#f90e15
// #8f00fe	#70ff01
// #eb008b	#14ff74

// 3. extend the theme
const theme = extendTheme({ config, ...colors });

export default theme;
