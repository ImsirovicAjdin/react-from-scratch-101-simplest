import React from "react";

export default function App() {

  const audio1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const audio2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );


  const start1 = () => {
    audio1.play();
  };

  const start2 = () => {
    audio2.play();
  }

  return (
    <div>
      <button onClick={start1}>Caspian Tern 1</button>
      <button onClick={start2}>Caspian Tern 2</button>
    </div>
  );
}
