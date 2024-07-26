import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import MenuLinkContainer from "./navbar/MenuLinkContainer";
import MenuToggle from "./navbar/MenuToggle";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Flex sx={sx.container}>
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinkContainer isOpen={isOpen} toggle={toggle} />
		</Flex>
	);
};

const sx = {
	container: {
		as: "nav",
		alignItems: "center",
		justifyContent: "center",
		position: "fixed",
		flexWrap: "wrap",
		w: "100%",
		zIndex: "2",
		mb: "8",
		p: "8",
		background: "background",
		// color: {["black", "black", "primary.700", "primary.700"]},
	},
};

export default Navbar;
