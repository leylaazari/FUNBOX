import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should display title", () => {
  render(<Header title="watch" />);
  expect(screen.getByTestId("header-title")).toHaveTextContent("watch list");
});
