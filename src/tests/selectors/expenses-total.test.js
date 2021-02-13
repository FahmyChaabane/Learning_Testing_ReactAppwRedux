import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

// SELECTOR TOTAL AMOUNT TEST

test("should calculate on an empty array", () => {
  const result = getExpensesTotal([]);
  expect(result).toStrictEqual(0);
});

test("should calculate on a one element array", () => {
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toStrictEqual(expenses[0].amount);
});

test("should calculate on an non-empty array", () => {
  const result = getExpensesTotal(expenses);
  expect(result).toStrictEqual(
    expenses[2].amount + expenses[0].amount + expenses[1].amount
  );
});
