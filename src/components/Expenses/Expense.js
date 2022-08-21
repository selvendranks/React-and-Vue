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

  const filtered = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == enteredYear;
  });

  let expenseContent = <p>no expense found</p>

  if(filtered.length > 0){
    expenseContent = (
      filtered.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))
    )
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          getYear={filterYear}
          selected={enteredYear}
        ></ExpensesFilter>
        {/* {filtered.length === 0 ? (
          <p>no results found</p>
        ) : (
          filtered.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          ))
        )} */}

{filtered.length === 0 &&  expenseContent}   
          
          {/* in jsx format the condition returns the element to the right of the operator if the left side is true */}
     {filtered.length > 0 &&  expenseContent}

      </Card>
    </div>
  );
}

export default Expense;
