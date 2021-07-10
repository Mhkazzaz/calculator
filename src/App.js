/* eslint-disable no-eval */
import './App.scss';
import { useState, useEffect } from 'react'

function App() {

  const [term, setTerm] = useState("0")

  const [formula, setFormula] = useState("0")

  const [equation, setEquation] = useState(false)


  const formulaScreen = document.getElementById("formula")

  const operatorsArr = ["+", "*", "/", "-"];

  const isTermOperator = operatorsArr.find(operator => operator === term)



  const digitLimitMet = () => {

      document.getElementById("term").innerHTML = ("DIGIT LIMIT MET")

      setTimeout(function() {

      document.getElementById("term").innerHTML = term

    }, 500);

}



  const addDigits = (e) => {

    if (formulaScreen) {

     formulaScreen.style.opacity = 1

    }

    if (equation) {

      if (e.target.id === "point") {

        setFormula("0.")
        setTerm("0.")

      } else if (e.target.className === "numbers") {

        setFormula(e.target.innerHTML)
        setTerm(e.target.innerHTML)

      } else if (e.target.className === "operators") {

        setFormula(term + e.target.innerHTML)
        setTerm(e.target.innerHTML)

      } else {

        setTerm(0)
        document.getElementById("formula").style.opacity = 0

      }

      setEquation(!equation)

    } else if (term === "0") {

      document.getElementById("formula").style.opacity = 1

      if (e.target.id === "point") {

        setFormula(formula + ".")
        setTerm(term + ".")

      } else if (e.target.className === "numbers" && e.target.id !== "zero") {
        
        setFormula(e.target.innerHTML)
        setTerm(e.target.innerHTML)

      } else if (e.target.className === "operators") {

        setFormula(formula + e.target.innerHTML)
        setTerm(e.target.innerHTML)

      } else {

        setFormula(formula)
        setTerm(term)

      }


    } else {

      if (e.target.id === "point") {

        let termArr = [];
        for (let i = 0; i < term.length; i++) {
          termArr.push(term[i])
        }

        const decimalPoint = (num) => num === '.';
        if (!termArr.some(decimalPoint)) {

          setFormula(formula + e.target.innerHTML)
          setTerm(term + e.target.innerHTML)

        } else {

          setFormula(formula)
          setTerm(term)

        }

      } else if (e.target.className === "numbers") {

        if (term.length === 22) {

          digitLimitMet();

        } else if (isTermOperator) {

          setFormula(formula + e.target.innerHTML)
          setTerm(e.target.innerHTML)

        } else {

          setFormula(formula + e.target.innerHTML)
          setTerm(term + e.target.innerHTML)

        }    

      } else if (e.target.className === "operators") {

        let formulaArr = [];
        for (let i = 0; i < formula.length; i++) {

          formulaArr.push(formula[i])

        }

        let mutableArr = [...formulaArr]

        if (isTermOperator) {

          if (e.target.id === "minus") {

            if (operatorsArr.find(operator => operator === (formulaArr[formulaArr.length - 2]))) {

              setFormula(formula)
              setTerm(term)

            } else {

              setFormula(formula + e.target.innerHTML)
              setTerm(e.target.innerHTML)

            }

          } else {

            if (operatorsArr.find(operator => operator === (formulaArr[formulaArr.length - 2]))) {

              mutableArr.splice(-2, 2, e.target.innerHTML)
              setFormula(mutableArr.join(""))
              setTerm(e.target.innerHTML)

            } else {

              mutableArr[mutableArr.length - 1] = e.target.innerHTML

              setFormula(mutableArr.join(""))
              setTerm(e.target.innerHTML)

            }

          }



        } else {

          setFormula(formula + e.target.innerHTML)
          setTerm(e.target.innerHTML)

        }

      } else {

        setFormula(formula + e.target.innerHTML)
        setTerm(term + e.target.innerHTML)

      }

    }

  }

  const clear = () => {

    setFormula("0")
    setTerm("0")
    document.getElementById("formula").style.opacity = 0;

  }

  useEffect(() => {

    document.getElementById("ac").addEventListener("click", clear)

    return () => {

      document.getElementById("ac").removeEventListener("click", clear)

    }

  })


  const getAns = (e) => {

    if (!equation) {

      if (!isTermOperator) {

        let formulaArr = [];
        for (let i = 0; i < formula.length; i++) {

          formulaArr.push(formula[i])

        }
      
        for (let i = 0; i < formulaArr.length; i++) {

          if (formulaArr[i] === "-" && formulaArr[i + 1] === "-") {

              formulaArr.splice(i, 2, "+")

          }

        }

      const formulaEquation = formulaArr.join("")
      
      setFormula(`${formula} ${e.target.innerHTML} ${String(eval(formulaEquation))}`)
      setTerm(String(eval(formulaEquation)))

      setEquation(!equation)

      }

    }

  }

  useEffect(() => {

    document.getElementById("equal").addEventListener("click", getAns)

    return () => {

      document.getElementById("equal").removeEventListener("click", getAns)

    }

  })

  return (
    <>
      <div id="container">
        <div id="calculator">
          <div id="screen">
            <div id="formula">{formula}</div>
            <div id="term">{term}</div>
          </div>
          <div id="buttons-wrapper">
            <button                                            id="ac">AC</button>
            <button onClick={addDigits} className="operators"  id="divide">/</button>
            <button onClick={addDigits} className="operators"  id="multiply">*</button>
            <button onClick={addDigits} className="numbers"    id="7">7</button>
            <button onClick={addDigits} className="numbers"    id="8">8</button>
            <button onClick={addDigits} className="numbers"    id="9">9</button>
            <button onClick={addDigits} className="operators"  id="minus">-</button>
            <button onClick={addDigits} className="numbers"    id="4">4</button>
            <button onClick={addDigits} className="numbers"    id="5">5</button>
            <button onClick={addDigits} className="numbers"    id="6">6</button>
            <button onClick={addDigits} className="operators"  id="add">+</button>
            <button onClick={addDigits} className="numbers"    id="1">1</button>
            <button onClick={addDigits} className="numbers"    id="2">2</button>
            <button onClick={addDigits} className="numbers"    id="3">3</button>
            <button                                            id="equal">=</button>
            <button onClick={addDigits} className="numbers"    id="zero">0</button>
            <button onClick={addDigits} className="numbers"    id="point">.</button>
          </div>
        </div>
      </div>
    </>
  );

}

export default App;

