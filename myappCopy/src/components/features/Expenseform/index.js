import React, { useState } from "react";

const MainExpense = ({onExpenseAdd}) => {
  const [expenseData, setExpenseData] = useState({
    title:"",
    price:"",
    date:""
  });
  const onChangeHandler = (e)=>{
    setExpenseData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }
    ));
  }
  const submit = (e)=>{
   
    e.preventDefault();
    console.log(expenseData);
    onExpenseAdd(expenseData);
  }
  return <form onSubmit={submit}>
    <input type="text" name="title" placeholder="Enter title" onChange={onChangeHandler} />
    <input type="number" name="price" placeholder="Enter Price" onChange={onChangeHandler}/>
    <input type="text" name="date" placeholder="Enter date" onChange={onChangeHandler}/>
    <button type="submit">Submit</button>
  </form>;
};

export default MainExpense;
