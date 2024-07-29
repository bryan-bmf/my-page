import { Box, Center, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import githubdark from "../assets/github-dark.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();
	let gradient = colorMode === "light" ? sx.lightGradient : sx.darkGradient;

	const year = new Date().getFullYear();

	return (
		<Box sx={{...sx.footer, ...gradient}}>
			<Text mb="2" color="text">Built by Bryan - {year}</Text>
			<Center>
				<HStack>
					<a href="https://github.com/bryan-bmf" target="_blank">{colorMode === 'light' ? <Image src={github} boxSize="20px" /> : <Image src={githubdark} boxSize="20px" />}</a>
					<a href="https://www.linkedin.com/in/bryanmitchellflores/" target="_blank"><Image src={linkedin} boxSize="20px" /></a>
				</HStack>
			</Center>
		</Box>
	);
};

const sx = {
	footer: {
		borderTop: "1px solid transparent",
		py: 4,
		px: 8,
		position: "relative",
		bottom: 0,
		width: "100%",
		background: "background"
	},
	lightGradient: {
		background: `linear-gradient(#f9f9f9, #f9f9f9) padding-box, 
	linear-gradient(135deg, black, black) border-box`,
	},
	darkGradient: {
		background: `linear-gradient(#1a202c, #1a202c) padding-box, 
	linear-gradient(135deg, #06f1ea, #eb008b) border-box`,
	},
};

export default Footer;
