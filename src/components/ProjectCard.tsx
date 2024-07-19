import {
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

	return (
		<Card maxW="xs" variant="outline">
			<CardBody>
				<Image
					src={gifSrc}
					alt="Green double couch with wooden legs"
					borderRadius="lg"
				/>
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text textAlign="left">{description}</Text>
					<Heading size="sm" fontWeight="semibold" textAlign="left">
						Tech Stack
					</Heading>
					<Text textAlign="left">
						{techStack.map((tech) => (
							<UnorderedList>
								<ListItem>{tech}</ListItem>
							</UnorderedList>
						))}
					</Text>
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

interface Props {
	title: string;
	description: string;
	techStack: string[];
	github: string;
	site?: string;
	gif: string;
}

export default ProjectCard;
