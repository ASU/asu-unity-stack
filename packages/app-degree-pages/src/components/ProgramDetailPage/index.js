// @ts-check
import { Hero, Video } from "@asu-design-system/components-core";
import PropTypes, { arrayOf } from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import {
  ErrorAlert,
  Loader,
  Main,
  OnThisPageAnchorMenu,
  ThemeStyle,
} from "../../core/components";
import { detailPageDefaultDataSource } from "../../core/constants";
import { useFetch } from "../../core/hooks/use-fetch";
import {
  anchorMenuPropType,
  cardPropShape,
  dataSourcePropShape,
  resolveDefaultProps,
  linkPropShape,
  imagePropShape,
  videoPropShape,
} from "../../core/models";
import {
  degreeDataPropResolverService,
  filterAnchorMenu,
  getCampusLocations,
  hasValidAnchorMenu,
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
  appPathFolder,
  dataSource,
  anchorMenu,
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

  const url = urlResolver(dataSource, detailPageDefaultDataSource);
  const { detailPageDefault } = useMemo(
    () => resolveDefaultProps(appPathFolder),
    []
  );

  useEffect(() => {
    doFetchPrograms(url);
  }, [url]);

  useEffect(() => {
    if (data?.programs) {
      const newResolver = degreeDataPropResolverService(
        data?.programs ? data?.programs[0] : {}
      );
      setResolver(newResolver);
    }
  }, [data?.programs]);

  const filteredAnchorMenu = filterAnchorMenu(anchorMenu, resolver);

  return (
    <>
      <ThemeStyle />

      {error && <ErrorAlert message="Something went wrong ..." />}

      {!hero?.hide ? (
        <section>
          <Hero
            image={hero?.image || detailPageDefault.hero.image}
            title={{
              ...detailPageDefault.hero.title,
              text: resolver.getMajorDesc(),
              ...hero?.title,
            }}
            contents={hero?.contents}
          />
        </section>
      ) : null}

      {!loading && hasValidAnchorMenu(filteredAnchorMenu) ? (
        <OnThisPageAnchorMenu anchorMenu={filteredAnchorMenu} />
      ) : null}

      <Main data-is-loading={loading} className="main-section">
        {loading ? (
          <Loader />
        ) : (
          <section className="container mt-4 mb-0">
            {introContent?.breadcrumbs ? (
              <div className="row col-12">
                <Breadcrumbs breadcrumbs={introContent.breadcrumbs} />
              </div>
            ) : null}

            <div className="row flex-column-reverse flex-sm-row">
              <div className="col col-sm-12 col-md-7 col-lg-7">
                <section className="intro">
                  {!introContent?.hideMarketText && resolver.getMarketText() ? (
                    <MarketText
                      contents={
                        introContent?.contents || [
                          { text: resolver.getMarketText() },
                        ]
                      }
                    />
                  ) : null}

                  {!introContent?.hideProgramDesc ? (
                    <ProgramDescription
                      content={resolver.getDescrLongExtented()}
                    />
                  ) : null}

                  {!introContent?.hideRequiredCourses ? (
                    <RequiredCourse
                      concurrentDegreeMajorMaps={resolver.getConcurrentDegreeMajorMaps()}
                      onlineMajorMapURL={resolver.getOnlineMajorMapURL()}
                      majorMapOnCampusArchiveURL={resolver.getAsuCritTrackUrl()}
                    />
                  ) : null}
                </section>

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
                          // TOD: Change data after filter on degree type
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
                      title={introContent.video.title}
                    />
                  </VideoWrapper>
                )}
                {!introContent?.video && (
                  <div className="uds-img pt-3 pb-3">
                    {introContent?.image ? (
                      <img
                        src={introContent.image.url}
                        className="img-fluid"
                        alt={introContent.image.altText}
                      />
                    ) : (
                      <img
                        src={detailPageDefault.introContent.image.url}
                        className="img-fluid"
                        alt={detailPageDefault.introContent.image.altText}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              {!nextSteps?.hide ? (
                <NextSteps
                  cards={nextSteps?.cards || detailPageDefault.nextSteps.cards}
                />
              ) : null}

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

              {!careerOutlook?.hide && resolver.getAsuCareerOpportunity() ? (
                <CareerOutlook
                  image={
                    careerOutlook?.image ||
                    detailPageDefault.careerOutlook.image
                  }
                  contents={[{ text: resolver.getAsuCareerOpportunity() }]}
                />
              ) : null}

              {!exampleCareers?.hide && resolver.hasCareerData() && (
                <ExampleCareers
                  tableData={formatCareerData(resolver.getCareerData())}
                />
              )}

              {/* <CustomizeYourCollegeExperience /> */}

              {!globalOpportunity?.hide && resolver.getGlobalExp() ? (
                <GlobalOpportunity
                  contents={[{ text: resolver.getGlobalExp() }]}
                  image={
                    globalOpportunity?.image ||
                    detailPageDefault.globalOpportunity.image
                  }
                />
              ) : null}

              {!attendOnline?.hide && resolver.getCurriculumUrl() ? (
                <AttendOnline
                  learnMoreLink={resolver.getCurriculumUrl()}
                  image={
                    attendOnline?.image || detailPageDefault.attendOnline.image
                  }
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
  appPathFolder: PropTypes.string,
  dataSource: dataSourcePropShape,
  anchorMenu: PropTypes.shape(anchorMenuPropType),
  hero: PropTypes.shape(Hero.propTypes),
  introContent: PropTypes.shape({
    hideMarketText: PropTypes.bool,
    hideProgramDesc: PropTypes.bool,
    hideRequiredCourses: PropTypes.bool,
    breadcrumbs: arrayOf(linkPropShape),
    contents: arrayOf(PropTypes.object),
    video: videoPropShape,
    image: imagePropShape,
  }),
  atAGlance: PropTypes.shape({
    hide: PropTypes.bool,
    offeredBy: linkPropShape,
    locations: arrayOf(linkPropShape),
    firstRequirementMathCourse: PropTypes.string,
    mathIntensity: PropTypes.string,
    timeCommitment: PropTypes.string,
  }),
  applicationRequirements: PropTypes.shape({ hide: PropTypes.bool }),
  changeMajorRequirements: PropTypes.shape({ hide: PropTypes.bool }),
  affordingCollege: PropTypes.shape({ hide: PropTypes.bool }),
  flexibleDegreeOptions: PropTypes.shape({ hide: PropTypes.bool }),
  careerOutlook: PropTypes.shape({
    hide: PropTypes.bool,
    image: imagePropShape,
  }),
  exampleCareers: PropTypes.shape({ hide: PropTypes.bool }),
  globalOpportunity: PropTypes.shape({
    hide: PropTypes.bool,
    image: imagePropShape,
  }),
  attendOnline: PropTypes.shape({
    hide: PropTypes.bool,
    image: imagePropShape,
  }),
  programContactInfo: PropTypes.shape({
    departmentUrl: PropTypes.string,
    emailUrl: PropTypes.string,
  }),
  nextSteps: PropTypes.shape({
    hide: PropTypes.bool,
    cards: PropTypes.arrayOf(cardPropShape).isRequired,
  }),
};

export { ProgramDetailPage };
