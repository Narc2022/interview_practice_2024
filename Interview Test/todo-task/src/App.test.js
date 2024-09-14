import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
test("change event testing", () => {
  render(<App />);
  let input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: "a" } });
  expect(input.value).toBe("atest");
});
