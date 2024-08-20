import axios from "axios";
import { validateAndCleanURL } from "../helpers/validateUrl";

export class ProfileService {
  constructor(engine, filters) {
    this.engine = engine;
    this.filters = filters;
  }

  processURL(url) {
    return validateAndCleanURL(url);
  }

  async fetchProfiles(profiles) {
    const url = this.processURL(
      `${this.engine.API_URL}${this.engine.searchApiVersion}/webdir-profiles/department`
    );
    const response = await axios.post(url, {
      full_records: false,
      profiles,
    });
    return response.data;
  }

  async #getProfilesForTerm(filteredResults) {
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

  async #getProfilesForGET(filteredResults) {
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

  // This main method is called from the SearchResultsList component and adds a
  // "title" and "dept_name" field to the individual results. Used in dataConverter.js
  async processProfiles(term, filteredResults) {
    if (term) {
      return await this.#getProfilesForTerm(filteredResults);
    } else if (this.engine.method === "GET") {
      return await this.#getProfilesForGET(filteredResults);
    } else {
      return filteredResults;
    }
  }
}
