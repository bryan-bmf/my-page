import { Flex } from "@chakra-ui/react";

const NavbarContainer = ({ children }: any) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="center"
      		position="fixed"
			wrap="wrap"
			w="100%"
			mb={8}
			p={8}
			bg={["navbar", "primary.500", "transparent", "navbar"]}
			color={["black", "black", "primary.700", "primary.700"]}
		>
			{children}
		</Flex>
	);
};

export default NavbarContainer;
