// @ts-check

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Loader, AtAGlance } from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import { dataSourcePropType } from "../../core/models";
import { degreeDataPropResolverService } from "../../core/services";
import { urlResolver } from "../../core/utils/data-path-resolver";

/** @typedef {import('../../core/models/program-detail-types').ProgramDetailPageProps} ProgramDetailPageProps */

/**
 *
 * @param {{
 *  data:  Object
 * }} props
 * @returns
 */
const PageBody = ({ data }) => {
  const resolver = degreeDataPropResolverService(data || {});

  return (
    <div>
      <AtAGlance
        offeredBy={{
          text: resolver.getMajorDesc(),
          url: "",
        }}
        locations={[
          ...resolver.getCampusList(),
          resolver.getAsuOfficeLoc(),
          resolver.getCampusWue(),
        ]}
        firstRequirementMathCourse={resolver.getMinMathReq()}
        mathIntensity={resolver.getMathIntensity()}
        timeCommitment="***TBD"
      />
    </div>
  );
};

/**
 *
 * @param {ProgramDetailPageProps} props
 * @returns
 */
const ProgramDetailPage = ({ dataSource }) => {
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
          <div>
            <AtAGlance
              offeredBy={{
                text: resolver.getCollegeDesc(),
                url: "",
              }}
              locations={[
                ...resolver.getCampusList(),
                resolver.getAsuOfficeLoc(),
                resolver.getCampusWue(),
              ]}
              firstRequirementMathCourse={resolver.getMinMathReq()}
              mathIntensity={resolver.getMathIntensity()}
              timeCommitment="***TBD"
            />
          </div>
        )}
      </main>
    </>
  );
};

ProgramDetailPage.propTypes = {
  dataSource: PropTypes.oneOfType([dataSourcePropType, PropTypes.string]),
};

export { ProgramDetailPage };
