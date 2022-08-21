import React from "react";
//import Button from "../UI/Button";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.user}>
      {`${props.name} (${props.age} years old)`}
      <button key={Math.random().toString()} type="button" onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
};

export default User;
