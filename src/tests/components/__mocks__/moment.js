const Actualmoment = jest.requireActual("moment");

export default (timestamp = 0) => {
  return Actualmoment(timestamp);
};
