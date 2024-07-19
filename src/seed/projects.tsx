const projects = [
	{
		title: "Anime List",
		description: `A React App where users can search for anime series and characters. 
		All series and characters will show information pertaining to them including a video section with a list of the most popular videos found in YouTube.
		I used React Router to learn how to pass information through query parameters to load the correct information passing from page to page.`,
		techStack: ["React", "ChakraUI", "Jikan API", "YouTube API", "Firebase"],
	},
	{
		title: "Mi Bellonera",
		description: `A web app to catalog, visualize, and maintain a list of my vinyl record collection.
		Vinyl records are stored in a NoSQL database with data pulled from Spotify API and displayed to 
		allow users to listen to albums on the site and view statistics about the record collection.
		I used AWS Lambda and API Gateway to create a serverless architecture for the app, and I also used DynamoDB for storing the data.`,
		techStack: ["React", "TypeScript", "ChakraUI", "AWS API Gateway", "AWS DynamoDB", "AWS Lambda", "Spotify API", "Nivo Graphs"],
	},
	{
		title: "Clean Plate Club",
		description: `A simple web app to keep my favorite recipes. 
		Implemented different filters to easily find whatever recipe you want to cook.
		I used a PostgreSQL database to store my recipes and a Flask backend to gain more experience with other technologies.`,
		techStack: ["React", "TypeScript", "ChakraUI", "Python", "Flask", "PostgreSQL"],
	},
];

export default projects;
