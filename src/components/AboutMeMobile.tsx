import { Box, Center, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import foto from "../assets/foto.jpg";

const AboutMeMobile = () => {
	return (
		<Center>
			<Box id="About Me"  sx={sx.about}>
				<h1>Hello, welcome to my MOBILE website!</h1>
				<Flex align="center" h="inherit" w="inherit" direction="column">
					<Center w="300px">
						<Image
							borderRadius="full"
							boxSize="200px"
							maxWidth="200px"
							src={foto}
							alt="Bryan Mitchell Flores"
						/>
					</Center>
					<Spacer p="2" />
					<Flex direction="column">
						<Text p="4">
							My name is Bryan Mitchell Flores and I am a software developer.
						</Text>
						<Text>Chakra UI is a modern, accessible, and flexible React UI library.</Text>
						<Text>"The quick brown fox jumps over the lazy dog" is an
							English-language pangram—a sentence that contains all of
							the letters of the English alphabet. Owing to its
							existence, Chakra was created.</Text>
					</Flex>
				</Flex>
			</Box>
		</Center>
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

export default AboutMeMobile;
