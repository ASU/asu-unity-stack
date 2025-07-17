export type UseFetchTuple<S> = [FetchResponse<S>, FetchCallback];
export type FetchResponse<E> = {
    data: E;
    loading: boolean;
    error: object;
};
export type FetchCallback = (url: string) => void;
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
export function useFetch<T>(): [FetchResponse<T>, FetchCallback];
