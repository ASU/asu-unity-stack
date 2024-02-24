/* eslint-disable react/prop-types */
/* eslint react/jsx-props-no-spreading: "off" */
// @ts-check
import React from "react";

import { DetailPage } from ".";

import { getStoryBookBaseUrl } from "../../core/utils";

/**
 * @typedef {import('../../core/types/detail-page-types').DetailPageProps} AppProps
 */

export default {
  component: DetailPage,
  title: "Program Detail Page",
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const Template = ({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu,
}) => (
  <>
    <DetailPage
      appPathFolder={appPathFolder}
      dataSource={dataSource}
      anchorMenu={anchorMenu}
      introContent={introContent}
      hero={hero}
      atAGlance={atAGlance}
      applicationRequirements={applicationRequirements}
      changeMajorRequirements={changeMajorRequirements}
      affordingCollege={affordingCollege}
      flexibleDegreeOptions={flexibleDegreeOptions}
      careerOutlook={careerOutlook}
      exampleCareers={exampleCareers}
      globalOpportunity={globalOpportunity}
      programContactInfo={programContactInfo}
      attendOnline={attendOnline}
      nextSteps={nextSteps}
      whyChooseAsu={whyChooseAsu}
    />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img
          src="./examples/assets/img/request-form-information.jpeg"
          alt=""
          style={{
            opacity: "0.7",
            mixBlendMode: "luminosity",
            maxWidth: "100%",
            width: "100%",
          }}
        />
      </div>
    </section>
  </>
);

// ====================================================================================
// TEST:  this is just an example which shows how to parse the page URL querystring
// to get the acadPlan
// ====================================================================================
const queryAcadPlan = new URL(window.location.href).searchParams.get(
  "acadPlan"
);
// ====================================================================================

/** @type {AppProps} */
const defaultArgs = {
  appPathFolder: ".", // OPTIONAL
  dataSource: {
    acadPlan: "BABUSGLBA",
  },
  hero: null,
  anchorMenu: null,
  introContent: null,
  atAGlance: null,
  applicationRequirements: null,
  changeMajorRequirements: null,
  nextSteps: null,
  affordingCollege: null,
  flexibleDegreeOptions: null,
  careerOutlook: null,
  exampleCareers: null,
  globalOpportunity: null,
  attendOnline: null,
  programContactInfo: null,
};



/**
 * @type {{ args: AppProps }}
 */
export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
  hero: null,
  anchorMenu: null,
  introContent: null,
  atAGlance: null,
  applicationRequirements: null,
  changeMajorRequirements: null,
  nextSteps: null,
  affordingCollege: null,
  flexibleDegreeOptions: null,
  careerOutlook: null,
  exampleCareers: null,
  globalOpportunity: null,
  attendOnline: null,
  programContactInfo: null,
  whyChooseAsu: null,
};

/**
 * @type {{ args: AppProps }}
 */
export const DefaultWithGraduateDegree = Template.bind({});
DefaultWithGraduateDegree.args = {
  ...defaultArgs,
  dataSource: {
    ...defaultArgs.dataSource,
    acadPlan: "LAAUDAUDD",
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithContent = Template.bind({});
WithContent.args = {
  ...defaultArgs,
  dataSource: {
    ...defaultArgs.dataSource,
    acadPlan: "FAARTHBA", // online and on-campus major maps, no subPlans
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithNotAcceptNewStudents = Template.bind({});
WithNotAcceptNewStudents.args = {
  ...defaultArgs,
  dataSource: {
    ...defaultArgs.dataSource,
    acadPlan: "BABUSCLBA",
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithVideoAndMarketText = Template.bind({});
WithVideoAndMarketText.args = { ...defaultArgs };
WithVideoAndMarketText.args.dataSource = {
  ...WithVideoAndMarketText.args.dataSource,
  acadPlan: "LSBISBIS", // this has marketText
};
WithVideoAndMarketText.args.introContent = {
  ...WithVideoAndMarketText.args.introContent,
  image: undefined,
  video: {
    url: "./examples/assets/video/stock-video-person-drawing.mp4",
    title: "",
    vttUrl: "",
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithYoutubeVideo = Template.bind({});
WithYoutubeVideo.args = { ...defaultArgs };
WithYoutubeVideo.args.dataSource = {
  ...WithYoutubeVideo.args.dataSource,
  acadPlan: "LSBISBIS", // this has marketText
};
WithYoutubeVideo.args.introContent = {
  ...WithYoutubeVideo.args.introContent,
  image: undefined,
  video: {
    // @ts-ignore
    type: "youtube",
    url:
      "https://www.youtube.com/watch" +
      "?v=aA2DCIDNxmw&list=PLuoS9aQM7Lzurd5ezsuCIlxyag7q_c-NQ",
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithNoGlobalOpportunity = Template.bind({});
WithNoGlobalOpportunity.args = { ...defaultArgs };
WithNoGlobalOpportunity.args.dataSource = {
  ...WithNoGlobalOpportunity.args.dataSource,
  acadPlan: "ASAPSSCERT", // this has no global opportunity
};
