import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export const EditExpensePage = (props) => {
  if (!props.expense) {
    return <p>id doesn't exist</p>;
  }
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.startEditExpense(props.expense.id, expense);
          props.history.push("/dashboard");
        }}
      />
      <button
        onClick={() => {
          props.startRemoveExpense({ id: props.expense.id });
          props.history.push("/dashboard");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
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
