// @ts-check

import PropTypes, { arrayOf } from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Loader, AtAGlance } from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import {
  dataSourcePropType,
  imagePropType,
  linkPropType,
  cardPropTypes,
} from "../../core/models";
import { degreeDataPropResolverService } from "../../core/services";
import { urlResolver } from "../../core/utils/data-path-resolver";
import { AffordingCollege } from "./components/AffordingCollege";
import { ApplicationRequirements } from "./components/ApplicationRequirements";
import { AttendOnline } from "./components/AttendOnline";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { CareerOutlook } from "./components/CareerOutlook";
import { ChangeYourMajor } from "./components/ChangeYourMajor";
import { CustomizeYourCollegeExperience } from "./components/CustomizeYourCollegeExperience";
import { ExampleCareers } from "./components/ExampleCareers";
import { FlexibleDegreeOptions } from "./components/FlexibleDegreeOptions";
import { GlobalOpportunity } from "./components/GlobalOpportunity";
import { IntroContent } from "./components/IntroContent";
import { NextSteps } from "./components/NextSteps";
import { ProgramContactInfo } from "./components/ProgramContactInfo";
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

const Main = styled.main`
  section {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

/**
 *
 * @param {ProgramDetailPageProps} props
 * @returns
 */
const ProgramDetailPage = ({
  dataSource,
  introContent,
  careerOutlook,
  globalOpportunity,
  attendOnline,
  programContactInfo,
  nextSteps,
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

  // eslint-disable-next-line no-console
  console.log("data", data);

  return (
    <>
      <Main className="container" data-is-loading={loading}>
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
              <NextSteps cards={nextSteps.cards} />

              <AffordingCollege />

              <FlexibleDegreeOptions />

              <CareerOutlook
                image={careerOutlook.image}
                contents={[{ text: resolver.getAsuCareerOpportunity() }]}
              />

              <ExampleCareers />

              <CustomizeYourCollegeExperience />

              <GlobalOpportunity
                contents={[{ text: resolver.getGlobalExp() }]}
                image={globalOpportunity.image}
              />

              <AttendOnline
                learnMoreLink={resolver.getCurriculumUrl()}
                image={attendOnline.image}
              />
            </div>
            <div className="row p-3">
              <div className="col col-sm-12 col-md-6 col-lg-6 ">
                <ProgramContactInfo
                  department={{
                    text: resolver.getGDepartmentName(),
                    url: programContactInfo.departmentUrl,
                  }}
                  email={{
                    text: resolver.getEmailAddress(),
                    url: programContactInfo.emailUrl,
                  }}
                  asuOfficeLoc={resolver.getAsuOfficeLoc()}
                  phone={resolver.getPhone()}
                />
              </div>
            </div>
          </section>
        )}
      </Main>
    </>
  );
};

ProgramDetailPage.propTypes = {
  dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
  introContent: PropTypes.shape({
    breadcrumbs: arrayOf(linkPropType),
    contents: arrayOf(PropTypes.object),
    video: PropTypes.shape({
      url: PropTypes.string,
      altText: PropTypes.string,
      vttUrl: PropTypes.string,
    }),
    image: imagePropType,
  }),
  careerOutlook: PropTypes.shape({ image: imagePropType }),
  globalOpportunity: PropTypes.shape({ image: imagePropType }),
  programContactInfo: PropTypes.shape({
    departmentUrl: PropTypes.string,
    emailUrl: PropTypes.string,
  }),
  attendOnline: PropTypes.shape({ image: imagePropType }),
  nextSteps: PropTypes.shape({
    cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  }),
};

export { ProgramDetailPage };
