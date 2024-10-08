// @ts-check
import { AsuRfi } from "..";

import { DATA_SOURCE, KEY } from "../../core/utils/constants";
import { defaultArgs, Template } from "./story.helper";

export default {
  title: "UDS/AsuRfi",
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

export const Default = {
  render: Template.bind({}),
  args: { ...defaultArgs },
};

export const CollegePage = {
  render: Template.bind({}),
  args: {
    ...defaultArgs,
    college: "CHI", // CHI
  },
};

export const CollegePageWithAreaOfInterest = {
  render: Template.bind({}),
  args: {
    ...defaultArgs,
    college: "CES",
    areaOfInterest: "STEM",
  },
};

// Important note: At current, only supports Degree Search REST API degrees.
// Assumption: Degree page use case doesn't need to support ASUOnline degrees.
// Also, DS REST API returns degrees with ONLNE status, so perhaps it's covered.
export const DegreePageUndergraduate = {
  render: Template.bind({}),
  args: {
    ...defaultArgs,
    programOfInterest: "TEESTEMBAE",
  },
};

export const DegreePageGraduate = {
  render: Template.bind({}),
  args: {
    ...defaultArgs,
    programOfInterest: "TBGMCIDMGM",
  },
};

export const CollegeDepartmentPage = {
  render: Template.bind({}),
  args: {
    ...defaultArgs,
    college: "CES",
    department: "CINFOTECH",
  },
};

export const NonAcademicUnitPage = {
  render: Template.bind({}),
  args: {
    ...defaultArgs,
    areaOfInterest: "Health and Wellness",
    programOfInterestOptional: true,
  },
};

export const CertOrMinorPage = {
  render: Template.bind({}),
  args: {
    ...defaultArgs,
    programOfInterest: "LAINSCERT",
    isCertMinor: true,
    successMsg: `<div>A custom <strong>SuccessMsg</strong> supplied by you displays here.</div>`,
  },
};

export const CampaignLandingPage = {
  render: Template.bind({}),
  args: {
    ...defaultArgs,
    studentType: KEY.GRADUATE,
    programOfInterest: "BAGLSMS",
    country: "US",
    stateProvince: "New Mexico", // Only US states or CA provinces
  },
};

export const DegreeSelectedWithMultiCampus = {
  render: Template.bind({}),
  args: {
    ...defaultArgs,
    variant: KEY.VARIANT2,
    studentType: KEY.GRADUATE,
    programOfInterest: "ECSPEDMED",
  },
};
