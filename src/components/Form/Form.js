import { useState } from "react";
const Form=(props)=>{
    const InitialInput= {
            'current-savings':5000,
            'yearly-contribution':800,
            'expected-return':4,
            'duration':4
        };
    
    const[userInput,SetUserInput]=useState(InitialInput);
    const FormSubmitHandler=(event)=>{
          event.preventDefault();
          props.calculate(userInput);

    }
    const ResetHandler=()=>{
        SetUserInput('');
    }
    const ChangeHandler = (input, value) => {
     SetUserInput((prevInput) => ({
    ...prevInput,
    [input]: value,
   }));
};

    
    return (
      <div>
        <form onSubmit={FormSubmitHandler} className="form">
          <div className="input-group">
            <p>
              <label htmlFor="current-savings">Current Savings ($)</label>
              <input
                type="number"
                id="current-savings"
                value={userInput["current-savings"]}
                onChange={(event) =>
                  ChangeHandler("current-savings", event.target.value)
                }
              />
            </p>

            <p>
              <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
              <input
                type="number"
                id="yearly-contribution"
                value={userInput["yearly-contribution"]}
                onChange={(event) =>
                  ChangeHandler("yearly-contribution", event.target.value)
                }
              />
            </p>
          </div>
          <div className="input-group">
            <p>
              <label htmlFor="expected-return">
                Expected Interest (%, per year)
              </label>
              <input
                type="number"
                id="expected-return"
                value={userInput["expected-return"]}
                onChange={(event) =>
                  ChangeHandler("expected-return", event.target.value)
                }
              />
            </p>
            <p>
              <label htmlFor="duration">Investment Duration (years)</label>
              <input
                type="number"
                id="duration"
                value={userInput["duration"]}
                onChange={(event) =>
                  ChangeHandler("duration", event.target.value)
                }
              />
            </p>
          </div>
          <p className="actions">
            <button type="reset" className="buttonAlt" onClick={ResetHandler}>
              Reset
            </button>
            <button
              type="submit"
              className="button"
              
            >
              Calculate
            </button>
          </p>
        </form>
      </div>
    );
}
export default Form;