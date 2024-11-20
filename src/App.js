import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const num = parseInt(inputValue, 10);
    const result = [];
    for (let i = 1; i <= num; i++) {
      result.push("*".repeat(i));
    }
    for (let i = num - 1; i > 0; i--) {
      result.push("*".repeat(i));
    }
    setStars(result);
  };

  return (
    <div>
      <label htmlFor="inputNumber">Input :</label>
      <input
        id="inputNumber"
        type="number"
        placeholder="Enter a number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={generateStars}>Submit</button>
      <div>
        {stars.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default App;

