import { render, screen } from "@testing-library/react";
import SectionWrapper from "../SectionWrapper";
import kids from "src/assets/images/kids.webp";

const data = {
  key: "kids",
  title: "Create profiles for children.",
  desc: `Send children on adventures with their favourite characters in a space made just for them – free with your membership.`,
  img: kids,
};

describe("test SectionWrapper", () => {
  beforeEach(() => {
    render(
      <SectionWrapper img={data.img} title={data.title} desc={data.desc} />
    );
  });

  test("should display title", () => {
    expect(screen.getByTestId("title")).toHaveTextContent(data.title);
  });

  test("should display desc", () => {
    expect(screen.getByTestId("desc")).toHaveTextContent(data.desc);
  });

  test("should show image with correct src", () => {
    const img = screen.getByTestId("backdrop_path") as HTMLImageElement;
    expect(img.src.split("/").pop()).toBe(data.img);
  });
});
