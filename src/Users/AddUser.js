import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 0) return;

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

  return (
    <div>
      <ErrorModel
        title={"An error occured"}
        message="Something went wrong"
      ></ErrorModel>
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
    </div>
  );
};

export default AddUser;
