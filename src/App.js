// lesson SharePoint:
// https://sureskillshq.sharepoint.com/:w:/s/CourseraMetaProgrammes/EbWxxHGwsQlBgd-TJK7encQB4J8LTc2wX5Zr07nPL-xvMw?e=zgrSOq

const bool = false; 
const firstVal = 10; 
const secondVal = 2; 

function Example(props) {
  return (
    <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
  )
}

// first example (commented-out code)
// export default function App() { 
// 	return ( 
// 		<div className="App"> 
// 			<Example toggleBoolean={!bool} /> 
// 			<button>{Math.random() > 0.5 ? firstVal * secondVal : firstVal / secondVal}</button> 
// 		</div> 
// 	) 
// }

// second example (extracted the ternary into a separate function)
function randomCalc() {
  return Math.random() > 0.5 ? firstVal * secondVal : firstVal / secondVal
}


export default function App() { 
	return ( 
		<div className="App"> 
			<Example toggleBoolean={!bool} /> 
			<button>{randomCalc()}</button> 
		</div> 
	) 
}