// @ts-check

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Loader, AtAGlance } from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import { dataSourcePropType } from "../../core/models";
import { degreeDataPropResolverService } from "../../core/services";
import { urlResolver } from "../../core/utils/data-path-resolver";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { ChangeYourMajor } from "./components/ChangeYourMajor";
import IntroContent from "./components/IntroContent";
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
const ProgramDetailPage = ({ dataSource, introContent }) => {
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

                <section>
                  <h3>Application Requirment:</h3>
                  place holder
                </section>

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
          </section>
        )}
      </main>
    </>
  );
};

ProgramDetailPage.propTypes = {
  dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
  introContent: PropTypes.instanceOf(PropTypes.object),
};

export { ProgramDetailPage };
