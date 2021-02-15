import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
//jest.mock("firebase");

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

test("should add expense to database and store", () => {
  const store = mockStore({});
  const expense = {
    description: "description1",
    note: "note1",
    amount: 10,
    createdAt: 1000,
  };
  store.dispatch(addExpense(expense));
  const actions = store.getActions();
  //console.log(actions);
  /*
  return store.dispatch(startAddExpense(expense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(success());
  });
  */
});

/*
test("myFIREBASE_TEST", () => {
  return database.ref("expenses").remove();
});
*/
// ADD ACTION
describe("add action generator test", () => {
  test("with expenses info provided", () => {
    const result = addExpense(expenses[1]);
    expect(result).toStrictEqual({
      type: "ADD_EXPENSE",
      expense: expenses[1],
    });
  });

  /*
  test("should add expense with default data to database and store", () => {
    expect(1).toEqual(2);
  });
  */
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
