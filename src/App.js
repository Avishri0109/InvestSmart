import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ResultTable from "./components/Table/ResultTable";
import Form from "./components/Form/Form";

function App() {
  const [userInput, setUserInput] = useState({});

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results

  let currentSavings = +userInput["current-savings"];
  const yearlyContribution = +userInput["yearly-contribution"];
  const expectedReturn = +userInput["expected-return"];
  const duration = +userInput["duration"];

  if (userInput) {
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form calculate={calculateHandler} />
      {!userInput && <p>No investment!</p>}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
