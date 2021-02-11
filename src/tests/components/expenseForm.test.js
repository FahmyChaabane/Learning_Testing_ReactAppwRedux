import React from "react";
import { shallow } from "enzyme"; // shallow renderer
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with data provided correctly", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper.contains(<p id="err"></p>)).toBe(false);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.find("#err").text()).toBe(
    "Please provide description and amount."
  );
  expect(
    wrapper.contains(<p id="err">Please provide description and amount.</p>)
  ).toBe(true);
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: {
      value,
    },
  });
  //console.log(wrapper.state());
  expect(wrapper.state("description")).toBe(value);
  expect(wrapper.find("input").get(0).props.value).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should set note on textarea change", () => {
  const value = "new note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("note")).toBe(value);
  //console.log(wrapper.find("textarea").get(0));
  expect(wrapper.find("textarea").get(0).props.value).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

describe("test amount input valid & invalid", () => {
  const wrapper = shallow(<ExpenseForm />);
  test("should set amount on if unvalid input change", () => {
    const value = "20.006";
    wrapper.find("input").at(1).simulate("change", {
      target: {
        value,
      },
    });
    expect(wrapper.state("amount")).not.toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
  test("should set amount on if valid input change", () => {
    const value = "20.08";
    wrapper.find("input").at(1).simulate("change", {
      target: {
        value,
      },
    });
    expect(wrapper.state("amount")).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
});

test("should call on Submit for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error")).toBe("");
  //expect(onSubmitSpy).toHaveBeenCalled();
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test("should set new date on date change", () => {
  const inputFunction = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(inputFunction);
  expect(wrapper.state("createdAt")).toBe(inputFunction);
});

test("should set focused on date change", () => {
  const inputFunction = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({
    focused: inputFunction,
  });
  expect(wrapper.state("calendarFocused")).toBe(inputFunction);
});
