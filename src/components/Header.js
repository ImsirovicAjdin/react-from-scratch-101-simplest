import { bgWheat, h_70, border} from "../styles"

function Header() {
    return (
        <header style={{...bgWheat, ...h_70, ...border}}>
            <h1>Header content here</h1>
        </header>
    )
}

export default Header;