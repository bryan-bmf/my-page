import { Flex } from "@chakra-ui/react";

const NavbarContainer = ({ children }: any) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="center"
			wrap="wrap"
			w="100%"
			mb={8}
			p={8}
			bg={["primary.500", "primary.500", "transparent", "transparent"]}
			color={["black", "black", "primary.700", "primary.700"]}
		>
			{children}
		</Flex>
	);
};

export default NavbarContainer;
