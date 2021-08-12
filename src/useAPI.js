import { useState, useEffect } from "react";
import { authorised } from "./request";

export async function fetch(url,request) {
  const API = authorised();
    return await API.request({
      method: "GET",
      url: `/api/v1/${url}`,
    });
  }


export function useFetch(url, initialValue, httpMethod) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        
        const response = await fetch(url, httpMethod);

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