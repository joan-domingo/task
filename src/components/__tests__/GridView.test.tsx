import { render, screen } from "@testing-library/react";
import GridView from "../GridView";
import DataContext from "../../contexts/DataContext";
import { Photo } from "../../types/data";

const mockPhotos: Photo[] = [
  { id: 1, url: "url", title: "title", description: "description", user: 1 },
];

describe("GridView", () => {
  it("should render correctly", () => {
    const { container } = render(
      <DataContext.Provider value={mockPhotos}>
        <GridView />
      </DataContext.Provider>
    );

    expect(container).toBeVisible();

    const img = screen.getByRole("img");

    expect(img).toBeVisible();
    expect(img.src).toContain("url");
  });
});
