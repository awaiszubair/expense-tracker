import React from 'react'
const Expense = ({expense}) => {
    console.log("This is main Expense Code ",expense);
  return (
    <ul>
        <li>
        <div>Date:{expense.date}</div>
        <div>title:{expense.title}</div>
        <div>price:{expense.price}</div>
        </li>
    </ul>
  )
}
export default Expense;
