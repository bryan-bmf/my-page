import { Box, Center, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import projects from "../seed/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<>
			<Flex justifyContent="center">
				<Heading textAlign="left" w="88vw">
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
		// maxH: "88vh",
		// h: "100%",
		maxW: "88vw",
	},
};

export default Projects;
