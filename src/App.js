import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 4.64,
    date: new Date(2021, 2, 29),
  },
  {
    id: "e2",
    title: "New Bike",
    amount: 294.64,
    date: new Date(2021, 1, 12),
  },
  {
    id: "e3",
    title: "Weekle Food",
    amount: 1004.3,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    title: "Sport Club",
    amount: 450.64,
    date: new Date(2022, 2, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
