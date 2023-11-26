import { fireEvent, render, screen } from "@testing-library/react";
import PhotoGallery from "../PhotoGallery";

describe("PhotoGallery", () => {
  it("should render correctly", () => {
    const { container } = render(<PhotoGallery />);
    expect(container).toBeVisible();

    // default view
    const cardView = screen.getByTestId("card-view");
    expect(cardView).toBeVisible();

    // switch to grid view
    const gridViewButton = screen.getAllByRole("button")[2];
    fireEvent.click(gridViewButton);
    const gridView = screen.getByTestId("grid-view");
    expect(gridView).toBeVisible();

    // switch to list view
    const listViewButton = screen.getAllByRole("button")[3];
    fireEvent.click(listViewButton);
    const listView = screen.getByTestId("list-view");
    expect(listView).toBeVisible();

    // switch to carousel view
    const carouselViewButton = screen.getAllByRole("button")[1];
    fireEvent.click(carouselViewButton);
    const carouselView = screen.getByTestId("carousel-view");
    expect(carouselView).toBeVisible();
  });
});
