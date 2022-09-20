import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const newEmail = (state,action) =>{
  if(action.type == 'user_input')
    return {value : action.value , isValid : action.value.includes('@')}
  if(action.type == 'user_blur')
    return {value : state.value , isValid : state.value.includes('@')}
  return { value : '' , isValid : false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,DispatchEmail] = useReducer(newEmail,{value : '',isValid : false})

  const {isValid : emailIsValid} = emailState.isValid
  useEffect(() => {

    console.log("yes")
    
    const identifier = setTimeout(() => {
      console.log("validating");
      setFormIsValid(
        emailState.isValid && enteredPassword.trim().length > 6
      );
    }, 2000);

    return ()=>{
      console.log('cleanup')
      clearTimeout(identifier)
    }
    
  }, [emailIsValid, enteredPassword]);

  const emailChangeHandler = (event) => {

    DispatchEmail({type : 'user_input' , value : event.target.value})
    // setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    DispatchEmail({type : 'user_blur'})
    // setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
