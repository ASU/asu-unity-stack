/* eslint-disable no-alert */
// @ts-check
import { Card } from "@asu-design-system/components-core";
import React from "react";

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
          <div className="col col-sm-12 col-md-4 col-lg-3">
            <Card
              type="degree"
              horizontal={false}
              clickable={false}
              image="https://picsum.photos/300/200"
              imageAltText="An example image"
              title={resolver.getMajorDesc()}
              linkLabel="View Program Details"
              linkUrl={parseMajorInfoLink(resolver, actionUrls.majorInfoUrl)}
              buttons={[
                {
                  color: "maroon",
                  size: "default",
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
