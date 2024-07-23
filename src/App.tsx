import { Box } from "@chakra-ui/react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Box pt="84px">
				<AboutMe />
				<Projects />
				<ContactMe />
			</Box>
			<Footer />
		</div>
	);
}

export default App;
