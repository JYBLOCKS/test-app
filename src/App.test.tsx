import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should display counter, do the increment and decrement actions", () => {
    render(<App />);
    const count = screen.queryByRole("heading");
    expect(count).toHaveTextContent("0");
    /// increment
    const buttonIncrement = screen.getByRole("button", { name: "+" });
    expect(buttonIncrement).toHaveTextContent(`+`);
    fireEvent.click(buttonIncrement);
    expect(count).toHaveTextContent("1");

    /// decrement
    const buttonDecrement = screen.getByRole("button", { name: "-" });
    expect(buttonDecrement).toHaveTextContent(`-`);
    fireEvent.click(buttonDecrement);
    expect(count).toHaveTextContent("0");
  });
});
