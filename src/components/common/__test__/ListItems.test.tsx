import { render, screen } from "@testing-library/react";
import ListItems from "../list/ListItems";
import { ItemListMock } from "src/common/mock-datas/ListItemMock";
import { ListType } from "src/common/enums/ListType";

const toggleFavourite = () => {};
const toggleWatchList = () => {};

describe("test detail of list item", () => {
  beforeEach(() => {
    render(
      <ListItems
        data={{
          items: ItemListMock,
          toggleFavourite: toggleFavourite,
          toggleWatchList: toggleWatchList,
          type: ListType.Search,
        }}
        index={0}
        style={{}}
      />
    );
  });

  test("should render 1 items", async () => {
    expect(await screen.getAllByTestId("item-list")).toHaveLength(1);
  });

  test("should render original_title", () => {
    expect(
      screen.getByText(ItemListMock[0].original_title)
    ).toBeInTheDocument();
  });

  test("should render vote_average", () => {
    expect(screen.getAllByTestId("vote_average")[0]).toHaveTextContent(
      ItemListMock[0].vote_average.toString()
    );
  });

  test("should render release_date", () => {
    expect(screen.getAllByTestId("release_date")[0]).toHaveTextContent(
      ItemListMock[0].release_date
    );
  });

  test("should render popularity", () => {
    expect(screen.getAllByTestId("popularity")[0]).toHaveTextContent(
      ItemListMock[0].popularity.toString()
    );
  });

  test("should render overview", () => {
    expect(screen.getAllByTestId("overview")[0]).toHaveTextContent(
      ItemListMock[0].overview
    );
  });

  test("should show image with correct src", () => {
    const img = screen.getAllByTestId("backdrop_path")[0] as HTMLImageElement;
    expect(img.src).toBe(
      "https://image.tmdb.org/t/p/w500/snDGwQ3fbfNiGwUfT7dVPQ4MTSV.jpg"
    );
  });

  test("should show outline heart", () => {
    const icon = screen.getAllByTestId("heart")[0] as HTMLImageElement;
    expect(icon.getAttribute("fill")).toContain("gray");
    expect(icon.getAttribute("fill")).not.toContain("rgb(161, 7, 7)");
  });

  test("should show outline watchlist", () => {
    const icon = screen.getAllByTestId("watch")[0] as HTMLImageElement;
    expect(icon.getAttribute("fill")).toContain("gray");
    expect(icon.getAttribute("fill")).not.toContain("rgb(55, 129, 55)");
  });
});

describe("test watchlist and favourite display", () => {
  beforeAll(() => {
    render(
      <ListItems
        data={{
          items: ItemListMock,
          toggleFavourite: toggleFavourite,
          toggleWatchList: toggleWatchList,
          type: ListType.Search,
        }}
        index={0}
        style={{}}
      />
    );
  });

  test("should show gray heart", () => {
    const icon = screen.queryAllByTestId("heart").forEach((eachAccordian) => {
      expect(eachAccordian).toHaveAttribute("fill", "gray");
    });
  });

  test("should show gray watchlist", () => {
    const icon = screen.queryAllByTestId("watch").forEach((eachAccordian) => {
      expect(eachAccordian).toHaveAttribute("fill", "gray");
    });
  });
});
