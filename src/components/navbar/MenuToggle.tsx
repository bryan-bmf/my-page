import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const MenuToggle = ({ toggle, isOpen }: any) => {
	// show hamburger menu on smaller screens only
	let label = isOpen ? "Close" : "Open";
	return (
		<Box role="button" aria-label={label} display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <HamburgerIcon />}
		</Box>
	);
};

export default MenuToggle;