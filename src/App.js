import { React, useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [users, addNewUser] = useState([]);
  //const [usersList, updateUsersList] = useState(users);


  const deleteUserHandler = userId => {
    console.log('Testing');
   /* addNewUser(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    }); */
  };

  return (
    <div id="mainDiv">
      <AddUser onAddUser={addNewUser} />
      <UserList usersArr={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
