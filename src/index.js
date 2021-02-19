import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense } from "./actions/expenses";
import { sortByAmount } from "./actions/filters";
import "./index.css";
import "react-dates/lib/css/_datepicker.css";
import { BrowserRouter } from "react-router-dom";
const store = configureStore();

// store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
// store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
// store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

// store.dispatch(sortByAmount());

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
