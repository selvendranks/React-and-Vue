import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import { useState } from "react";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error,setError] = useState()

  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
      {
        setError({
          title : "invalid input",
          message : "please enter a valid name and age (non empty values)"
        })

        return;
      }
    if (+enteredAge < 0) {
      setError({
        title: "invalid age",
        message : "age must be greater than or equal to 0"
      })

      return;
    }

    setUserName("");
    setAge("");
    console.log(enteredUserName, enteredAge);
    const User = {
      name: enteredUserName,
      age: enteredAge,
      id: Math.random.toString(),
    };

    props.addUsers(User);
  };

  const errorHandler = ()=>{
    setError(null);
  }

  return (
    <>
    {error &&  <ErrorModel
        title={error.title}
        message={error.message}
        clearError = {errorHandler}
      ></ErrorModel>
    }
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            value={enteredUserName}
            onChange={usernameHandler}
            id="username"
          ></input>
          <label htmlFor="age">Age (Year)</label>
          <input
            type="Number"
            value={enteredAge}
            onChange={ageHandler}
            id="age"
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
