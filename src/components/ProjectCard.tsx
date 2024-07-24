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
	useColorMode,
} from "@chakra-ui/react";
import anime from "../assets/anime.gif";
import cpc from "../assets/cpc.gif";
import vinyl from "../assets/vinyl.gif";

const ProjectCard = ({
	title,
	description,
	techStack,
	github,
	site,
	gif,
}: Props) => {
	let gifSrc = "";
	if (gif === "anime") gifSrc = anime;
	else if (gif === "vinyl") gifSrc = vinyl;
	else gifSrc = cpc;

	const { colorMode, toggleColorMode } = useColorMode();
	let gradient = colorMode === "light" ? undefined : sx.darkGradient;

	return (
		<Card maxW="xs" variant="outline" sx={gradient}>
			<CardBody>
				<Image
					src={gifSrc}
					borderRadius="lg"
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
					<Link href={github} isExternal>
						<Button>View Code</Button>
					</Link>
					{site ? (
						<Link href={site} isExternal>
							<Button>View Site</Button>
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
