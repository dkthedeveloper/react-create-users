import { React, useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      e.target[0].value.trim().length < 1 ||
      e.target[1].value.trim().length < 1
    ) {
      setIsValid(false);
      return;
    }
    const newUser = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onAddUser((prevUsers) => {
      return [newUser, ...prevUsers];
    });
    setEnteredName("");
    setEnteredAge("");
    e.target.reset();
    e.target[0].focus();
  };

  const modalCloseHandler = () => {
    setIsValid(true);
  };

  const errorMessage = "Please enter valid user NAME and AGE.";

  return (
    <div className={styles.div}>
      {!isValid && (
        <ErrorModal
          modalCloser={modalCloseHandler}
          title="Error!"
          message={errorMessage}
        />
      )}
      <Card className={`${styles.input} ${!isValid && styles.invalid}`}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Add user name"
            onChange={nameChangeHandler}
          ></input>
          <label htmlFor="age" className={styles.label}>
            Age (years)
          </label>
          <input
            id="age"
            type="number"
            min={1}
            onChange={ageChangeHandler}
          ></input>
          <Button key={Math.random().toString()} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
