import { render, screen } from "@testing-library/react";
import Popular from "../Popular";
import { ListItemMock } from "src/common/mock-datas/ListItemMock";

describe("test detail of list item", () => {
  beforeEach(() => {
    render(<Popular item={ListItemMock} />);
  });

  test("should render original_title", () => {
    expect(screen.getByTestId("original_title")).toHaveTextContent(
      ListItemMock.original_title
    );
  });

  test("should render release_date", () => {
    expect(screen.getByTestId("release_date")).toHaveTextContent(
      ListItemMock.release_date
    );
  });

  test("should show image with correct src", () => {
    const img = screen.getByTestId("backdrop_path") as HTMLImageElement;
    expect(img.src).toBe(ListItemMock.poster_path);
  });
});
