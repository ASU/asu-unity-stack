// @ts-check
import { computePages } from "./compute-pages";
import { dataPathResolver } from "./data-path-resolver";
import { fetchData } from "./fetch-data";
import { idGenerator } from "./id-generator";
import { toTitleCase } from "./string-utils";

export * from "./html-utils";
export * from "./css-utils";
export { dataPathResolver, idGenerator, toTitleCase, fetchData, computePages };
