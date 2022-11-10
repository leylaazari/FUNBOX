import { render, screen } from "@testing-library/react";
import List from "../list/List";
import { ItemListMock } from "src/common/mock-datas/ListItemMock";
import { ListType } from "src/common/enums/ListType";

describe("test render items", () => {
  test("should show 'List is empty.' error", () => {
    render(<List items={[]} type={ListType.Search} />);
    expect(screen.queryByTestId("empty-list")).toBeInTheDocument();
  });
});
