// @ts-check

import { useState, useEffect } from "react";

/**
 * @template S
 * @typedef {[FetchResponse<S>, FetchCallback]} UseFetchTuple
 */

/**
 * @template E
 * @typedef {{
 *    data: E
 *    loading: boolean
 *    error: object
 * }} FetchResponse
 */

/**
 *  @typedef {(url: string) => void} FetchCallback
 */

/**
 * @template T
 * @returns {[
 * FetchResponse<T>, FetchCallback]}
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
        console.error(err);
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, loading, error }, setUrl];
};

export { useFetch };
