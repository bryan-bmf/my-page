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
				<Box sx={sx.container} scrollMarginTop="100px">
					<Center>
						<Box id="About" sx={sx.about}>
							<Flex sx={sx.content}>
								<Box sx={sx.image}>
									<Image
										borderRadius="full"
										boxSize="200px"
										maxWidth="200px"
										src={foto}
										alt="Bryan Mitchell Flores"
									/>
								</Box>
								<Spacer />
								<Flex sx={sx.textContainer}>
									<Text sx={sx.text}>
										Hi there! My name is Bryan Mitchell Flores and I
										am a Software Engineer currently living in
										Washington, DC.
									</Text>
									<Text sx={sx.text}>
										I focus on creating websites with React. I enjoy
										making projects that interest me and find useful
										in my life. Each time, I try to use something
										different to learn more about what other
										technologies are out there.
									</Text>
									<Text sx={sx.text}>
										Outside of coding, I also enjoy playing video
										games, rock climbing, crate digging and trying out
										new recipes in the kitchen. I'm always looking for
										new opportunities to learn and grow. Thank you for
										visiting my website!
									</Text>
								</Flex>
							</Flex>
						</Box>
					</Center>
				</Box>
			)}
		</>
	);
};

const sx = {
	container: {
		mb: "20",
		scrollMarginTop: "100px",
	},
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
		fontSize: "md",
	},
	image: {
		w: "300px",
		p: "4",
	},
	content: {
		alignItems: "center",
		h: "inherit",
		w: "inherit",
	},
	textContainer: {
		flexDirection: "column",
		p: "4",
	},
};

export default AboutMe;
