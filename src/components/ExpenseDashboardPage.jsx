import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import { startSetExpenses } from "../actions/expenses";

export const ExpenseDashboardPage = (props) => {
  const [data, setData] = useState(true);

  useEffect(() => {
    props.setExpenses().then((expenses) => {
      if (expenses.length !== 0) setData(false);
    });
  }, []);

  return (
    <div>
      {data ? (
        <p>loading...</p>
      ) : (
        <div>
          <ExpensesSummary />
          <ExpenseListFilters />
          <ExpenseList />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setExpenses: () => dispatch(startSetExpenses()),
  };
};

export default connect(undefined, mapDispatchToProps)(ExpenseDashboardPage);
