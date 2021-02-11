import React, { useState } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

export const ExpenseListFilters = (props) => {
  const [calendarFocused, setCalendarFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    props.setStartDate(startDate);
    props.setEndDate(endDate);
  };
  const onFocusChange = (calendarFocused) => {
    setCalendarFocused(calendarFocused);
  };
  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={(e) => {
          props.setTextFilter(e.target.value);
        }}
      />
      <select
        value={props.filters.sortBy}
        onChange={(e) => {
          if (e.target.value === "date") {
            props.sortByDate();
          } else if (e.target.value === "amount") {
            props.sortByAmount();
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={props.filters.startDate}
        endDate={props.filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (data) => dispatch(setTextFilter(data)),
    setStartDate: (data) => dispatch(setStartDate(data)),
    setEndDate: (data) => dispatch(setEndDate(data)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
  };
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
