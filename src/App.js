import { React, useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [users, updateUsersList] = useState([]);
  //const [usersList, updateUsersList] = useState([...users]);

  const deleteUserHandler = (userId) => {
    updateUsersList((prevUsers) => {
      prevUsers = [...users];
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      console.log(updatedUsers);
      return updatedUsers;
    });
  };

  return (
    <div id="mainDiv">
      <AddUser onAddUser={updateUsersList} />
      <UserList usersArr={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
