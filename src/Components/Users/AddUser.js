import { React, useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isRequired, setIsRequired] = useState(false);



  

  const nameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
        setIsValid(true);
        setIsRequired(false);
      }
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
        setIsValid(true);
        setIsRequired(false);
      }

    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (e.target[0].value.trim().length < 1 || e.target[1].value.trim().length < 1) {
        setIsValid(false);
        setIsRequired(true);
        //alert('Please enter name and age');
        return
    }
    const newUser = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString()
    };
    props.onAddUser((prevUsers) => {
      return [newUser, ...prevUsers];
    });
   setEnteredName("");
   setEnteredAge("");
   e.target.reset();
   e.target[0].focus();
  };

  return (
    <Card>
      <form className={`${styles.input} ${!isValid && styles.invalid}`} onSubmit={addUserHandler}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input id="username" type="text" placeholder="Add user name" onChange={nameChangeHandler}
        required={isRequired}></input>
        <label htmlFor="age" className={styles.label}>
          Age (years)
        </label>
        <input id="age" type="number" min={1} onChange={ageChangeHandler}
        required={isRequired}></input>
        <Button key={Math.random().toString()} type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
