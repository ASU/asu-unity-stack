// @ts-check
import { Hero, useFetch } from "@asu/components-core";
import PropTypes, { arrayOf } from "prop-types";
import React, { useContext, useEffect, useState } from "react";

import {
  ErrorAlert,
  Loader,
  Main,
  OnThisPageAnchorMenu,
  ThemeStyle,
} from "../../core/components";
import { detailPageDefaultDataSource } from "../../core/constants";
import { AppContext, AppProvider } from "../../core/context";
import {
  anchorMenuPropType,
  cardPropShape,
  dataSourcePropShape,
  ERROR_MESSAGE,
  linkPropShape,
  imagePropShape,
  videoPropShape,
  whyChooseAsuShape,
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
import { CustomText } from "./components/CustomText";
import { ExampleCareers } from "./components/ExampleCareers";
import { FlexibleDegreeOptions } from "./components/FlexibleDegreeOptions";
import { GlobalOpportunity } from "./components/GlobalOpportunity";
import { IntroImage } from "./components/IntroImage";
import { IntroVideo } from "./components/IntroVideo";
import { MarketText } from "./components/MarketText";
import { NextSteps } from "./components/NextSteps";
import { ProgramContactInfo } from "./components/ProgramContactInfo";
import { ProgramDescription } from "./components/ProgramDescription";
import { RequiredCourse } from "./components/RequiredCourse";
import { WhyChooseAsu } from "./components/WhyChooseAsu";

/**
 * @typedef {import('../../core/types/detail-page-types').DetailPageProps} DetailPageProps
 */

/**
 * @param {DetailPageProps} props
 * @returns {JSX.Element}
 */
const DetailPage = ({
  appPathFolder: _,
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
  whyChooseAsu,
}) => {
  const [{ data, loading, error }, doFetchPrograms] = useFetch();
  const [resolver, setResolver] = useState(degreeDataPropResolverService({}));
  const [acceleratedAndConcurrentDegrees, setAcceleratedAndConcurrentDegrees] =
    useState({ accelerateData: [], concurrentData: [] });

  const url = urlResolver(dataSource, detailPageDefaultDataSource);
  const { defaultState } = useContext(AppContext);
  const { detailPageDefault } = defaultState;

  useEffect(() => {
    doFetchPrograms(url);
  }, [url]);

  useEffect(() => {
    if (data) {
      const newResolver = degreeDataPropResolverService(data);
      setResolver(newResolver);

      if (newResolver.hasConcurrentOrAccelerateDegrees()) {
        Promise.all([
          newResolver.getAccelerateDegrees(),
          newResolver.getConcurrentDegrees(),
        ])
          .then(([accelerateData, concurrentData]) => {
            console.log("accelerateData in useEffect", accelerateData);
            console.log("concurrentData in useEffect", concurrentData);

            setAcceleratedAndConcurrentDegrees(prev => ({
              ...prev,
              accelerateData: formatAcceleratedConcurrentLinks([
                ...(accelerateData || []),
              ]),
              concurrentData: formatAcceleratedConcurrentLinks([
                ...(concurrentData || []),
              ]),
            }));
          })
          .catch(error => {
            console.error("Error fetching degrees:", error);

            setAcceleratedAndConcurrentDegrees(prev => ({
              ...prev,
              accelerateData: [],
              concurrentData: [],
            }));
          });
      }
    }
  }, [data]);

  const filteredAnchorMenu = filterAnchorMenu(anchorMenu, resolver);
  return (
    <>
      <ThemeStyle />

      {error && <ErrorAlert message={ERROR_MESSAGE} />}

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

      <Main as="div" data-is-loading={loading} className="main-section">
        {loading ? (
          <Loader />
        ) : (
          <section className="container mt-4 mb-0">
            {introContent?.breadcrumbs ? (
              <div className="row col-12">
                <Breadcrumbs
                  breadcrumbs={introContent.breadcrumbs}
                  section={hero ? hero.title.text : resolver.getMajorDesc()}
                />
              </div>
            ) : null}

            <div className="row flex-column-reverse flex-sm-row">
              <div className="col col-sm-12 col-md-7 col-lg-7">
                <section className="intro">
                  {!resolver.isValidActiveProgram() ? (
                    <CustomText content={resolver.getAsuCustomText()} />
                  ) : null}

                  {!introContent?.hideMarketText &&
                  (introContent?.contents || resolver.getMarketText()) ? (
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
                      content={resolver.getFullDescription()}
                    />
                  ) : null}

                  {/* {!introContent?.hideRequiredCourses ? (
                    <RequiredCourse
                      concurrentDegreeMajorMaps={resolver.getConcurrentDegreeMajorMaps()}
                      onlineMajorMapURL={resolver.getOnlineMajorMapURL()}
                      majorMapOnCampusArchiveURL={resolver.getGeneralDegreeMajorMap()}
                    />
                  ) : null} */}
                </section>

                {!atAGlance?.hide ? (
                  <AtAGlance
                    offeredBy={
                      atAGlance?.offeredBy || {
                        text: resolver.getCollegeDesc(),
                        url: resolver.getCollegeUrl(),
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
                {!introContent?.hideRequiredCourses &&
                !resolver.isMinorOrCertificate() ? (
                  <RequiredCourse
                    onlineMajorMapURL={resolver.getOnlineMajorMapURL()}
                    majorMapOnCampusURL={resolver.getGeneralDegreeMajorMap()}
                    subPlnMajorMaps={resolver.getSubPlnMajorMaps()}
                    subPln={resolver.getSubPln()}
                  />
                ) : null}

                {!applicationRequirements?.hide ? (
                  <ApplicationRequirements
                    graduateRequirements={
                      resolver.isGradProgram()
                        ? resolver.getGraduateRequirements()
                        : null
                    }
                    isMinorOrCertificate={resolver.isMinorOrCertificate()}
                    additionalRequirements={resolver.getAdmissionsRequirementsText()}
                    transferRequirements={resolver.getTransferAdmission()}
                  />
                ) : null}

                {!changeMajorRequirements?.hide &&
                !resolver.isMinorOrCertificate() &&
                !resolver.isGradProgram() ? (
                  <ChangeYourMajor content={resolver.getChangeMajor()} />
                ) : null}
              </div>
              <div className="col col-sm-12 col-md-5 col-lg-5">
                {introContent?.video && (
                  <IntroVideo
                    type={introContent.video.type}
                    url={introContent.video.url}
                    vttUrl={introContent.video.vttUrl}
                    title={introContent.video.title}
                  />
                )}
                {!introContent?.video && (
                  <IntroImage
                    url={
                      introContent?.image?.url ||
                      detailPageDefault.introContent.image.url
                    }
                    altText={
                      introContent?.image?.altText ||
                      detailPageDefault.introContent.image.altText
                    }
                  />
                )}
              </div>
            </div>
            <div className="row">
              {!nextSteps?.hide && !resolver.isMinorOrCertificate() ? (
                <NextSteps
                  cards={nextSteps?.cards}
                  defaultCards={detailPageDefault.nextSteps.cards}
                />
              ) : null}

              {!affordingCollege?.hide ? <AffordingCollege /> : null}

              {!flexibleDegreeOptions?.hide &&
                resolver.hasConcurrentOrAccelerateDegrees() && (
                  <FlexibleDegreeOptions
                    acceleratedLinks={acceleratedAndConcurrentDegrees.accelerateData}
                    concurrentLinks={acceleratedAndConcurrentDegrees.concurrentData}
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

              {!whyChooseAsu?.hide ? (
                <WhyChooseAsu
                  sectionIntroText={
                    whyChooseAsu?.sectionIntroText ||
                    detailPageDefault.whyChooseAsu.sectionIntroText
                  }
                  cards={whyChooseAsu?.cards}
                  defaultCards={detailPageDefault.whyChooseAsu.cards}
                />
              ) : null}

              {!attendOnline?.hide && resolver.isOnline() ? (
                <AttendOnline
                  learnMoreLink={resolver.getCurriculumUrl()}
                  image={
                    attendOnline?.image || detailPageDefault.attendOnline.image
                  }
                />
              ) : null}
            </div>

            {!programContactInfo?.hide ? (
              <div className="row">
                <div className="col col-sm-12 col-md-6 col-lg-6 ">
                  <ProgramContactInfo
                    department={{
                      text: resolver.getDepartmentName(),
                      url:
                        programContactInfo?.department?.url ||
                        resolver.getPlanUrl(),
                    }}
                    email={{
                      text: resolver.getEmailAddress(),
                      url:
                        programContactInfo?.email?.url ||
                        resolver.getEmailAddress(),
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

DetailPage.propTypes = {
  appPathFolder: PropTypes.string,
  dataSource: dataSourcePropShape,
  anchorMenu: PropTypes.shape(anchorMenuPropType),
  hero: PropTypes.shape(Hero.propTypes),
  introContent: PropTypes.shape({
    hideMarketText: PropTypes.bool,
    hideProgramDesc: PropTypes.bool,
    hideRequiredCourses: PropTypes.bool,
    breadcrumbs: arrayOf(linkPropShape),
    // eslint-disable-next-line react/forbid-prop-types
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
    hide: PropTypes.bool,
    department: PropTypes.string,
    email: PropTypes.string,
  }),
  nextSteps: PropTypes.shape({
    hide: PropTypes.bool,
    cards: PropTypes.arrayOf(cardPropShape),
  }),
  whyChooseAsu: PropTypes.shape(whyChooseAsuShape),
};

/**
 * @param {DetailPageProps} props
 * @returns {JSX.Element}
 */
const AppComponent = props => (
  <AppProvider detailPageProps={props}>
    <DetailPage {...props} />
  </AppProvider>
);

AppComponent.propTypes = DetailPage.propTypes;

export { AppComponent as DetailPage };
