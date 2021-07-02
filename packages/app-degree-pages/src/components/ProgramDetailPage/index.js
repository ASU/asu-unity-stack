// @ts-check
import { AnchorMenu, Hero } from "@asu-design-system/components-core";
import PropTypes, { arrayOf } from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ErrorAlert, Loader, Main, ThemeStyle, Video } from "../../core/components";
import { programDetailFields } from "../../core/constants";
import { useFetch } from "../../core/hooks/use-fetch";
import {
  dataSourcePropType,
  imagePropType,
  linkPropType,
  cardPropTypes,
  videoPropType,
  progDetailSectionIds,
} from "../../core/models";
import {
  degreeDataPropResolverService,
  getCampusLocations,
} from "../../core/services";
import {
  formatAcceleratedConcurrentLinks,
  formatCareerData,
  urlResolver,
} from "../../core/utils";
import { AffordingCollege } from "./components/AffordingCollege";
import { ApplicationRequirements } from "./components/ApplicationRequirements";
import { AtAGlance } from "./components/AtAGlance";
import { AttendOnline } from "./components/AttendOnline";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { CareerOutlook } from "./components/CareerOutlook";
import { ChangeYourMajor } from "./components/ChangeYourMajor";
import { ExampleCareers } from "./components/ExampleCareers";
import { FlexibleDegreeOptions } from "./components/FlexibleDegreeOptions";
import { GlobalOpportunity } from "./components/GlobalOpportunity";
import { MarketText } from "./components/MarketText";
import { NextSteps } from "./components/NextSteps";
import { ProgramContactInfo } from "./components/ProgramContactInfo";
import { ProgramDescription } from "./components/ProgramDescription";
import { RequiredCourse } from "./components/RequiredCourse";

/** @typedef {import('../../core/models/program-detail-types').ProgramDetailPageProps} ProgramDetailPageProps */

const VideoWrapper = styled.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

/**
 *
 * @param {ProgramDetailPageProps} props
 * @returns
 */
