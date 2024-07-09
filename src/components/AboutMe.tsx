import { Box } from "@chakra-ui/react";

const AboutMe = () => {
	return (
		<Box id="About Me" sx={sx.about}>
			<h1>
				About Me
			</h1>
		</Box>
	);
};

const sx = {
	about: {
		h: "88vh"
	}
}

export default AboutMe;
