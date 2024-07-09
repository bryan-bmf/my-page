import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Stack, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import MenuLink from "./MenuLink";

const MenuLinkContainer = ({ isOpen }: any) => {
	const [isLightMode, setIsLightMode] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  // switch to dark mode when light mode button is clicked and vice versa.
  const handleColorMode = () => {
    setIsLightMode(!isLightMode);
    toggleColorMode();
  }

	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "block" }}
			flexBasis={{ base: "100%", md: "auto" }}
		>
			<Stack
				spacing={8}
				align="center"
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				pt={[4, 4, 0, 0]}
			>
				<MenuLink to="About Me">About Me</MenuLink>
				<MenuLink to="Projects">Projects</MenuLink>
				<MenuLink to="Contact Me">Contact Me</MenuLink>
				<MenuLink to="Resume">Resumé</MenuLink>
				<MenuLink to="DarkMode" changeColor={handleColorMode}>{isLightMode ? <SunIcon /> : <MoonIcon />}</MenuLink>
			</Stack>
		</Box>
	);
};

export default MenuLinkContainer;
