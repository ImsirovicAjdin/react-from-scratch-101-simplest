import React from "react";

function App() {

  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1(e) {
    console.log(e, e.target.currentSrc);
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  };

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  };

  function handler(param) {
    if (param.paused) {
      param.play();
    } else {
      param.pause();
    }
  }

  return (
    <div>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
      <button onClick={() => handler(bird1)}>Caspian Tern 1 X</button>
      <button onClick={() => handler(bird2)}>Caspian Tern 2 X</button>
    </div>
  );
}

export default App;