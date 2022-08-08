function App() {

  function thirdExample() {
    console.log('third example')
  }

  const fourthExample = () => console.log('fourth example')

  return (
    <div className="App">
      <div className="firstExample">
        <button onClick={function() {console.log('first example')}}>
          inline anonymous ES5 function event handler
        </button>
      </div>
      <div className="secondExample">
        <button onClick={() => console.log('second example')}>
          inline anonymous ES6 function event handler
        </button>
      </div>
      <div className="thirdExample">
        <button onClick={thirdExample}>
          using a separate function declaration
        </button>
      </div>
      <div className="fourthExample"> 
            <button onClick={fourthExample}> 
                using a separate function expression 
            </button> 
        </div>
    </div>
  );
}

export default App;
