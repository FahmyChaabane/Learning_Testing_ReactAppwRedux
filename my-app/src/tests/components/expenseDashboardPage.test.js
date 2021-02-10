import React from "react";
import { shallow } from "enzyme"; // shallow renderer
import { ExpenseDashboardPage } from "../../components/ExpenseDashboardPage";

test("should render ExpenseListItem correctly", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});