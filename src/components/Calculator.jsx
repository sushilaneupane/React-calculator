import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(""); 

  // Handle button clicks to update the input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  
  const calculateResult = () => {
    try {
      setResult(evaluate(input)); 
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
       
        <div className="buttons">
         
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(
            (btn) => (
              <button
                key={btn}
                onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
              >
                {btn}
              </button>
            )
          )}
           <button className="clear" onClick={clearInput}>
            Del
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Calculator;
