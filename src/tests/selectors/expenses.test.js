import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

// SELECTOR EXPENSES TEST
describe("filter expenses test", () => {
  test("with default filter", () => {
    const filter = {
      text: "",
      sortBy: "",
      startDate: undefined,
      endDate: undefined,
    };
    const result = selectExpenses(expenses, filter);
    //console.log(result);
    expect(result).toStrictEqual(expenses);
  });

  test("with text filter", () => {
    const filter = {
      text: "a",
      sortBy: "",
      startDate: undefined,
      endDate: undefined,
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toStrictEqual([expenses[0], expenses[1]]);
  });

  test("with start_date filter", () => {
    const filter = {
      text: "",
      sortBy: "",
      startDate: moment(0),
      endDate: undefined,
    };
    const result = selectExpenses(expenses, filter);

    expect(result).toStrictEqual([expenses[0], expenses[2]]);
  });

  test("with end_date filter", () => {
    const filter = {
      text: "",
      sortBy: "",
      startDate: undefined,
      endDate: moment(0),
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toStrictEqual([expenses[0], expenses[1]]);
  });

  test("with sort by date filter", () => {
    const filter = {
      text: "",
      sortBy: "date",
      startDate: undefined,
      endDate: undefined,
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toStrictEqual([expenses[2], expenses[0], expenses[1]]);
  });

  test("with sort by amount filter", () => {
    const filter = {
      text: "",
      sortBy: "amount",
      startDate: undefined,
      endDate: undefined,
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toStrictEqual([expenses[2], expenses[0], expenses[1]]);
  });
});
