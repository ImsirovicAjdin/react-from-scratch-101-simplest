function Main(props) {
    return (
        <main className="main">
            <h1>Hello, {props.userName}</h1>
            <h2>You are in position no. {props.num}</h2>
        </main>
    )
}

export default Main;