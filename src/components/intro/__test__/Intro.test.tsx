import { render, screen } from "@testing-library/react";
import Intro from "../Intro";

test("should show image with correct src", () => {
  render(<Intro />);
  expect(screen.getByTestId("imageContainer")).toBeInTheDocument();
});
