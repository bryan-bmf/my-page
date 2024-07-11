import {
	Box,
	Center,
	Flex,
	Image,
	Spacer,
	Text,
	useBreakpoint,
} from "@chakra-ui/react";
import foto from "../assets/foto.jpg";
import AboutMeMobile from "./AboutMeMobile";

const AboutMe = () => {
	// check if mobile
	const breakpoint = useBreakpoint();
	let mobile = breakpoint === "base" ? true : false;

	return (
		<>
			{mobile ? (
				<AboutMeMobile />
			) : (
				<Center>
					<Box id="About Me" sx={sx.about}>
						<h1>Hello, welcome to my website!</h1>
						<Flex align="center" h="inherit" w="inherit">
							<Box w="300px" p="4">
								<Image
									borderRadius="full"
									boxSize="200px"
									maxWidth="200px"
									src={foto}
									alt="Bryan Mitchell Flores"
								/>
							</Box>
							<Spacer />
							<Flex direction="column" p="4">
								<Text p="4">
									My name is Bryan Mitchell Flores and I am a software
									developer.
								</Text>
								<Text>
									Chakra UI is a modern, accessible, and flexible React
									UI library.
								</Text>
								<Text>
									"The quick brown fox jumps over the lazy dog" is an
									English-language pangram—a sentence that contains all
									of the letters of the English alphabet. Owing to its
									existence, Chakra was created.
								</Text>
							</Flex>
						</Flex>
					</Box>
				</Center>
			)}
		</>
	);
};

const sx = {
	about: {
		maxW: "88vw",
		p: "4",
		mt: "4",
		border: "1px solid black",
		borderRadius: "8px",
		boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
	},
};

export default AboutMe;
