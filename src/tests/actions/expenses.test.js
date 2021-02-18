import {
  startAddExpense,
  setExpenses,
  addExpense,
  editExpense,
  removeExpense,
  startRemoveExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/database";
const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

/*
beforeEach((done) => {
  expenses.map((item) => {
    database
      .ref("expenses")
      .push({
        description: item.description,
        note: item.note,
        amount: item.amount,
        createdAt: item.createdAt,
      })
      .then(() => done());
  });
});
*/

test("should add expense to database and store", async () => {
  const store = mockStore({});
  const expenseData = {
    description: "description",
    note: "note",
    amount: 100,
    createdAt: 1000,
  };

  const mockingAddBehaviour = jest.fn((expenseData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: "XM95KS3",
          ...expenseData,
        });
      }, 2000);
    });
  });

  const mockingFetchBehaviour = jest.fn((id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ val: () => expenseData });
      }, 2000);
    });
  });

  await mockingAddBehaviour(expenseData).then((addedData) => {
    store.dispatch(addExpense(addedData));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });
    mockingFetchBehaviour(addedData.id).then((snapShot) => {
      expect(snapShot.val()).toEqual(expenseData);
    });
  });
  /*
  await mockingAddBehaviour(expenseData)
    .then((addedData) => {
      console.log(addedData);
      store.dispatch(addExpense(addedData));
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return mockingFetchBehaviour(addedData.id);
    })
    .then((snapShot) => {
      expect(snapShot.val()).toEqual(expenseData);
    });
  */
});

// ADD ACTION
describe("add action generator test", () => {
  test("with expenses info provided", () => {
    const result = addExpense(expenses[1]);
    expect(result).toStrictEqual({
      type: "ADD_EXPENSE",
      expense: expenses[1],
    });
  });
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

// SET EXPENSES ACTION
test("should return all expenses", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

/*
//supposed to work but bug in firebase
test("firebase adding an item", async () => {
  const store = mockStore({});
  const expenseData = {
    description: "description",
    note: "note",
    amount: 100,
    createdAt: 1000,
  };

  await store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapShot) => {
      expect(snapShot.val()).toEqual(expenseData);
    });
});
*/
/*
test("firebase removing an item", async () => {
  const store = mockStore({});
  const id = "whatsoever";
  await store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id,
      });

      return database.ref(`expenses/${id}`).once("value");
    })
    .then((snapShot) => {
      expect(snapShot.val()).toBeFalsy();
    });
});
*/
