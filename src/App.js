import logo from "./coursera-github-account-avatar-image.png";

function Logo(props) {
  const userPic = <img src={logo} alt="User avatar" />
  return userPic;
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
