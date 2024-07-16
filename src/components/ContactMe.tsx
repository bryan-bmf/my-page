import {
	Box,
	Center,
	Flex,
	HStack,
	Input,
	Spacer,
	Text,
	Textarea,
} from "@chakra-ui/react";

const ContactMe = () => {
	return (
		<Center>
			<Box id="Contact Me" sx={sx.contact}>
				<h1>Contact Me</h1>
				<HStack w="inherit">
					<Flex sx={sx.flex}>
						<Text mb="2">Name:</Text>
						<Input
							placeholder="Enter your full name"
							type="text"
							sx={sx.input}
						/>
					</Flex>
					<Spacer />
					<Flex sx={sx.flex}>
						<Text mb="2">Email:</Text>
						<Input
							placeholder="Enter your email"
							type="email"
							sx={sx.input}
						/>
					</Flex>
				</HStack>
				<Textarea
					placeholder="Write your message"
					sx={sx.textArea}
				/>
			</Box>
		</Center>
	);
};

const sx = {
	contact: {
		h: "88vh",
		maxW: "75vw",
	},
	input: {
		w: "20rem",
		mb: "4",
	},
	textArea: {
		resize: "none",
		size: "md",
		w: "665px",
	},
	flex: {
		flexDirection: "column",
		alignItems: "baseline",
	},
};

export default ContactMe;
