// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const colors = {
	colors: {
		lightColors: {
			primary: "#4d97cc",
			primary20: "#80b5db",
			secondary: "#F58426",
			secondary20: "#f79d51",
			detail: "#97CC4D",
			detail20: "#acd671",
		},
		darkColors: {
			primary: "#06f1ea",
			primary20: "#05c1bb",
			primary40: "#04918c", 
			secondary: "#eb008b",
			secondary20: "#bc006f",
			secondary40: "#8d0053", 
            detail: "#8f00fe",
			detail20: "#7200cb",

		},
		text: {
			white: "#ffffff",
			black: "#000000",
		},
		navbar: {
			default: "#1a202c",
		},
		backgroundTheme: {
			light: "#f9f9f9",
			dark: "#1a202c",
		}
	},
	semanticTokens: {
		colors: {
			codeButton: {
				default: "lightColors.primary",
				_dark: "darkColors.primary20",
			},
			codeButtonHover: {
				default: "lightColors.primary20",
				_dark: "darkColors.primary40",
			},
			siteButton: {
				default: "lightColors.secondary",
				_dark: "darkColors.secondary20",
			},
			siteButtonHover: {
				default: "lightColors.secondary20",
				_dark: "darkColors.secondary40",
			},
			contactButton: {
				default: "lightColors.detail",
				_dark: "darkColors.detail",
			},
			contactButtonHover: {
				default: "lightColors.detail20",
				_dark: "darkColors.detail20",
			},
			text: {
				default: "text.black",
				_dark: "text.white",
			},
			background: {
				default: "backgroundTheme.light",
				_dark: "backgroundTheme.dark",
			},
		},
	},
};

// 3. extend the theme
const theme = extendTheme({ config, ...colors });

export default theme;
