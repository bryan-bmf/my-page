import { Box, Button } from "@chakra-ui/react";

const Navbar = () => {
	const handleScroll = (e: any) => {
		document.getElementById(e.target.value)?.scrollIntoView({ behavior: "smooth" });
	}
	return (
		<Box h="100vh">
			<h1>Navbar</h1>
            <Button value="about" onClick={handleScroll}>About Me</Button>
		</Box>
	);
};

export default Navbar;
