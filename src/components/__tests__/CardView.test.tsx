import { render, screen } from "@testing-library/react";
import CardView from "../CardView";
import DataContext from "../../contexts/DataContext";
import { Photo } from "../../types/data";

const mockPhotos: Photo[] = [
  { id: 1, url: "url", title: "title", description: "description", user: 1 },
];

describe("CardView", () => {
  it("should render correctly", () => {
    const { container } = render(
      <DataContext.Provider value={mockPhotos}>
        <CardView />
      </DataContext.Provider>
    );

    expect(container).toBeVisible();

    const title = screen.getByText("title");
    const description = screen.getByText("description");
    const img = screen.getByRole("img");

    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(img).toBeVisible();
    expect(img.src).toContain("url");
  });
});
