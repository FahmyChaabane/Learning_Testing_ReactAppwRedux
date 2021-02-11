import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.editExpense(props.expense.id, expense);
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.removeExpense({ id: props.expense.id });
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data)),
  };
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);