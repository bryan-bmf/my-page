import { useState } from "react";
import MenuLinkContainer from "./navbar/MenuLinkContainer";
import MenuToggle from "./navbar/MenuToggle";
import NavbarContainer from "./navbar/NavbarContainer";

const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavbarContainer>
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinkContainer isOpen={isOpen} />
		</NavbarContainer>
	);
};

export default Navbar;
