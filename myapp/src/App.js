import logo from "./logo.svg";
import "./App.css";
import check from "./components/check";
// import defaultlayout from "./components/layout";
import Defaultlayout from "./components/layout/default";
import MainExpense from "./components/features/Expenseform";
import Expense from "./components/features/expense";
import ExpenseList from "./components/features/expenseList";

import { useState } from "react";
const expenses = [
  {title:"Expense 01",price:22,date:"2023-01-22"},
  {title:"Expense 01",price:22,date:"2023-01-22"},
  {title:"Expense 01",price:22,date:"2023-01-22"},
  {title:"Expense 01",price:22,date:"2023-01-22"},
  {title:"Expense 01",price:22,date:"2023-01-22"},
];
function App() {
  const [expenseLists, setExpenseLists] = useState(expenses);
  // const [loading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 3000);
  // if (loading) {
  //   return <h1>Loading....</h1>;
  // }
  // return (
  //   <>
  //     <h1>Hello World</h1>
  //     <check />
  //   </>
  // );

  // let [count, setCount] = useState(0);
  // function incremeent() {
  //   setCount(count + 1);
  // }
  // function decrement() {
  //   setCount(count - 1);
  // }
  // return (
  //   <>
  //     <button onClick={incremeent}>+</button>
  //     <h1>{count}</h1>
  //     <button onClick={decrement}>-</button>
  //   </>
  // );
const addExpenseListHandler = (newExpense)=>{
  setExpenseLists((prevState)=> [newExpense, ...prevState])
} 
  return (
    <Defaultlayout>
      <MainExpense onExpenseAdd = {addExpenseListHandler} />
      <ExpenseList expenseList={expenseLists} />
    </Defaultlayout>
  );
}

export default App;
