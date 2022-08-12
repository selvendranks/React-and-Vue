import Expense from "./components/Expense";

function App() {

  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2022, 6, 20) },
    { title: 'Bike Insurance', amount: 100, date: new Date(2022, 2, 23) },
    { title: 'Truck Insurance', amount: 500, date: new Date(2022, 7, 28) }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense expenses = {expenses}></Expense>
    </div>
  );
}

export default App;
