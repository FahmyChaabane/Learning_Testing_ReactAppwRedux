import moment from "moment";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

// SET_END_DATE ACTION
describe("set end date action generator test", () => {
  test("with params provided", () => {
    const result = setEndDate(moment(0));
    expect(result).toStrictEqual({
      type: "SET_END_DATE",
      endDate: moment(0),
    });
  });
});

// SET_START_DATE ACTION
describe("set start date action generator test", () => {
  test("with params provided", () => {
    const result = setStartDate(moment(0));
    expect(result).toStrictEqual({
      type: "SET_START_DATE",
      startDate: moment(0),
    });
  });
});

// SET_TEXT_FILTER ACTION
describe("add action generator test", () => {
  test("with params provided", () => {
    const text = "text";
    const result = setTextFilter(text);
    expect(result).toStrictEqual({
      type: "SET_TEXT_FILTER",
      text,
    });
  });
  test("with default params provided", () => {
    const result = setTextFilter();
    expect(result).toStrictEqual({
      type: "SET_TEXT_FILTER",
      text: "",
    });
  });
});

// SET_SORTBY_AMOUNT ACTION
describe("set sort by amount action generator test", () => {
  test("with no params provided", () => {
    const result = sortByAmount();
    expect(result).toStrictEqual({
      type: "SORT_BY_AMOUNT",
    });
  });
});

// SET_SORTBY_DATE ACTION
describe("set sort by date action generator test", () => {
  test("with no params provided", () => {
    const result = sortByDate();
    expect(result).toStrictEqual({
      type: "SORT_BY_DATE",
    });
  });
});
