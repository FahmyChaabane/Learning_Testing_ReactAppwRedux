import React from "react";
import { shallow } from "enzyme"; // shallow renderer
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let onSubmitSpy, historySpy, wrapper;
beforeEach(() => {
  onSubmitSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage startAddExpense={onSubmitSpy} history={historySpy} />
  );
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle on submit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
  expect(historySpy.push).toHaveBeenLastCalledWith("/dashboard");
});
