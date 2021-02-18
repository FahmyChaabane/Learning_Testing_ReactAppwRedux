import database from "../firebase/database";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => (dispatch) => {
  const {
    description = "",
    note = "",
    amount = 0,
    createdAt = 0,
  } = expenseData;
  const expense = { description, note, amount, createdAt };
  return (
    database // the return was add, cuz in test we gonna have to wait until this function is finished.. the order is establish thro
      // adding the possibilty of 'then'ing them.
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      })
  );
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id } = {}) => (dispatch) => {
  return database
    .ref(`expenses/${id}`)
    .remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    });
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const startEditExpense = (id, updates) => (dispatch) => {
  return database
    .ref(`expenses/${id}`)
    .update(updates)
    .then(() => {
      dispatch(editExpense(id, updates));
    });
};

// SET_EXPENSEs
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => (dispatch) => {
  const dataOnce = [];
  return database
    .ref("expenses")
    .once("value")
    .then((dataSnapshot) => {
      dataSnapshot.forEach((item) => {
        dataOnce.push({
          id: item.key,
          ...item.val(),
        });
      });
      dispatch(setExpenses(dataOnce));
      return dataOnce;
    });
  /*
    .then((data) => {
      dispatch(setExpenses(data));
    });*/
};
