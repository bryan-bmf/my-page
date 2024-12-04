import anime from "../assets/anime.gif";
import cpc from "../assets/cpc.gif";
import nba from "../assets/nba.gif";
import vinyl from "../assets/vinyl.gif";

const projects = [
	{
		title: "Anime List",
		description: `React app for users to search for anime series and characters. 
		All series and characters show information about them including a video section with a list of the most popular videos found in YouTube.
		I used React Router to learn how to pass information using query parameters for loading data from page to page.`,
		techStack: ["React", "ChakraUI", "Jikan API", "YouTube API", "Firebase"],
		github: "https://github.com/bryan-bmf/anime-list",
		site: "https://anime-list-360918.web.app/",
		gif: anime,
	},
	{
		title: "Mi Bellonera",
		description: `Web app to catalog, visualize, and maintain a list of my vinyl record collection.
		Vinyl records are stored in a NoSQL database with data pulled from Spotify API and displayed to 
		allow users to listen to albums on the site and view statistics about my record collection.
		I used AWS Lambda and API Gateway to create a serverless architecture for the app, and I also used DynamoDB for storing the data.`,
		techStack: [
			"React",
			"TypeScript",
			"ChakraUI",
			"AWS API Gateway",
			"AWS DynamoDB",
			"AWS Lambda",
			"Spotify API",
			"Nivo Graphs",
		],
		github: "https://github.com/bryan-bmf/my-vinyl-collection",
		site: "https://bit.ly/mibellonera",
		gif: vinyl,
	},
	{
		title: "Clean Plate Club",
		description: `A simple web app to keep track of my favorite recipes with filters to easily find whatever recipe I want to cook.
		I used a PostgreSQL database to store my recipes and a Flask backend to gain more experience with other technologies.`,
		techStack: [
			"React",
			"TypeScript",
			"ChakraUI",
			"Python",
			"Flask",
			"PostgreSQL",
		],
		github: "https://github.com/bryan-bmf/clean-plate-club",
		site: "http://cleanplateclub-website.s3-website.us-east-2.amazonaws.com/",
		gif: cpc,
	},
	{
		title: "NBA Snapshot",
		description: `A React web app that gives you news, schedule, live scores, and general NBA information. Select your favorite team to personalize the page to match your team's colors. All the data is supplied by ESPN's API for the NBA.`,
		techStack: [
			"React",
			"TypeScript",
			"MaterialUI",
			"ESPN API",
		],
		github: "https://github.com/bryan-bmf/nba-snapshot",
		site: "http://nba-snapshot.s3-website.us-east-2.amazonaws.com/",
		gif: nba,
	},
];

export default projects;
