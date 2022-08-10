import "./App.css";
import rooftops from "./assets/images/central-park.jpg";

function App() {
  const randomImgUrl = "https://picsum.photos/450/265";
  return (
    <div className="App">
      <h1>
        Task: add three images with some styling.
      </h1>
      <img 
        height={200}
        src={rooftops}
        alt="Some rooftops close to Central Park"
      />
      <img
        height={200}
        src={require("./assets/images/mountain-top.jpg")}
        alt="Mountain top"
      />
      <img
        height={200}
        src={randomImgUrl}
        alt="Random img"
      />      
    </div>
  );
}

export default App;
