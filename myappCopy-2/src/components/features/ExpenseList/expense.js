import React from 'react';
import {
  ExpenseItem,
  ExpenseDate,
  ExpenseTitle,
  ExpensePrice,
  EditButton,
  DeleteButton,
} from './styled'; // Import the styled components

const Expense = ({ expense, getEditData, deleteExpense }) => {
  
  const editHandler = () => {
    console.log(expense);
    getEditData(expense);
  };

  const deleteHandler = () => {
    deleteExpense(expense.id);
  };
  return (
    <ExpenseItem>
      <ExpenseDate className="date">{expense.date}</ExpenseDate>
      <ExpenseTitle>{expense.title}</ExpenseTitle>
      <ExpensePrice>${expense.price}</ExpensePrice>
      <EditButton type="button" onClick={editHandler}>
        Edit
      </EditButton>
      <DeleteButton type="button" onClick={deleteHandler}>
        Delete
      </DeleteButton>
    </ExpenseItem>
  );
};

export default Expense;
