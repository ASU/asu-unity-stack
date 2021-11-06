/* eslint-disable no-alert */
// TODO: THIS COMPONENT IS CURRENTLY DEFERRED
// @ts-check
import { Card } from "@asu-ke/components-core";
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
 *
 * @param {import("..").GridListingProps} props
 * @returns
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
          <div className="col-3">
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
                  // resolver.getAcadPlan(),
                  // resolver.getMajorDesc(),
                  // resolver.getEmailAddress()
                },
                {
                  color: "gold",
                  size: "small",
                  label: "Apply",
                  onClick: () =>
                    // todo: refactor this solution
                    alert("APPLY NOW: TODO..."),
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
