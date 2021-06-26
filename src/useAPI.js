import { useState, useEffect } from "react";
import { authorised } from "./request";

export async function fetch(url) {
  const API = authorised();

  return await API.request({
    method: "GET",
    url: `/api/v1/${url}`,
  });
}

export function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);

        const response = await fetch(url);

        setData(response.data);
      } catch (e) {
        setError(e.response.data.detail || "Error occured");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    setData: (data) => setData(data),
    error,
  };
}