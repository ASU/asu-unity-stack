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
 * @returns {[FetchResponse<T>, FetchCallback]}
 */
const useFetch = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!url) return;

    /* TODO:
      for some reason `async/await` throuw an error  `Uncaught ReferenceError: regeneratorRuntime is not defined`
      in News Component when the it used a vanillaJS component.
      The plugin "@babel/plugin-transform-runtime" it is suppssed to fix it but it does not.
    */
    // const fetchData = async () => {
    //   setError(null);
    //   setLoading(true);
    //   try {
    //     const result = await fetch(url).then(res => res.json());

    //     setData(result);
    //   } catch (err) {
    //     setError(err);
    //   }

    //   setLoading(false);
    // };
    // TODO: temporary solution to overcome the above issue
    const fetchData = () => {
      setError(null);
      setLoading(true);
      try {
        fetch(url)
          .then(res => res.json())
          .then(result => {
            setData(result);
            setLoading(false);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          });
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return [{ data, loading, error }, setUrl];
};

export { useFetch };
