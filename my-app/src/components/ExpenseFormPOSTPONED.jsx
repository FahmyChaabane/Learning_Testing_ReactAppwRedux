import React, { useEffect, useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const ExpenseForm = (props) => {
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [createdAt, setCreatedAt] = useState(moment());
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (props.expense) {
      console.log(props.expense);
      setDescription(props.expense.description);
      setNote(props.expense.note);
      setAmount((props.expense.amount / 100).toString());
      setCreatedAt(moment(props.expense.createdAt));
    }
  }, []);

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description);
  };
  const onNoteChange = (e) => {
    const note = e.target.value;
    setNote(note);
  };
  const onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const onDateChange = (createdAt) => {
    if (createdAt) {
      setCreatedAt(createdAt);
    }
  };
  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      setError("Please provide description and amount.");
    } else {
      setError("");
      props.onSubmit({
        description: description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note: note,
      });
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={onNoteChange}
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
