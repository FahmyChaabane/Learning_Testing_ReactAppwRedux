import authReducer from "../../reducers/auth";

test("should return state when login", () => {
  const uid = "25VFD6DEe9D";
  const result = authReducer(
    {},
    {
      type: "LOGIN",
      uid,
    }
  );
  expect(result).toEqual({ uid });
});

test("should return state when logout", () => {
  const result = authReducer(
    {},
    {
      type: "LOGOUT",
    }
  );
  expect(result).toEqual({});
});