const ProgramDetailPage = ({
  dataSource,
  hero,
  introContent,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  attendOnline,
  programContactInfo,
  nextSteps,
}) => {
  /** @type {import("../../core/hooks/use-fetch").UseFetchTuple<{ programs: {}[]}>} */
  const [{ data, loading, error }, doFetchPrograms] = useFetch();
  const [resolver, setResolver] = useState(degreeDataPropResolverService({}));

  const url = urlResolver(dataSource, programDetailFields);

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
      <ThemeStyle />

      {error && <ErrorAlert message="Something went wrong ..." />}

      {hero ? (
        <section>
          <Hero
            image={hero.image}
            title={{ ...hero.title, maxWidth: "100%" }}
            contents={hero.contents}
          />
        </section>
      ) : null}
      <AnchorMenu
        items={Object.values(progDetailSectionIds).map(item => ({
          ...item,
          icon: null,
        }))}
      />
      <Main data-is-loading={loading} className="main-section">
        {loading ? (
          <Loader />
        ) : (
          <section className="container mt-4">
            {introContent?.breadcrumbs ? (
              <div className="row">
                <Breadcrumbs breadcrumbs={introContent.breadcrumbs} />
              </div>
            ) : null}

            <div className="row flex-column-reverse flex-sm-row">
              <div className="col col-sm-12 col-md-7 col-lg-7">
                {introContent ? (
                  <section className="intro">
                    {!introContent.hideMarketText &&
                    resolver.getMarketText() ? (
                      <MarketText
                        breadcrumbs={introContent?.breadcrumbs}
                        contents={
                          introContent?.contents || [
                            { text: resolver.getMarketText() },
                          ]
                        }
                      />
                    ) : null}

                    {!introContent.hideProgramDesc ? (
                      <ProgramDescription
                        content={resolver.getDescrLongExtented()}
                      />
                    ) : null}

                    {!introContent.hideRequiredCourses ? (
                      <RequiredCourse
                        concurrentDegreeMajorMaps={resolver.getConcurrentDegreeMajorMaps()}
                        onlineMajorMapURL={resolver.getOnlineMajorMapURL()}
                        majorMapOnCampusArchiveURL={resolver.getAsuCritTrackUrl()}
                      />
                    ) : null}
                  </section>
                ) : null}

                {!atAGlance?.hide ? (
                  <AtAGlance
                    offeredBy={
                      atAGlance?.offeredBy || {
                        text: resolver.getCollegeDesc(),
                        url: "",
                      }
                    }
                    locations={
                      atAGlance?.locations || getCampusLocations(resolver)
                    }
                    firstRequirementMathCourse={
                      atAGlance?.firstRequirementMathCourse ||
                      resolver.getMinMathReq()
                    }
                    mathIntensity={
                      atAGlance?.mathIntensity || resolver.getMathIntensity()
                    }
                  />
                ) : null}

                {!applicationRequirements?.hide ? (
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
                ) : null}

                {!changeMajorRequirements?.hide ? (
                  <ChangeYourMajor content={resolver.getChangeMajor()} />
                ) : null}
              </div>
              <div className="col col-sm-12 col-md-5 col-lg-5">
                {introContent?.video && (
                  <VideoWrapper>
                    <Video
                      url={introContent.video.url}
                      vttUrl={introContent.video.vttUrl}
                      altText={introContent.video.altText}
                    />
                  </VideoWrapper>
                )}
                {introContent?.image && (
                  <div className="uds-img pt-3 pb-3">
                    <img
                      src={introContent.image.url}
                      className="img-fluid"
                      alt={introContent.image.altText}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              {nextSteps ? <NextSteps cards={nextSteps.cards} /> : null}

              {!affordingCollege?.hide ? <AffordingCollege /> : null}

              {!flexibleDegreeOptions?.hide &&
                resolver.hasConcurrentOrAccelerateDegrees() && (
                  <FlexibleDegreeOptions
                    acceleratedLinks={formatAcceleratedConcurrentLinks(
                      resolver.getAccelerateDegrees()
                    )}
                    concurrentLinks={formatAcceleratedConcurrentLinks(
                      resolver.getConcurrentDegrees()
                    )}
                  />
                )}

              {careerOutlook ? (
                <CareerOutlook
                  image={careerOutlook.image}
                  contents={[{ text: resolver.getAsuCareerOpportunity() }]}
                />
              ) : null}

              {!exampleCareers?.hide && resolver.hasCareerData() && (
                <ExampleCareers
                  tableData={formatCareerData(resolver.getCareerData())}
                />
              )}

              {/* <CustomizeYourCollegeExperience /> */}

              {globalOpportunity ? (
                <GlobalOpportunity
                  contents={[{ text: resolver.getGlobalExp() }]}
                  image={globalOpportunity.image}
                />
              ) : null}

              {attendOnline ? (
                <AttendOnline
                  learnMoreLink={resolver.getCurriculumUrl()}
                  image={attendOnline.image}
                />
              ) : null}
            </div>

            {programContactInfo ? (
              <div className="row">
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
            ) : null}
          </section>
        )}
      </Main>
    </>
  );
};

ProgramDetailPage.propTypes = {
  dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
  hero: PropTypes.shape(Hero.propTypes),
  introContent: PropTypes.shape({
    hideMarketText: PropTypes.bool,
    hideProgramDesc: PropTypes.bool,
    hideRequiredCourses: PropTypes.bool,
    breadcrumbs: arrayOf(linkPropType),
    contents: arrayOf(PropTypes.object),
    video: videoPropType,
    image: imagePropType,
  }),
  atAGlance: PropTypes.shape({
    hide: PropTypes.bool,
    offeredBy: linkPropType,
    locations: arrayOf(linkPropType),
    firstRequirementMathCourse: PropTypes.string,
    mathIntensity: PropTypes.string,
    timeCommitment: PropTypes.string,
  }),
  applicationRequirements: PropTypes.shape({ hide: PropTypes.bool }),
  changeMajorRequirements: PropTypes.shape({ hide: PropTypes.bool }),
  affordingCollege: PropTypes.shape({ hide: PropTypes.bool }),
  flexibleDegreeOptions: PropTypes.shape({ hide: PropTypes.bool }),
  careerOutlook: PropTypes.shape({ image: imagePropType }),
  exampleCareers: PropTypes.shape({ hide: PropTypes.bool }),
  globalOpportunity: PropTypes.shape({ image: imagePropType }),
  attendOnline: PropTypes.shape({ image: imagePropType }),
  programContactInfo: PropTypes.shape({
    departmentUrl: PropTypes.string,
    emailUrl: PropTypes.string,
  }),
  nextSteps: PropTypes.shape({
    cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  }),
};

export { ProgramDetailPage };
