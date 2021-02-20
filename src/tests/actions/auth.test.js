import { logout, login } from "../../actions/auth";

// LOGIN
test("should return login", () => {
  const uid = "XDF633ED6E";
  const result = login(uid);
  expect(result).toStrictEqual({
    type: "LOGIN",
    uid,
  });
});

// LOGIN
test("should return logout", () => {
  const result = logout();
  expect(result).toStrictEqual({
    type: "LOGOUT",
  });
});
