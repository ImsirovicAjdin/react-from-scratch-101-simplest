import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import "./index.css"

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Main userName="Mack" num={5} />
        <Sidebar />
      </div>
    </div>
  );
}
