import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //   Other way to set a multiple State for storage

  /*
  const [UserInput, SetUserInput] = useState({
    EnteredTitle: "",
    EnteredAmount: "",
    EnteredDate: "",
  });

  const TitleChangeHandler = (event) => {
    //   SetUserInput({
    //       ...UserInput,
    //       EnteredTitle: event.target.value,
    //   })

    // Its better to do
    SetUserInput((preState) => {
      return { ...preState, EnteredTitle: event.target.value };
    });
  };
*/

  const submitHandler = (event) => {
    //   here prevent from reload the page

    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Here pass teh value from Parent-Child-Parent
    props.onSaveExpenseData(expenseData);

    // here set the value to empty after the user type

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //Implementing two way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount} //Implementing two way binding
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate} //Implementing two way binding (react concept)
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
