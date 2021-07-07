import './App.scss';
import { useState } from 'react'

function App() {

  const [numbers, setNumbers] = useState(0)
  const result = document.getElementById("result")
  const formula = document.getElementById("formula")

  if (formula)
    formula.style.opacity = 1

  const addNumbers = (e) => {

    if (numbers.length === 22) {
    result.innerHTML = ("DIGIT LIMIT MET")
      setTimeout(function () {
        result.innerHTML = numbers
      }, 500);
    }

    else if (numbers === 0 && e.target.innerHTML === "0")
    setNumbers(0)
    
    else if (numbers === 0 && e.target.innerHTML === ".")
    setNumbers(0 + ".")
    
    else if (numbers === 0)
    setNumbers(e.target.innerHTML)
    
    else if (e.target.innerHTML === '.') {
      let numbersArr = [];
      for (let i = 0; i < numbers.length; i++) {
        numbersArr.push(numbers[i])
      }
      const decimalPoint = (num) => num  === '.';
      if (!numbersArr.some(decimalPoint))
      setNumbers(numbers + String(e.target.innerHTML))
    }
    
    else
    setNumbers(numbers + String(e.target.innerHTML))
  }

  const deleteNumbers = () => {
    setNumbers(0)
  }
  
  
  return (
    <>
      <div id="container">
        <div id="calculator">
          <div id="operations-wrapper">
            <div id="formula">{numbers}</div>
            <div id="result">{numbers}</div>
          </div>
          <div id="button-wrapper">
          <button onClick={deleteNumbers} id="ac">AC</button>
          <button className="operations" id="divide">/</button>
          <button className="operations" id="multiply">x</button>
          <button onClick={addNumbers} className="numbers" id="7">7</button>
          <button onClick={addNumbers} className="numbers" id="8">8</button>
          <button onClick={addNumbers} className="numbers" id="9">9</button>
          <button className="operations" id="subtract">-</button>
          <button onClick={addNumbers} className="numbers" id="4">4</button>
          <button onClick={addNumbers} className="numbers" id="5">5</button>
          <button onClick={addNumbers} className="numbers" id="6">6</button>
          <button className="operations" id="add">+</button>
          <button onClick={addNumbers} className="numbers" id="1">1</button>
          <button onClick={addNumbers} className="numbers" id="2">2</button>
          <button onClick={addNumbers} className="numbers" id="3">3</button>
          <button id="equal">=</button>
          <button onClick={addNumbers} className="numbers" id="zero">0</button>
          <button onClick={addNumbers} className="numbers" id="point">.</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
