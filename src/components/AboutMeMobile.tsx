import { Box, Center, Image, Spacer, Text } from "@chakra-ui/react";
import foto from "../assets/foto.jpg";

const AboutMeMobile = () => {
	return (
		<Box mb="20">
			<Center>
				<Box id="About Me" sx={sx.about}>
					<Box sx={sx.content}>
						<Center sx={sx.image}>
							<Image
								borderRadius="full"
								boxSize="200px"
								maxWidth="200px"
								src={foto}
								alt="Bryan Mitchell Flores"
							/>
						</Center>
						<Spacer p="2" />
						<Box sx={sx.textContainer}>
							<Text sx={sx.text}>
								Hi there! My name is Bryan Mitchell Flores and I am a
								Software Engineer currently living in Washington, DC.
							</Text>
							<Text sx={sx.text}>
								I focus on creating websites with React. I enjoy making
								projects that interest me and find useful in my life.
								Each time, I try to use something different to learn
								more about what other technologies are out there.
							</Text>
							<Text sx={sx.text}>
								Outside of coding, I also enjoy playing video games,
								rock climbing, crate digging and trying out new recipes
								in the kitchen. I'm always looking for new opportunities
								to learn and grow. Thank you for visiting my website!
							</Text>
						</Box>
					</Box>
				</Box>
			</Center>
		</Box>
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
	text: {
		p: "2",
		textAlign: "left",
	},
	image: {
		w: "300px",
		p: "2",
	},
	textContainer: {
		flexDirection: "column",
		p: "4",
	},
	content: {
		display: "flex",
		alignItems: "center",
		h: "inherit",
		w: "inherit",
		flexDirection: "column",
	},
};

export default AboutMeMobile;
