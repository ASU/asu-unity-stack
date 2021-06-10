// @ts-check

import { useState, useEffect } from "react";

/**
 * @typedef {{
 *    data: {
 *        programs: [Object.<string, any>]
 *    }
 *    loading: boolean
 *    error: object
 * }} FetchResponse
 * @returns {[FetchResponse, (url: string) => void]}
 */
const useFetch = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setError(null);
      setLoading(true);
      try {
        const result = await fetch(url).then(res => res.json());

        setData(result);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, loading, error }, setUrl];
};

export { useFetch };
