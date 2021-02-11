import React from "react";
import { shallow } from "enzyme"; // shallow renderer
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

test("should render EditExpensePage correctly", () => {
  const wrapper = shallow(<EditExpensePage />);
  expect(wrapper).toMatchSnapshot();
});

test("should handle on submit", () => {
  const editSubmitSpy = jest.fn();
  const historySpy = { push: jest.fn() };
  const wrapper = shallow(
    <EditExpensePage
      expense={expenses[1]}
      editExpense={editSubmitSpy}
      history={historySpy}
    />
  );
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(editSubmitSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
});

test("should handle on click", () => {
  const removeSubmitSpy = jest.fn();
  const historySpy = { push: jest.fn() };
  const wrapper = shallow(
    <EditExpensePage
      expense={expenses[1]}
      removeExpense={removeSubmitSpy}
      history={historySpy}
    />
  );
  wrapper.find("button").simulate("click");
  expect(removeSubmitSpy).toHaveBeenLastCalledWith({ id: expenses[1].id });
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
});
