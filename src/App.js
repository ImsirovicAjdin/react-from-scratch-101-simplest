import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import "./index.css"
import { flex, col, spaceBetween, m_20, fs16, row, customMinH, mt_10 } from "./styles"

export default function App() {
  return (
    <div style={{...flex, ...col, ...spaceBetween, ...m_20, ...fs16}}>
      <Header />
      <div style={{...flex, ...row, ...customMinH, ...mt_10}}>
        <Main userName="Mack" num={5} />
        <Sidebar />
      </div>
    </div>
  );
}
