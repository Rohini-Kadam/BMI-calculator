import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function calculateBMI() {
    if (!height || !weight) {
      setResult("Please enter both heigth and weight!");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult(`Your BMI is ${bmi} : You are ${category}`);
  }

  return (
    <>
      <div className="container">
        <h1>BMI Calculator</h1>

        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          placeholder="e.g. 170"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        ></input>

        <label htmlFor="weight">Weight (Kg)</label>
        <input
          type="number"
          id="weight"
          placeholder="e.g. 60"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>

        <button onClick={calculateBMI}>Calculate</button>

        <div className="result">{result}</div>
      </div>
    </>
  );
}

export default App;
