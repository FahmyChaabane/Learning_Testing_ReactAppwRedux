import React from "react";
import { shallow } from "enzyme"; // shallow renderer
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { altFilter, filter } from "../fixtures/filters";
import moment from "moment";

let wrapper, setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount;

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filter}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with altered state correctly", () => {
  wrapper.setProps({ filters: altFilter });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "value test";
  wrapper.find("input").at(0).simulate("change", {
    target: {
      value,
    },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  wrapper.setProps({ filters: altFilter });
  wrapper
    .find("select")
    .at(0)
    .simulate("change", {
      target: {
        value: "date",
      },
    });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  wrapper
    .find("select")
    .at(0)
    .simulate("change", {
      target: {
        value: "amount",
      },
    });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes", () => {
  const setCalendarFocused = jest.fn();
  const handleChange = jest.spyOn(React, "useState");
  handleChange.mockImplementation((calendarFocused) => [
    calendarFocused,
    setCalendarFocused,
  ]);
  wrapper.find("DateRangePicker").prop("onFocusChange")("endDate");
  expect(setCalendarFocused).toBeTruthy();
});
