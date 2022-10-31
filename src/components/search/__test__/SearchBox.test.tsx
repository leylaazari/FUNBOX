import { render, screen, waitFor } from "@testing-library/react";
import SearchBox from "../SearchBox";

const handleSubmitForm = () => {};

describe("test SearchBox", () => {
  beforeEach(() => {
    render(<SearchBox handleSubmitForm={handleSubmitForm} />);
  });

  test("should display input-search", () => {
    expect(screen.getByTestId("input-search")).toBeInTheDocument();
  });

  test("should display btn-search", () => {
    expect(screen.getByTestId("btn-search")).toBeInTheDocument();
  });
});
