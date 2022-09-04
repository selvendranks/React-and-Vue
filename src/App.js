import { useState } from "react";
import AddUser from "./Users/AddUser";
import UserList from "./Users/UsersList";

function App() {
  const [Users, addUser] = useState([
    {
      name: "Selvendran",
      age: "19",
      id: Math.random.toString()
    },
  ]);

  function addItems(data) {
    addUser((prevUsers)=>{
       return [data , ...prevUsers]
    })
  }

  return (
    <div>
      <AddUser addUsers={addItems}></AddUser>
      <UserList users={Users}></UserList>
    </div>
  );
}

export default App;
