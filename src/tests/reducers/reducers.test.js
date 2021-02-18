import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import { v4 as uuidv4 } from "uuid";

// TEST REDUCER EXPENSES
describe("test reducer of filter", () => {
  test("the setup expenses reducer state", () => {
    const result = expenseReducer(undefined, { type: "@@INIT" });
    //console.log(result);
    expect(result).toStrictEqual([]);
  });

  test("the remove expense action with a valid id", () => {
    const result = expenseReducer(expenses, { type: "REMOVE_EXPENSE", id: 1 });
    expect(result).toStrictEqual([expenses[0], expenses[2]]);
  });

  test("the remove expense action with a non valid id", () => {
    const result = expenseReducer(expenses, { type: "REMOVE_EXPENSE", id: -1 });
    expect(result).toStrictEqual(expenses);
  });

  test("the add expense action", () => {
    const expense = {
      id: uuidv4(),
      description: "description",
      note: "note",
      amount: 10,
      createdAt: 2222,
    };
    const result = expenseReducer(undefined, { type: "ADD_EXPENSE", expense });
    expect(result).toStrictEqual([expense]);
  });

  test("the edit expense action with a valid id", () => {
    const updates = {
      description: "Drogba",
      note: "",
      amount: 1111,
      createdAt: 0,
    };
    const result = expenseReducer(expenses, {
      type: "EDIT_EXPENSE",
      id: expenses[0].id,
      updates,
    });
    expect(result[0].amount).toBe(updates.amount);
  });

  test("the edit expense action with a non valid id", () => {
    const updates = {
      id: 222,
      description: "Drogba",
      amount: 1111,
      createdAt: 0,
    };
    const result = expenseReducer(expenses, {
      type: "EDIT_EXPENSE",
      id: -1,
      updates,
    });
    expect(result).toStrictEqual(expenses);
  });

  test("should return state with expenses", () => {
    const result = expenseReducer(expenses, {
      type: "SET_EXPENSES",
      expenses: [expenses[0], expenses[1]],
    });
    expect(result).toEqual([expenses[0], expenses[1]]);
  });
});
