import { renderHook, waitFor } from "@testing-library/react";
import useFetchData from "../useFetchData";
import { FetchDataResponse, Photo } from "../../types/data";

const mockPhotos: Photo[] = [
  { id: 1, url: "url", title: "title", description: "description", user: 1 },
  { id: 2, url: "url", title: "title", description: "description", user: 2 },
];

const mockApiResponse: FetchDataResponse = {
  limit: 10,
  message: "message",
  offset: 5,
  photos: mockPhotos,
  success: true,
  total_photos: 20,
};

describe("useFetchData", () => {
  it("should fetch data from the provided URL", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockApiResponse),
    });

    const { result } = renderHook(() => useFetchData("/api/photos"));

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data).toEqual(mockPhotos);
    expect(result.current.error).toEqual(undefined);
  });

  it("should handle fetch errors", async () => {
    const fetchError = new Error("Fetch error");
    global.fetch = jest.fn().mockRejectedValue(fetchError);

    const { result } = renderHook(() => useFetchData("/api/photos"));

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data).toEqual(null);
    expect(result.current.error).toEqual(fetchError);
  });
});
