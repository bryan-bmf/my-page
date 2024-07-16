import {
	Box,
	Button,
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
				<HStack>
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
				<Textarea placeholder="Write your message..." sx={sx.textArea} />
				<Flex direction="row-reverse">
					<Button>Send Email</Button>
				</Flex>
			</Box>
		</Center>
	);
};

const sx = {
	contact: {
		h: "88vh",
		maxW: "50vw",
		w: "100%"
	},
	input: {
		mb: "4",
	},
	textArea: {
		resize: "none",
		w: "100%",
		h: "200px",
		mb: "4",
	},
	flex: {
		flexDirection: "column",
		alignItems: "baseline",
		w: "100%",
	},
};

export default ContactMe;
