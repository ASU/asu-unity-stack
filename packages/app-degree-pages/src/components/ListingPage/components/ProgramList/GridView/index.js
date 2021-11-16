/* eslint-disable no-alert */
// @ts-check
import { Card } from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { AppContext } from "../../../../../core/context";
import { GRID_PROGRAMS_ID } from "../../../../../core/models";
import { degreeDataPropResolverService } from "../../../../../core/services";
import {
  parseMajorInfoLink,
  requestInfoLink,
} from "../../../../../core/services/degree-http-service";
import { degreeListPropTypes } from "../programs-prop-types";
import { SectionCard } from "./index.style";
/**
 * @param {import("..").GridListingProps} props
 * @returns {JSX.Element}
 */
function GridView({ programs, loading, actionUrls }) {
  const { defaultState, state } = useContext(AppContext);
  const propImage =
    state?.listPageProps?.programList?.settings?.cardDefaultImage?.url;
  const defaultImage = defaultState.detailPageDefault.hero.image.url;
  const imageUrl = propImage || defaultImage;

  return (
    <SectionCard
      id={GRID_PROGRAMS_ID}
      className="container row"
      data-loading={loading}
      data-testid="grid-view"
    >
      {programs.map(row => {
        const resolver = degreeDataPropResolverService(row);

        return (
          <div className="col col-sm-12 col-md-4 col-lg-3 mb-2">
            <Card
              type="degree"
              horizontal={false}
              clickable={false}
              image={imageUrl}
              imageAltText="An example image"
              title={resolver.getMajorDesc()}
              linkLabel="View Program Details"
              linkUrl={parseMajorInfoLink(resolver, actionUrls.majorInfoUrl)}
              buttons={[
                {
                  color: "maroon",
                  size: "small",
                  label: "Reqeuest Info",
                  href: requestInfoLink(),
                },
                {
                  color: "gold",
                  size: "small",
                  label: "Apply",
                  href: actionUrls.applyNowUrl,
                },
              ]}
            />
          </div>
        );
      })}
    </SectionCard>
  );
}

GridView.propTypes = {
  ...degreeListPropTypes,
};

export { GridView };
