import { Box } from "@chakra-ui/react";

const Projects = () => {
	return (
		<Box id="Projects" sx={sx.projects}>
			<h1>Projects</h1>
		</Box>
	);
};

const sx = {
	projects: {
		// scrollMarginTop: "100px",
		h: "100vh"
	}
}

export default Projects;
