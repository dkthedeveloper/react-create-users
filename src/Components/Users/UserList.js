import { React } from "react";
import Card from "../UI/Card";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  let content;

  if (props.usersArr.length === 0) {
    content = <h2>No Users Added.</h2>;
  } else {
    content = props.usersArr.map((user) => {
      return (
        <User
          onUserDelete={props.onDeleteUser}
          key={user.id}
          name={user.name}
          age={user.age}
          id={user.id}
        />
      );
    });
  }

  return <Card className={styles.list}>{content}</Card>;
};

export default UserList;
