import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";

// ADD ACTION
describe("add action generator test", () => {
  test("with expenses info provided", () => {
    const result = addExpense(expenses[1]);
    expect(result).toStrictEqual({
      type: "ADD_EXPENSE",
      expense: expenses[1],
    });
  });
  // test("with default expense to be passed", () => {
  //   const expenseData = {
  //     description: "",
  //     note: "",
  //     amount: 0,
  //     createdAt: 0,
  //   };
  //   const result = addExpense();
  //   expect(result).toEqual({
  //     type: "ADD_EXPENSE",
  //     expense: {
  //       id: expect.any(String),
  //       ...expenseData,
  //     },
  //   });
  // });
});

// REMOVE ACTION
describe("remove action generator test", () => {
  test("with id provided", () => {
    const result = removeExpense({ id: "ABC1905" });
    expect(result).toStrictEqual({
      type: "REMOVE_EXPENSE",
      id: "ABC1905",
    });
  });
  test("with id not provided", () => {
    const result = removeExpense();
    expect(result).toEqual({
      type: "REMOVE_EXPENSE",
    });
  });
});

// EDIT ACTION
describe("edit action generator test", () => {
  test("with id and updates provided", () => {
    const result = editExpense("ABC1905", { note: "new note" });
    expect(result).toStrictEqual({
      type: "EDIT_EXPENSE",
      id: "ABC1905",
      updates: { note: "new note" },
    });
  });
});
