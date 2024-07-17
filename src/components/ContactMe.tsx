import {
	Box,
	Button,
	Center,
	Heading
} from "@chakra-ui/react";
import { useState } from "react";

const ContactMe = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (event: any) => {
		if (event.target.name === "name") {
			setName(event.target.value);
		} else if (event.target.name === "email") {
			setEmail(event.target.value);
		} else if (event.target.name === "message") {
			setMessage(event.target.value);
		}
	};

	return (
		<Center>
			<Box id="Contact Me" sx={sx.contact}>
				<Heading sx={sx.header}>Stay in touch!</Heading>
				<Button>
						<a
							href="mailto:bryan.mitchellflores@gmail.com"
							target="_blank"
						>
							Contact Me
						</a>
					</Button>
			</Box>
		</Center>
	);
};

const sx = {
	contact: {
		h: "88vh",
		maxW: "50vw",
		w: "100%",
	},
	header: {
		mb: "20"
	}
};

export default ContactMe;
