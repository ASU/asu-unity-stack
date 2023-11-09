export function useFetch<T>(): [FetchResponse<T>, (url: string) => void];

export function useMediaQuery(query: string): boolean;

export function idGenerator(
  key?: string,
  startIndex?: number
): Generator<string, string, string>;

export function sanitizeDangerousMarkup(content: string):
  | {
      __html: string;
    }
  | undefined;

export function spreadClasses(classes: string[]): string;
