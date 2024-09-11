// @ts-check
import { AsuRfi } from "..";

import { DATA_SOURCE, KEY } from "../../core/utils/constants";
import { defaultArgs, Template } from "./story.helper";

export default {
  title: "UDS/Testing",
  component: AsuRfi,
  parameters: {
    docs: {
      description: {
        component: `TODO Put the AsuRfi docs here. Empower all the people!
        `,
      },
    },
  },
};

const testingDefaultArgs = { ...defaultArgs, test: true };

export const AreaOfInterestOptional = {
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    areaOfInterestOptional: true,
  },
};

export const ProgramOfInterestOptional = {
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    programOfInterestOptional: true,
  },
};

export const OnlineProgramWithConcentration = {
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    campus: KEY.ONLINE,
    variant: KEY.VARIANT2,
    studentType: KEY.GRADUATE,
    programOfInterest: "LWLW-LWLGSMLEGS--CONFLICTLAW",
  },
};

export const TestMode = {
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    campus: KEY.GROUND, // ONLNE, GROUND, NOPREF
    studentType: KEY.GRADUATE,
    areaOfInterest: "STEM",
    programOfInterest: "TSSMACSPHD",
    country: "US",
    stateProvince: "California", // Only US states or CA provinces
  },
};

export const DevTester = {
  render: Template.bind({}),
  args: {
    ...testingDefaultArgs,
    actualCampus: "POLY", // TEMPE, DTPHX, POLY, WEST, ONLNE...
    studentType: KEY.UNDERGRAD,
    country: "DZ",
    successMsg: "Success. <strong>You made it.</strong>",
    dataSourceDegreeSearch: DATA_SOURCE.DEGREE_SEARCH,
    dataSourceAsuOnline: DATA_SOURCE.ASU_ONLINE,
    dataSourceCountriesStates: DATA_SOURCE.COUNTRIES_STATES,
  },
};
