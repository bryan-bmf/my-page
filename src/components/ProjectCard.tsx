import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Link,
	ListItem,
	Stack,
	Text,
	UnorderedList,
	useColorMode
} from "@chakra-ui/react";

const ProjectCard = ({
	title,
	description,
	techStack,
	github,
	site,
	gif,
}: Props) => {

	const { colorMode, toggleColorMode } = useColorMode();
	let gradient = colorMode === "light" ? sx.card : sx.darkGradient;

	let altText = `A gif depicting the ${title} website`;

	return (
		<Card maxW="xs" variant="outline" sx={gradient}>
			<CardBody>
				<Image
					src={gif}
					borderRadius="lg"
					aria-label={altText}
				/>
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text textAlign="left">{description}</Text>
					<Heading size="sm" fontWeight="semibold" textAlign="left">
						Tech Stack
					</Heading>
					<Box textAlign="left">
						<UnorderedList>
							{techStack.map((tech) => (
								<ListItem key={tech}>{tech}</ListItem>
							))}
						</UnorderedList>
					</Box>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter justifyContent="center">
				<ButtonGroup spacing="2">
					<Link role="button" aria-label="view code" href={github} isExternal>
						<Button sx={sx.codeButton}>View Code</Button>
					</Link>
					{site ? (
						<Link role="button" aria-label="view site" href={site} isExternal>
							<Button sx={sx.siteButton}>View Site</Button>
						</Link>
					) : null}
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};

const sx = {
	darkGradient: {
		background: `linear-gradient(#1a202c, #1a202c) padding-box, 
	linear-gradient(135deg, #06f1ea, #eb008b) border-box`,
	},
	codeButton: {
		background: "codeButton",
		_hover: {
            background: "codeButtonHover",
        },
	},
	siteButton: {
		background: "siteButton",
		_hover: {
            background: "siteButtonHover",
        },
	},
	card: {
		boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
	}
};

interface Props {
	title: string;
	description: string;
	techStack: string[];
	github: string;
	site?: string;
	gif: string;
}

export default ProjectCard;
