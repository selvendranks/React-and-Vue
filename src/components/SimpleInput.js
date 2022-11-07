import { useState } from "react";
import "../index.css";

const SimpleInput = (props) => {
 

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      //if input is empty
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
  };

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      //if input is not empty
      setEnteredNameIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      //if input is empty
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
  };

  let nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  let nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
