import { Link, Text } from "@chakra-ui/react";

const MenuLink = ({ children, to }: any) => {
	const handleScroll = (e: any) => {
		document.getElementById(e.target.title)!.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<Link>
			<Text display="block" color="black" title={to} onClick={handleScroll}>
				{children}
			</Text>
		</Link>
	);
};

export default MenuLink;
