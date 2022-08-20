import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";



const DUMMY_EXPENSE = [
  { title: 'Car Insurance', amount: 294.67, date: new Date(2022, 6, 20) },
  { title: 'Bike Insurance', amount: 100, date: new Date(2022, 2, 23) },
  { title: 'Truck Insurance', amount: 500, date: new Date(2022, 7, 28) }
]


function App() {


  let [expense,setExpense] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) =>{
    setExpense((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
  }
  
  // function addnew(newData){
  //   const saveExpenseData ={
  //     ...newData
  //   }
  // console.log(saveExpenseData)
  // }

  return (
    <div>
       <NewExpense  newData ={addExpenseHandler}> </NewExpense>
      <Expense expenses = {expense}></Expense>
    </div>
  );
}

export default App;
