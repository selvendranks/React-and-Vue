import { useReducer, useState } from "react";

const initialInputState = {inputValue : "", enteredInputTouched : false}

const inputs = (state,action)=>{
     if(action.type === 'inputTouched')
      return { inputValue  : state.inputValue , enteredInputTouched : true}
     if(action.type === 'enteredInput')
      return {inputValue : action.inputValue , enteredInputTouched : state.enteredInputTouched}
}

const useValidate = (condition) => {
  // const [inputValue, setEnteredInput] = useState("");
  // const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const [input,inputDispatcher] = useReducer(inputs,initialInputState)

  const enteredInputIsValid = condition(input.inputValue)

  const inputBlurHandler = (event) => {
    inputDispatcher({type: 'inputTouched'})
  };

  const inputHandler = (event) => {
    inputDispatcher({type : 'enteredInput' , inputValue : event.target.value})
    inputDispatcher({type: 'inputTouched'})
  };

  let inputIsValid = !enteredInputIsValid && input.enteredInputTouched;

  let inputClasses = inputIsValid
    ? "form-control invalid"
    : "form-control";

 return({
    inputValue : input.inputValue,
    inputHandler,
    inputBlurHandler,
    inputClasses,
    inputIsValid,
    enteredInputIsValid
 })

};
export default useValidate;
