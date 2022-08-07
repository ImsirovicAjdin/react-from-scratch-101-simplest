import { bgAzure, asideWidth, ml_10, border } from "../styles"

function Sidebar() {
    return (
        <aside style={{...bgAzure, ...asideWidth, ...ml_10, ...border}}>
            <h2>Sidebar content here</h2>
        </aside>
    )
}

export default Sidebar;