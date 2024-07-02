import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {

	return (
		<div className="App">
			<Navbar />
			<AboutMe />
			<Projects />
			<ContactMe />
		</div>
	);
}

export default App;
