import { render, screen, waitFor } from "@testing-library/react";
import WatchFavouriteList from "../WatchFavouriteList";
import LocalSevice from "src/utils/api/LocalSevice";

describe("test WatchFavouriteList", () => {
  beforeEach(() => {
    render(<WatchFavouriteList title="watch" />);
  });

  test("should display title", () => {
    expect(screen.getByTestId("header-title")).toHaveTextContent("watch list");
  });

  test("should show watch list from local storage", async () => {
    let list = await LocalSevice.getDataFromLS("watch");

    if (list && list.length > 0) {
      await waitFor(() => screen.getAllByTestId("item-list"));
      expect(screen.getAllByTestId("item-list").length).toBe(list.length);
    }
  });

  test("should show favourite list from local storage", async () => {
    let list = await LocalSevice.getDataFromLS("favourite");

    if (list && list.length > 0) {
      await waitFor(() => screen.getAllByTestId("item-list"));
      expect(screen.getAllByTestId("item-list").length).toBe(list.length);
    }
  });
});
