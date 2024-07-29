import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Stack, useColorMode } from "@chakra-ui/react";
import MenuLink from "./MenuLink";

const MenuLinkContainer = ({ isOpen, toggle }: any) => {
	const { colorMode, toggleColorMode } = useColorMode();

	// switch to dark mode when light mode button is clicked and vice versa.
	const handleColorMode = () => {
		toggleColorMode();
	};

	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "block" }}
			flexBasis={{ base: "100%", md: "auto" }}
		>
			<Stack sx={sx.stack} spacing={8} onClick={toggle}>
				<MenuLink to="About">About Me</MenuLink>
				<MenuLink to="Projects">Projects</MenuLink>
				<MenuLink to="Contact">Contact Me</MenuLink>
				<MenuLink to="Resume" resume={true}>Resumé</MenuLink>
				<MenuLink to="DarkMode" changeColor={handleColorMode}>
					{colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
				</MenuLink>
			</Stack>
		</Box>
	);
};

const sx = {
	stack: {
		alignItems: "center",
		justifyContent: ["center", "space-between", "flex-end", "flex-end"],
		flexDirection: ["column", "row", "row", "row"],
		pt: [4, 4, 0, 0],
	},
};

export default MenuLinkContainer;
