const firebase = jest.requireActual("firebase");
firebase.initializeApp = jest.fn();

const data = { name: "data" };
const snapshot = {
  val: () => data,
  exportVal: () => data,
  exists: jest.fn(() => true),
};

const database = jest.fn().mockReturnValue({
  ref: jest.fn().mockReturnThis(),
  on: jest.fn((eventType, callback) => callback(snapshot)),
  update: jest.fn(() => Promise.resolve(snapshot)),
  remove: jest.fn(() => Promise.resolve()),
  once: jest.fn(() => Promise.resolve(snapshot)),
});

export default firebase;
