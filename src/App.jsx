import { useState } from "react";
import "./App.css";

const messages = ["Learn ReactJS", "Learn NodeJS", "Learn MongoDB"];

function App() {
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "jonhs" });

  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
    //never do it
    // test.name = "mohit"

    setTest({ name: "mohit" });
  }

  // const step = 0;

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step === 1 ? "active" : ""}`}>1</div>
        <div className={`${step === 2 ? "active" : ""}`}>2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div>
      </div>

      <div className="message">
        Step {step}: {messages[step - 1]} {test.name}
      </div>

      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
