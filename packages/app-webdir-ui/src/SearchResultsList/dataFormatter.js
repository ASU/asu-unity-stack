/* eslint-disable camelcase */
import axios from "axios";

import { validateAndCleanURL } from "../helpers/validateUrl";

export class ProfileService {
  constructor(engine, filters) {
    this.engine = engine;
    this.filters = filters;
  }

  static processURL(url) {
    return validateAndCleanURL(url);
  }

  async fetchProfiles(profiles) {
    const url = ProfileService.processURL(
      `${this.engine.API_URL}${this.engine.searchApiVersion}/webdir-profiles/department?client=webdir`
    );
    const response = await axios.post(url, {
      full_records: false,
      profiles,
    });
    return response.data;
  }

  async #getProfilesForSearch(filteredResults) {
    const profiles = filteredResults.results.map(result => ({
      asurite_id: result.asurite_id.raw,
      dept_id: null,
    }));

    const data = await this.fetchProfiles(profiles);

    return {
      ...filteredResults,
      results: filteredResults.results.map((result, index) => ({
        ...result,
        title: data[index].title,
        dept_name: data[index].dept_name,
      })),
    };
  }

  async #getProfilesForWebDirectory(filteredResults) {
    const profiles = filteredResults.results.map(({ asurite_id, deptids }) => ({
      asurite_id: asurite_id.raw,
      dept_id: this.filters["deptIds"].find(deptId =>
        deptids.raw.includes(deptId)
      ),
    }));

    const data = await this.fetchProfiles(profiles);

    return {
      ...filteredResults,
      results: filteredResults.results.map((result, index) => ({
        ...result,
        title: data[index].title,
        dept_name: data[index].dept_name,
      })),
    };
  }

  /**
   * This method is directly called from the SearchResultsList component and adds a
   * "title" and "dept_name" field to the individual results used in dataConverter.js
   */
  async processProfiles(term, filteredResults) {
    if (!this.engine.doTitleLogic) {
      return filteredResults;
    }
    /**
     * If term is present, request is coming from search page
     */
    if (term) {
      return this.#getProfilesForSearch(filteredResults);
    }
    /**
     * If method is GET, request is coming from web directory.
     * POST requests from web directory already have dept_id available in the props
     * so this is never used for POST requests
     */
    if (this.engine.method === "GET") {
      return this.#getProfilesForWebDirectory(filteredResults);
    }
    return filteredResults;
  }
}
