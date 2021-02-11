import moment from "moment";

const filter = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const altFilter = {
  text: "b",
  sortBy: "amount",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

export { filter, altFilter };
