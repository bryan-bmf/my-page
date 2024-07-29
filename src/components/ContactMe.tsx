import { Box, Button, Center, Heading } from "@chakra-ui/react";

const ContactMe = () => {
	return (
		<Center>
			<Box id="Contact" sx={sx.contact}>
				<Heading sx={sx.header}>Stay in touch!</Heading>
				<Button role="button" sx={sx.button}>
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
	button: {
		background: "contactButton",
		_hover: {
            background: "contactButtonHover",
        },
	},
};

export default ContactMe;
