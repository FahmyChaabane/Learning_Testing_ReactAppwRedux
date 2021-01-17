import moment from "moment";

const expenses = [
  {
    id: 2,
    description: "Drogba",
    note: "",
    amount: 20011,
    createdAt: 0,
  },
  {
    id: 1,
    description: "Lampard",
    note: "",
    amount: 2008,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: 3,
    description: "Terry",
    note: "",
    amount: 20026,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];

export default expenses;
