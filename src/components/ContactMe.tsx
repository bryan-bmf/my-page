import { Box, Button, Center, Heading } from "@chakra-ui/react";

const ContactMe = () => {
	return (
		<Center>
			<Box id="Contact Me" sx={sx.contact}>
				<Heading sx={sx.header}>Stay in touch!</Heading>
				<Button>
					<a href="mailto:bryan.mitchellflores@gmail.com" target="_blank">
						Contact Me
					</a>
				</Button>
			</Box>
		</Center>
	);
};

const sx = {
	contact: {
		h: "100vh",
		maxW: "50vw",
		// h: "100%",
	},
	header: {
		mb: "20",
	},
};

export default ContactMe;
