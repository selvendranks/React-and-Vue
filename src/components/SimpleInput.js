import { useRef, useState } from "react";
import "../index.css"

const SimpleInput = (props) => {
  const nameRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid,setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched,setEnteredNameTouched] = useState(false);

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(enteredName.trim() === ""){ //if input is empty
          setEnteredNameIsValid(false)
                return;
    }

    setEnteredNameIsValid(true)

    console.log(enteredName);
    console.log(nameRef.current.value);
    setEnteredName("")
  };
  
  let nameInputIsValid =  !enteredNameIsValid && enteredNameTouched

  let nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          ref={nameRef}
          value={enteredName}
          
        />
        {nameInputIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
