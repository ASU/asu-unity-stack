import { Card } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { GRID_PROGRAMS_ID } from "../../../models";
import { degreeDataPropResolverService } from "../../../services";
import {
  majorInfoLink,
  requestInfoLink,
} from "../../../services/degree-http-service";
import { SectionCard } from "./index.style";
/**
 *
 * @param {import("..").GridListingProps} props
 * @returns
 */
function DegreeListView({ programms, loading }) {
  return (
    <SectionCard id={GRID_PROGRAMS_ID} className="container row">
      {programms.map(row => {
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
              linkUrl={majorInfoLink(
                resolver.getInstitution(),
                resolver.getAcadPlan()
              )}
              buttons={[
                {
                  color: "maroon",
                  size: "default",
                  label: "Reqeuest Info",
                  href: requestInfoLink(
                    resolver.getAcadPlan(),
                    resolver.getMajorDesc(),
                    resolver.getEmailAddress()
                  ),
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

DegreeListView.propTypes = {
  programms: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

export { DegreeListView };
