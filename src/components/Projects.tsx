import { Box, Center, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import projects from "../seed/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<>
			<Flex justifyContent="center">
				<Heading sx={sx.header}>
					Projects
				</Heading>
			</Flex>
			<Center>
				<Box id="Projects" sx={sx.projects}>
					<SimpleGrid columns={[1, 1, 2, 3]} spacing="60px">
						{projects.map((project) => (
							<ProjectCard
								key={project.title}
								title={project.title}
								description={project.description}
								techStack={project.techStack}
								github={project.github}
								site={project.site}
								gif={project.gif}
							/>
						))}
					</SimpleGrid>
				</Box>
			</Center>
		</>
	);
};

const sx = {
	projects: {
		maxW: "88vw",
		mb: "200"
	},
	header: {
		textAlign: "left",
		w: "88vw",
		mb: "10",
	}
};

export default Projects;
