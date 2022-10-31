import { render, screen } from "@testing-library/react";
import PopularHeader from "../popular-header/PopularHeader";

test("should display title in PopularHeader", () => {
  render(<PopularHeader title="the most popular kids movies" />);
  expect(screen.getByTestId("popular-header-title")).toHaveTextContent(
    "the most popular kids movies"
  );
});
