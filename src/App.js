import "./App.css";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about-me" className="nav-item">About Me</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
	  </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
