import React from "react";
import Button from "../UI/Button";
import styles from "./User.module.css";

const User = (props) => {
  const deleteHanddler = () => {
    props.onUserDelete(props.id);
  };

  return (
    <div className={styles.user}>
      {`${props.name} (${props.age} years old)`}
      <Button
        key={Math.random().toString()}
        type="button"
        onClick={deleteHanddler}
      >
        Delete
      </Button>
    </div>
  );
};

export default User;
