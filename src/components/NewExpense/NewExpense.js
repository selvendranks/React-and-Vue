import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  
   const [isEditing,setEdit] = useState(false)

  function startEditHandler(){
        setEdit(true) 
  }

  function stopEditingHandler(){
    setEdit(false)
  }
  

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditHandler}>New Expense</button>}
       {/* jsx syntax for condition , if left side of && is true then right side is returned  */}
      {isEditing && <ExpenseForm onSaveExpenseData={props.newData} stopEdit = {stopEditingHandler}></ExpenseForm> }
    </div>
  );
};

export default NewExpense;
