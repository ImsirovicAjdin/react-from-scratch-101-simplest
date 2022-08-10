import "./App.css";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <nav className="nav">
        <a href="#" className="nav-item">Homepage</a>
        <a href="#" className="nav-item">About Me</a>
      </nav>
      <Homepage />
      <AboutMe /> */}
	  
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about-me" className="nav-item">About Me</Link>
	  </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
