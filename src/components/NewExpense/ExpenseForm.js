import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setTitle] = useState("");
  const [enteredamount, setAmount] = useState("");
  const [entereddate, setDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };

    props.onSaveExpenseData(expenseData)

    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredamount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1-01-2020"
            max="16-08-2022"
            value={entereddate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
