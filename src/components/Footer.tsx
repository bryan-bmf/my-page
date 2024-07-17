import { Box, Center, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import githubdark from "../assets/github-dark.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();

	const year = new Date().getFullYear();

	return (
		<Box sx={sx.footer}>
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
		backgroundColor: "navbar",
		color: "black",
		borderColor: "black",
		borderTop: "1px solid",
		borderStyle: "solid",
		py: 4,
		px: 8,
		position: "fixed",
		bottom: 0,
		width: "100%",
	},
};

export default Footer;
