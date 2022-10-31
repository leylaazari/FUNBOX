import { render, screen } from "@testing-library/react";
import List from "../list/List";
import { ItemListMock } from "src/common/mock-data/ListItemMock";
import { ListType } from "src/common/enums/ListType";

describe("test render items", () => {
  test("should render 5 items", () => {
    render(<List items={ItemListMock} type={ListType.Search} />);
    expect(screen.getAllByTestId("item-list").length).toBe(5);
  });

  test("should show 'List is empty.' error", () => {
    render(<List items={[]} type={ListType.Search} />);
    expect(screen.getByTestId("empty-list")).toBeInTheDocument();
  });
});
