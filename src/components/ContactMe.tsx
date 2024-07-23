import { Box, Button, Center, Heading } from "@chakra-ui/react";

const ContactMe = () => {
	return (
		<Center>
			<Box id="Contact" sx={sx.contact}>
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
		maxW: "50vw",
		h: "40vh",
	},
	header: {
		mb: "20",
	},
};

export default ContactMe;
