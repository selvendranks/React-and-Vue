import React, { useEffect, useReducer, useState,useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../Input/Input";

const newEmail = (state, action) => {
  if (action.type == "user_input")
    return { value: action.value, isValid: action.value.includes("@") };
  if (action.type == "user_blur")
    return { value: state.value, isValid: state.value.includes("@") };
  return { value: "", isValid: false };
};

const Login = (props) => {


  
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, DispatchEmail] = useReducer(newEmail, {
    value: "",
    isValid: false,
  });

  const { isValid: emailIsValid } = emailState.isValid;
  useEffect(() => {
    console.log("yes");

    const identifier = setTimeout(() => {
      console.log("validating");
      setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
    }, 2000);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [emailIsValid, enteredPassword]);

  const emailChangeHandler = (event) => {
    DispatchEmail({ type: "user_input", value: event.target.value });
    // setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    DispatchEmail({ type: "user_blur" });
    // setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid)
    props.onLogin(emailState.value, enteredPassword);
    else if(!emailIsValid){
           
    }
    else{
      
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>

        <Input
          id="password"
          label="password"
          type="password"
          isValid={passwordIsValid}
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
