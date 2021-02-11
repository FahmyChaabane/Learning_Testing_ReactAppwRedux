import React from "react";
import { shallow } from "enzyme"; // shallow renderer
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("should render ExpenseList with data provided", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList with empty data provided", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
