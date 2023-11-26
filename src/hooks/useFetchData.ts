import { useState, useEffect } from "react";
import { FetchDataResponse, Photo } from "../types/data";

const useFetchData = (url: string) => {
  const [data, setData] = useState<Photo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((res: FetchDataResponse) => {
        setData(res.photos);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
