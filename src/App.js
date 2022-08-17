import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {

  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2022, 6, 20) },
    { title: 'Bike Insurance', amount: 100, date: new Date(2022, 2, 23) },
    { title: 'Truck Insurance', amount: 500, date: new Date(2022, 7, 28) }
  ]

  return (
    <div>
       <NewExpense> </NewExpense>
      <Expense expenses = {expenses}></Expense>
    </div>
  );
}

export default App;
