import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import projects from "../seed/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<Center>
			<Box id="Projects" sx={sx.projects}>
				<h1>Projects</h1>
				<SimpleGrid columns={[1, 1, 2, 3]} spacing="60px">
					{projects.map((project) => (
						<ProjectCard
							key={project.title}
							title={project.title}
							description={project.description}
							techStack={project.techStack}
						/>
					))}
				</SimpleGrid>
			</Box>
		</Center>
	);
};

const sx = {
	projects: {
		// maxH: "88vh",
		h: "100%",
		maxW: "88vw",
	},
};

export default Projects;
