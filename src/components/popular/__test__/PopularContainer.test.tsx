import { render, screen, waitFor } from "@testing-library/react";
import PopularContainer from "../PopularContainer";
import { PopularHeaderType } from "src/common/enums/PopularHeaderType";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { ItemListWithResultMock } from "src/common/mock-data/ListItemMock";

const server = setupServer(
  rest.get("https://api.themoviedb.org/3/discover/movie", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ItemListWithResultMock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should render 5 items", async () => {
  render(<PopularContainer type={PopularHeaderType.movie} />);
  await waitFor(() => screen.getAllByTestId("item-list"));
  expect(screen.getAllByTestId("item-list").length).toBe(5);
});
