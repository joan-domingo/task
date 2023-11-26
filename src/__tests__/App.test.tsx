import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import useFetchData from "../hooks/useFetchData";
const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

let mockDataResult: ReturnType<typeof useFetchData> = {
  data: null,
  loading: false,
  error: undefined,
};

jest.mock("../hooks/useFetchData", () => () => mockDataResult);

describe("App", () => {
  it("renders loading state", () => {
    mockDataResult = {
      loading: true,
      data: null,
      error: undefined,
    };

    render(<App />);

    const loadingMessage = screen.getByTestId("loading");
    expect(loadingMessage).toBeVisible();
  });

  it("renders error state", async () => {
    mockDataResult = {
      loading: false,
      data: null,
      error: new Error("Error!!!"),
    };

    render(<App />);

    await waitFor(() => {
      const errorMessage = screen.getByText("Something went wrong!");
      expect(errorMessage).toBeVisible();
    });
  });

  it("renders the photo gallery", async () => {
    mockDataResult = {
      loading: false,
      data: [],
      error: undefined,
    };

    render(<App />);

    await waitFor(() => {
      const photoGallery = screen.getByTestId("photo-gallery");
      expect(photoGallery).toBeVisible();
    });
  });

  it("did not find a11y issues", async () => {
    mockDataResult = {
      loading: false,
      data: [
        {
          id: 1,
          url: "url",
          title: "title",
          description: "description",
          user: 1,
        },
        {
          id: 2,
          url: "url",
          title: "title",
          description: "description",
          user: 2,
        },
      ],
      error: undefined,
    };

    const { container } = render(<App />);

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
