const addTwo = (a, b) => a + b;
const generateMessage = (msg = "default msg") => `Hello ${msg}`;

test("this is an adding test", () => {
  const result = addTwo(2, 3);
  expect(result).toBe(5);
});

test("test logging msg", () => {
  const result1 = generateMessage("World");
  expect(result1).toBe("Hello World");

  const result2 = generateMessage();
  expect(result2).toBe("Hello default msg");
});
