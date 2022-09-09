import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setUserName] = useState("");
  // const [enteredAge, setAge] = useState("");
  const [error,setError] = useState()

  // const usernameHandler = (event) => {
  //   setUserName(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0)
      {
        setError({
          title : "invalid input",
          message : "please enter a valid name and age (non empty values)"
        })

        return;
      }
    if (+enteredUserAge < 0) {
      setError({
        title: "invalid age",
        message : "age must be greater than or equal to 0"
      })

      return;
    }

    console.log(enteredName, enteredUserAge);
    const User = {
      name: enteredName,
      age: enteredUserAge,
      id: Math.random.toString(),
    };

    props.addUsers(User);

    //refresh values
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
            // value={enteredUserName}
            // onChange={usernameHandler}
            id="username"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Year)</label>
          <input
            type="Number"
            // value={enteredAge}
            // onChange={ageHandler}
            id="age"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
