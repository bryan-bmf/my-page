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
			zIndex="2"
			mb={8}
			p={8}
			bg="background"
			color={["black", "black", "primary.700", "primary.700"]}
		>
			{children}
		</Flex>
	);
};

export default NavbarContainer;
