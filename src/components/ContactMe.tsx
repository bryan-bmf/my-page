import { Box } from "@chakra-ui/react";

const ContactMe = () => {
    return (
		<Box id="Contact Me" sx={sx.contact}>
			<h1>Contact Me</h1>
		</Box>
	);
};

const sx = {
	contact: {
		// scrollMarginTop: "100px",
		h: "88vh"
	}
}

export default ContactMe;