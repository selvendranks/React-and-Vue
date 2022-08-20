import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import { useState } from "react";

function Expense(props) {
  const [enteredYear, setYear] = useState("2022");

  function filterYear(Year) {
    setYear(Year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          getYear={filterYear}
          selected={enteredYear}
        ></ExpensesFilter>
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))};
      </Card>
    </div>
  );
}

export default Expense;
