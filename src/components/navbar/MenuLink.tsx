import { Link, Text } from "@chakra-ui/react";

const MenuLink = ({ children, to, changeColor }: any) => {
	const handleClick = (e: any) => {
		// if not dark mode button, scroll to corresponding section.
		// else switch color mode.
		if(e.target.title)
			document.getElementById(e.target.title)!.scrollIntoView({ behavior: "smooth" });
		else changeColor();
	};

	return (
		<Link>
			<Text display="block" color="black" title={to} onClick={handleClick}>
				{children}
			</Text>
		</Link>
	);
};

export default MenuLink;
