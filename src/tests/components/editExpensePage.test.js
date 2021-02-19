import React from "react";
import { shallow } from "enzyme"; // shallow renderer
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editSubmitSpy, historySpy, wrapper;
beforeEach(() => {
  editSubmitSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[1]}
      startEditExpense={editSubmitSpy}
      history={historySpy}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle on submit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(editSubmitSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(historySpy.push).toHaveBeenLastCalledWith("/dashboard");
});

test("should handle on click", () => {
  const removeSubmitSpy = jest.fn();
  const historySpy = { push: jest.fn() };
  const wrapper = shallow(
    <EditExpensePage
      expense={expenses[1]}
      startRemoveExpense={removeSubmitSpy}
      history={historySpy}
    />
  );
  wrapper.find("button").simulate("click");
  expect(removeSubmitSpy).toHaveBeenLastCalledWith({ id: expenses[1].id });
  expect(historySpy.push).toHaveBeenLastCalledWith("/dashboard");
});
