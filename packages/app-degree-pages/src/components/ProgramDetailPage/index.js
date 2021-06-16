// @ts-check

import PropTypes, { arrayOf } from "prop-types";
import React, { useEffect, useState } from "react";

import { Loader, AtAGlance } from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import { dataSourcePropType, imagePropType } from "../../core/models";
import { buttonPropTypes } from "../../core/models/app-prop-types";
import { degreeDataPropResolverService } from "../../core/services";
import { urlResolver } from "../../core/utils/data-path-resolver";
import { AffordingCollege } from "./components/AffordingCollege";
import { ApplicationRequirements } from "./components/ApplicationRequirements";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { CareerOutlook } from "./components/CareerOutlook";
import { ChangeYourMajor } from "./components/ChangeYourMajor";
import { CustomizeYourCollegeExperience } from "./components/CustomizeYourCollegeExperience";
import { ExampleCareers } from "./components/ExampleCareers";
import { FlexibleDegreeOptions } from "./components/FlexibleDegreeOptions";
import { GlobalOpportunity } from "./components/GlobalOpportunity";
import { IntroContent } from "./components/IntroContent";
import { NextSteps } from "./components/NextSteps";
import { ProgramDescription } from "./components/ProgramDescription";
import { RequiredCourse } from "./components/RequiredCourse";
import { VideoPage } from "./components/VideoPage";

/** @typedef {import('../../core/models/program-detail-types').ProgramDetailPageProps} ProgramDetailPageProps */

/**
 *
 * @param {import("src/core/models/shared-types").DegreeDataPropResolver} resolver
 * @returns {import("src/core/models/shared-types").LinkItem[]}
 */
function getLocations(resolver) {
  const locations = [];

  if (resolver.getCampusList().length > 0)
    locations.push(
      ...resolver.getCampusList().map(location => ({
        text: location,
        url: "#",
      }))
    );

  if (resolver.getAsuOfficeLoc())
    locations.push({
      text: resolver.getAsuOfficeLoc(),
      url: "#",
    });

  if (resolver.getCampusWue())
    locations.push({
      text: resolver.getCampusWue(),
      url: "#",
    });

  return locations;
}

/**
 *
 * @param {ProgramDetailPageProps} props
 * @returns
 */
const ProgramDetailPage = ({
  dataSource,
  introContent,
  careerOutlook,
  applicationRequirements,
}) => {
  /** @type {import("../../core/hooks/use-fetch").UseFetchTuple<{ programs: {}[]}>} */
  const [{ data, loading, error }, doFetchPrograms] = useFetch();
  const [resolver, setResolver] = useState(degreeDataPropResolverService({}));

  const url = urlResolver(dataSource);

  // if (!loading && data) {
  //   debugger;
  //   console.log(resolver.getCollegeDesc());
  // }

  useEffect(() => {
    doFetchPrograms(url);
  }, [url]);

  useEffect(() => {
    const newResolver = degreeDataPropResolverService(
      data?.programs ? data?.programs[0] : {}
    );
    setResolver(newResolver);
  }, [data?.programs]);

  console.log("data", data);

  return (
    <>
      <main className="container" data-is-loading={loading}>
        {error && <div>Something went wrong ...</div>}
        {loading ? (
          <Loader />
        ) : (
          <section className="container">
            <div className="row pl-3">
              <Breadcrumbs breadcrumbs={introContent.breadcrumbs} />
            </div>
            <div className="row p-3">
              <div className="col col-sm-12 col-md-6 col-lg-6 ">
                <IntroContent
                  breadcrumbs={introContent.breadcrumbs}
                  contents={
                    introContent.contents || [
                      { text: resolver.getMarketText() },
                    ]
                  }
                />
                <ProgramDescription content={resolver.getDescrLongExtented()} />

                <RequiredCourse
                  concurrentDegreeMajorMaps={resolver.getConcurrentDegreeMajorMaps()}
                  onlineMajorMapURL={resolver.getOnlineMajorMapURL()}
                  majorMapOnCampusArchiveURL={resolver.getAsuCritTrackUrl()}
                />

                <AtAGlance
                  offeredBy={{
                    text: resolver.getCollegeDesc(),
                    url: "",
                  }}
                  locations={getLocations(resolver)}
                  firstRequirementMathCourse={resolver.getMinMathReq()}
                  mathIntensity={resolver.getMathIntensity()}
                  timeCommitment="***TBD"
                />

                <ApplicationRequirements
                  sectionHeader={applicationRequirements.sectionHeader}
                  contentText={applicationRequirements.contentText}
                  buttons={applicationRequirements.buttons}
                  accordionCards={[
                    {
                      content: {
                        header: "Aditional Requirements",
                        // Change data after filter on degree type
                        body: resolver.getDescrLongExtented5(),
                      },
                    },
                    {
                      content: {
                        header: "Transfer Admission Requirements",
                        body: resolver.getTransferAdmission(),
                      },
                    },
                  ]}
                />

                <ChangeYourMajor content={resolver.getChangeMajor()} />
              </div>
              <div className="col col-sm-12 col-md-6 col-lg-6 ">
                {introContent.video && (
                  <VideoPage
                    url={introContent.video.url}
                    vttUrl={introContent.video.vttUrl}
                    altText={introContent.video.altText}
                  />
                )}
                {introContent.image && (
                  <div className="uds-img">
                    <img
                      src={introContent.image.url}
                      className="img-fluid"
                      alt={introContent.image.altText}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="row pl-3">
              <NextSteps />

              <AffordingCollege />

              <FlexibleDegreeOptions />

              <CareerOutlook
                image={careerOutlook.image}
                contents={[{ text: resolver.getAsuCareerOpportunity() }]}
              />

              <ExampleCareers />

              <CustomizeYourCollegeExperience />

              <GlobalOpportunity />
            </div>
          </section>
        )}
      </main>
    </>
  );
};

ProgramDetailPage.propTypes = {
  dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
  introContent: PropTypes.shape({
    breadcrumbs: arrayOf(PropTypes.string),
    contents: arrayOf(PropTypes.object),
    video: PropTypes.shape({
      url: PropTypes.string,
      altText: PropTypes.string,
      vttUrl: PropTypes.string,
    }),
    image: imagePropType,
  }),
  careerOutlook: PropTypes.shape({ image: imagePropType }),
  applicationRequirements: PropTypes.shape({
    sectionHeader: PropTypes.string.isRequired,
    contentText: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
    buttons: PropTypes.arrayOf(buttonPropTypes),
  }),
};

export { ProgramDetailPage };
