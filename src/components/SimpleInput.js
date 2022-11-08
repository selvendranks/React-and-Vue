import { useEffect, useState } from "react";
import useValidate from "../hooks/form-validate";
import "../index.css";

const SimpleInput = (props) => {

  const [formIsValid, setFormIsValid] = useState(false)

  const nameValidate = (enteredName) => {
    return enteredName.trim() !== "";
  };

  const emailValidate = (enteredEmail)=>{
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return enteredEmail.trim() !== "" && emailPattern.test(enteredEmail);
  }

  const {
    inputValue: enteredName,
    inputHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
    inputClasses: nameInputClasses,
    inputIsValid: nameInputIsValid,
    enteredInputIsValid : enteredNameIsValid
  } = useValidate(nameValidate);

  const {
    inputValue: enteredEmail,
    inputHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
    inputClasses: emailInputClasses,
    inputIsValid: emailInputIsValid,
    enteredInputIsValid : enteredEmailIsValid
  } = useValidate(emailValidate);



  //   const [enteredName, setEnteredName] = useState("");
  //   const [enteredEmail, setEnteredEmail] = useState("");
  //   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //   const [enteredEmailtouched, setEnteredEmailTouched] = useState(false);

//   const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

//   const enteredNameIsValid = enteredName.trim() !== "";
//     const enteredEmailIsValid = enteredEmail.trim() !== "" && emailPattern.test(enteredEmail);

  useEffect(()=>{
    if (enteredNameIsValid && enteredEmailIsValid) {
        setFormIsValid(true)
      } else {
        setFormIsValid(false)
      }
  },[enteredEmailIsValid,enteredNameIsValid])



  //   if (enteredNameIsValid && enteredEmailIsValid) {
  //     formIsValid = true;
  //   } else {
  //     formIsValid = false;
  //   }

  //   const nameInputBlurHandler = (event) => {
  //     setEnteredNameTouched(true);
  //   };

  //   const emailInputBlurHandler = () => {
  //     setEnteredEmailTouched(true);
  //   };

  //   const nameInputHandler = (event) => {
  //     setEnteredName(event.target.value);
  //     setEnteredNameTouched(true);
  //   };

  //   const emailInputHandler = (event) => {
  //     setEnteredEmail(event.target.value);
  //     setEnteredEmailTouched(true);
  //   };

    // const formSubmitHandler = (event) => {
    //   event.preventDefault();

    //   setEnteredNameTouched(true);
    //   setEnteredEmailTouched(true);

    //   if (!enteredNameIsValid) {
    //     //if input is empty
    //     return;
    //   }
    //   setEnteredNameTouched(false);
    //   setEnteredEmailTouched(false);
    //   console.log(enteredName);
    //   setEnteredName("");
    //   setEnteredEmail("");
    // };

  //   let nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  //   let emailInputIsValid = !enteredEmailIsValid && enteredEmailtouched;

  //   let nameInputClasses = nameInputIsValid
  //     ? "form-control invalid"
  //     : "form-control";

  //   let emailInputClasses = emailInputIsValid
  //     ? "form-control invalid"
  //     : "form-control";

  return (
    <form >
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
      
      <div className={emailInputClasses}>
        <label htmlFor="name">Your email</label>
        <input
          type="text"
          id="name"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsValid && (
          <p className="error-text">Name must be valid email</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
