import { useState } from "react";
import AddUser from "./Users/AddUser"
import UserList from "./Users/UsersList";

function App(){

  const [Users,addUser] = useState([{
    name : 'Selvendran' , age : '19'
  }])
  

  return (
    <div>
       <AddUser></AddUser>
       <UserList users = {Users}></UserList>
    </div>
  )
}

export default App;