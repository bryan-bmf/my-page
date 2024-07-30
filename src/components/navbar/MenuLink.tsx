import { Link, Text } from "@chakra-ui/react";

const MenuLink = ({ children, to, changeColor, resume }: Props) => {
	const handleClick = (e: any) => {
		// if not dark mode button, scroll to corresponding section.
		// else switch color mode.
		if(e.target.title && e.target.title !== null && e.target.title !== "DarkMode")
			document.getElementById(e.target.title)!.scrollIntoView({ behavior: "smooth" });
		else changeColor();
	};

	const resumeLink = (
		<Link href="https://bit.ly/bryanmitchellfloresresume" color="text" isExternal>
			<Text display="block" title={to}>
				{children}
			</Text>
		</Link>
	)

	return (
		resume ? resumeLink : <Link aria-label={children} color="text"><Text display="block" title={to} onClick={handleClick}>{children}</Text></Link>
	)
		
};	

interface Props {
	children: any;
	to: string;
	changeColor?: any;
	resume?: boolean;
}

export default MenuLink;
