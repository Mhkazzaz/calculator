import './App.scss';

function App() {
  return (
    <>
      <div id="container">
        <div id="calculator">
          <div id="result">0</div>
          <button id="ac">AC</button>
          <button className="operations" id="divide">/</button>
          <button className="operations" id="multiply">x</button>
          <button className="numbers" id="7">7</button>
          <button className="numbers" id="8">8</button>
          <button className="numbers" id="9">9</button>
          <button className="operations" id="subtract">-</button>
          <button className="numbers" id="4">4</button>
          <button className="numbers" id="5">5</button>
          <button className="numbers" id="6">6</button>
          <button className="operations" id="add">+</button>
          <button className="numbers" id="1">1</button>
          <button className="numbers" id="2">2</button>
          <button className="numbers" id="3">3</button>
          <button id="equal">=</button>
          <button className="numbers" id="zero">0</button>
          <button className="numbers" id="point">.</button>
        </div>
      </div>
    </>
  );
}

export default App;
