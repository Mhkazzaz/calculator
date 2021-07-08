import './App.scss';
import { useState, useEffect } from 'react'

function App() {

  const [numbers, setNumbers] = useState("0")
  const [term, setTerm] = useState("0")

  const formula = document.getElementById("formula")

  if (formula) {
    formula.style.opacity = 1
  }

  const addNumbers = (e) => {

      // console.log(`target: ${e.target.className}`)
      // console.log(`term: ${term}`)
    const operatorsArr = ["+", "x", "/", "-"];

    if (term.length === 22) {
      document.getElementById("result").innerHTML = ("DIGIT LIMIT MET")
      setTimeout(function () {
        document.getElementById("result").innerHTML = term
      }, 500);
    }

    else if (term === "0") {
      document.getElementById("formula").style.opacity = 1
      if (e.target.innerHTML === "0") {
        setNumbers(numbers)
        setTerm("0")
      }
      else if (e.target.innerHTML === ".") {
        setNumbers(numbers + ".")
        setTerm("0.")
      }
      else if (e.target.className === "numbers" && numbers === "0") {
        setNumbers(e.target.innerHTML)
        setTerm(e.target.innerHTML)
      }
      else if (e.target.className === "numbers") {
        let numbersArr = [];
        for (let i = 0; i < numbers.length; i++) {
          numbersArr.push(numbers[i])
        }
        const mutableArr = [...numbersArr]
        mutableArr[mutableArr.length -1] = e.target.innerHTML;
        setNumbers(mutableArr.join(""))
        setTerm(e.target.innerHTML)
      }

      else if (e.target.className === "operators") {
        setNumbers(numbers + e.target.innerHTML)
        setTerm(e.target.innerHTML)
      }
      // else {
      //   setNumbers(numbers + e.target.innerHTML)
      //   setTerm(term + e.target.innerHTML)
      // }
    }

    else if (e.target.innerHTML === '.') {
      let numbersArr = [];
      for (let i = 0; i < term.length; i++) {
        numbersArr.push(term[i])
      }
      const decimalPoint = (num) => num  === '.';
      if (!numbersArr.some(decimalPoint)) {
      setNumbers(numbers + e.target.innerHTML)
      setTerm(term + e.target.innerHTML)
      }
    }

    else if (e.target.className === "operators") {
      if (operatorsArr.find(n => n === term)) {
      setTerm(term)
      } 
      else if (term === "0") {
        console.log("Target Operators - Term = 0")
        setNumbers(numbers)
      }
      else if (!(operatorsArr.find(element => element === numbers[numbers.length -1]))) {
        setNumbers(numbers + String(e.target.innerHTML))
        setTerm(e.target.innerHTML) 
      }
      else {
        setTerm("e.target.innerHTML")
      }
    }

    else if ((operatorsArr.find(n => n === term)) && (e.target.className === "numbers")) {
      setTerm(e.target.innerHTML)
      setNumbers(numbers + String(e.target.innerHTML))
    }
    
    else {
    setNumbers(numbers + String(e.target.innerHTML))
    setTerm(term + String(e.target.innerHTML))
    }

  }

  const deleteNumbers = () => {
    setNumbers("0")
    setTerm("0")
    document.getElementById("formula").style.opacity = 0;
  }  

  useEffect(() => {
    document.getElementById("ac").addEventListener("click", deleteNumbers)
    return() => {
      document.getElementById("ac").removeEventListener("click", deleteNumbers)
    }
  })
  
  
  return (
    <>
      <div id="container">
        <div id="calculator">
          <div id="screen">
            <div id="formula">{numbers}</div>
            <div id="result">{term}</div>
          </div>
          <div id="button-wrapper">
            <button                                             id="ac">AC</button>
            <button onClick={addNumbers} className="operators" id="divide">/</button>
            <button onClick={addNumbers} className="operators" id="multiply">x</button>
            <button onClick={addNumbers} className="numbers"    id="7">7</button>
            <button onClick={addNumbers} className="numbers"    id="8">8</button>
            <button onClick={addNumbers} className="numbers"    id="9">9</button>
            <button onClick={addNumbers} className="operators" id="subtract">-</button>
            <button onClick={addNumbers} className="numbers"    id="4">4</button>
            <button onClick={addNumbers} className="numbers"    id="5">5</button>
            <button onClick={addNumbers} className="numbers"    id="6">6</button>
            <button onClick={addNumbers} className="operators" id="add">+</button>
            <button onClick={addNumbers} className="numbers"    id="1">1</button>
            <button onClick={addNumbers} className="numbers"    id="2">2</button>
            <button onClick={addNumbers} className="numbers"    id="3">3</button>
            <button                                             id="equal">=</button>
            <button onClick={addNumbers} className="numbers"    id="zero">0</button>
            <button onClick={addNumbers} className="numbers"    id="point">.</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
