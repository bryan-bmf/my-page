import { Box, Stack } from "@chakra-ui/react";
import MenuLink from "./MenuLink";

const MenuLinkContainer = ({ isOpen }: any) => {
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
				<MenuLink to="Contact">Contact Me</MenuLink>
				<MenuLink to="Resume">Resumé</MenuLink>
			</Stack>
		</Box>
	);
};

export default MenuLinkContainer;
