import moment from "moment";
import filterReducer from "../../reducers/filters";

// TEST REDUCER FILTER
describe("test reducer of filter", () => {
  test("the setup filter reducer state", () => {
    const result = filterReducer(undefined, { type: "@@INIT" });
    //console.log(result);
    expect(result).toStrictEqual({
      text: "",
      sortBy: "date",
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month"),
    });
  });

  test("the sort by amount action", () => {
    const result = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(result.sortBy).toBe("amount");
  });

  test("the sort by date action", () => {
    const currentSate = {
      text: "",
      sortBy: "amount",
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month"),
    };
    const result = filterReducer(currentSate, { type: "SORT_BY_DATE" });
    expect(result.sortBy).toBe("date");
  });

  test("the set text filter action", () => {
    const result = filterReducer(undefined, {
      type: "SET_TEXT_FILTER",
      text: "text modified",
    });
    expect(result.text).toBe("text modified");
  });

  test("the set start date filter action", () => {
    const result = filterReducer(undefined, {
      type: "SET_START_DATE",
      startDate: moment(0),
    });
    expect(result.startDate).toStrictEqual(moment(0));
  });

  test("the set end date filter action", () => {
    const result = filterReducer(undefined, {
      type: "SET_END_DATE",
      endDate: moment(0),
    });
    expect(result.endDate).toStrictEqual(moment(0));
  });
});
