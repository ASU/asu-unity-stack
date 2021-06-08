// @ts-check

import { useState, useEffect } from "react";

/**
 * @typedef {{
 *    data: {
 *        programs: [Object.<string, any>]
 *    }
 *    isLoading: boolean
 *    isError: any
 * }} FetchResponse
 * @returns {[FetchResponse, (url: string) => void]}
 */
const useFetch = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch(url).then(res => res.json());

        setData(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export { useFetch };
