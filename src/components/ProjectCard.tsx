import {
    Card,
    CardBody,
    Heading,
    Image,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from "@chakra-ui/react";

const ProjectCard = ({ title, description, techStack }: Props) => {
	return (
		<Card maxW="xs" variant="outline" zIndex="-1">
			<CardBody>
				<Image
					src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
					alt="Green double couch with wooden legs"
					borderRadius="lg"
				/>
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text textAlign="left">{description}</Text>
					<Text textAlign="left">
						{techStack.map((tech) => (
							<UnorderedList>
								<ListItem>{tech}</ListItem>
							</UnorderedList>
						))}
					</Text>
				</Stack>
			</CardBody>
		</Card>
	);
};

interface Props {
	title: string;
	description: string;
	techStack: string[];
}

export default ProjectCard;
