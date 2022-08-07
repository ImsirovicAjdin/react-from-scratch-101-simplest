import { mainWidth, bgYellowgreen, border } from "../styles"

function Main() {
    return (
        <main style={{...mainWidth, ...bgYellowgreen, ...border}}>
            <h2>Main content here</h2>
        </main>
    )
}

export default Main;