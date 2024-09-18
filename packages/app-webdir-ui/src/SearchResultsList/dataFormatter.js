/* eslint-disable camelcase */
import axios from "axios";

import { validateAndCleanURL } from "../helpers/validateUrl";

export class ProfileService {
  #sessionTokenPromise;

  constructor(engine, filters) {
    this.engine = engine;
    this.filters = filters;
    this.#sessionTokenPromise = null;
  }

  static processURL(url) {
    return validateAndCleanURL(url);
  }

  /**
   * Fetches profiles from the API
   * @param {Array} profiles - Array of profiles to fetch
   * @param {Boolean} fullRecords - Whether to fetch full records or not
   * @returns {Promise} - The response from the API
   * @memberof ProfileService
   * */
  async fetchProfilesFromApi(profiles, fullRecords = false) {
    await this.getSessionToken();
    const url = ProfileService.processURL(
      `${this.engine.API_URL}${this.engine.searchApiVersion}/webdir-profiles/department?client=webdir`
    );
    const response = await axios.post(
      url,
      {
        full_records: fullRecords,
        profiles,
      },
      {
        headers: {
          "X-CSRF-Token": this.sessionToken,
        },
      }
    );
    return response.data;
  }

  async getSessionToken() {
    if (!this.#sessionTokenPromise) {
      const url = ProfileService.processURL(
        `${this.engine.API_URL}/session/token`
      );
      this.#sessionTokenPromise = (async () => {
        const response = await axios.get(url);
        this.sessionToken = response.data;
        return this.sessionToken;
      })();
    }
    return this.#sessionTokenPromise;
  }

  async #getProfilesForSearch(filteredResults) {
    const profiles = filteredResults.results.map(result => ({
      asurite_id: result.asurite_id.raw,
      dept_id: null,
    }));

    const data = await this.fetchProfilesFromApi(profiles);

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

    const data = await this.fetchProfilesFromApi(profiles);

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
    await this.getSessionToken();
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
