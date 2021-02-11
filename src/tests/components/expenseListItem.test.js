import React from "react";
import { shallow } from "enzyme"; // shallow renderer
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("should render ExpenseListItem with data provided", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
