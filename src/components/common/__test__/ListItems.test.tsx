import { render, screen } from "@testing-library/react";
import ListItems from "../list/ListItems";
import { ListItemMock } from "src/common/mock-data/ListItemMock";
import { ListType } from "src/common/enums/ListType";

const toggleFavourite = () => {};
const toggleWatchList = () => {};

describe("test detail of list item", () => {
  beforeEach(() => {
    render(
      <ListItems
        item={ListItemMock}
        type={ListType.Search}
        toggleFavourite={toggleFavourite}
        toggleWatchList={toggleWatchList}
      />
    );
  });

  test("should render original_title", () => {
    expect(screen.getByTestId("original_title")).toHaveTextContent(
      ListItemMock.original_title
    );
  });

  test("should render vote_average", () => {
    expect(screen.getByTestId("vote_average")).toHaveTextContent(
      ListItemMock.vote_average.toString()
    );
  });

  test("should render release_date", () => {
    expect(screen.getByTestId("release_date")).toHaveTextContent(
      ListItemMock.release_date
    );
  });

  test("should render popularity", () => {
    expect(screen.getByTestId("popularity")).toHaveTextContent(
      ListItemMock.popularity.toString()
    );
  });

  test("should render overview", () => {
    expect(screen.getByTestId("overview")).toHaveTextContent(
      ListItemMock.overview
    );
  });

  test("should show image with correct src", () => {
    const img = screen.getByTestId("backdrop_path") as HTMLImageElement;
    expect(img.src).toBe(ListItemMock.poster_path);
  });

  test("should show outline heart", () => {
    const icon = screen.getByTestId("heart") as HTMLImageElement;
    expect(icon.getAttribute("fill")).toContain("gray");
    expect(icon.getAttribute("fill")).not.toContain("rgb(161, 7, 7)");
  });

  test("should show outline watchlist", () => {
    const icon = screen.getByTestId("watch") as HTMLImageElement;
    expect(icon.getAttribute("fill")).toContain("gray");
    expect(icon.getAttribute("fill")).not.toContain("rgb(55, 129, 55)");
  });
});

describe("test watchlist and favourite display", () => {
  beforeEach(() => {
    ListItemMock.isFavourite = true;
    ListItemMock.isWatchLater = true;

    render(
      <ListItems
        item={ListItemMock}
        type={ListType.Search}
        toggleFavourite={toggleFavourite}
        toggleWatchList={toggleWatchList}
      />
    );
  });

  test("should show fill heart", () => {
    const icon = screen.getByTestId("heart") as HTMLImageElement;
    expect(icon.getAttribute("fill")).toContain("rgb(161, 7, 7)");
    expect(icon.getAttribute("fill")).not.toContain("gray");
  });

  test("should show fill watchlist", () => {
    const icon = screen.getByTestId("watch") as HTMLImageElement;
    expect(icon.getAttribute("fill")).toContain("rgb(55, 129, 55)");
    expect(icon.getAttribute("fill")).not.toContain("gray");
  });
});
