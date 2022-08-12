# Instructions

## Task

1. You are using the code from the lesson item titled *The Navbar*. Your goal is to add another link to the existing code. This link should show a brand new component, named Contact. So, add a new file, `Contact.js`, to the root of the `src` folder. 
2. Inside the `Contact.js` file, add an ES5 function, named `Contact`. The the `export default Contact` after the `Contact` function's closing curly brace.
3. Inside the body of the `Contact` function, add a return statement with the following code: `<h1>Contact me on this page.</h1>`.
4. Inside the App.js file, import the newly-built Contact component.
5. Inside the App.js file's App function's return statement, locate the `nav` element, and inside of it, add another `<Link>` element, with the `to` attribute pointing to `contact`, the `className` set to `"nav-item"`, and the the text inside the Link element's opening and closing tags set to `Contact`.
6. Inside the `Routes` element, add a third route, with the `path` attribute pointing to `"/contact"`, and the `element` attribute set to `{<Contact />}`.
7. Save all your changes and view your updates in the served app. You should have three links in the top navbar, and the third link should be `Contact`. Once you click the link, the sentence "Contact me on this page" should replace whatever other content was under the navbar previously.

## Solution

Here is the `Contact.js` file:
```jsx
function Contact() {
    return (
        <h1>Contact me on this page.</h1>
    )
}

export default Contact
```

Here is the `App.js` file:
```jsx
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
```