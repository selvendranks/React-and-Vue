import { useState } from "react";

const useValidate = (condition) => {
  const [inputValue, setEnteredInput] = useState("");
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const enteredInputIsValid = condition(inputValue)

  const inputBlurHandler = (event) => {
    setEnteredInputTouched(true);
  };

  const inputHandler = (event) => {
    setEnteredInput(event.target.value);
    setEnteredInputTouched(true);
  };

  let inputIsValid = !enteredInputIsValid && enteredInputTouched;
 

  let inputClasses = inputIsValid
    ? "form-control invalid"
    : "form-control";

 return({
    inputValue,
    inputHandler,
    inputBlurHandler,
    inputClasses,
    inputIsValid,
    enteredInputIsValid
 })

};
export default useValidate;
