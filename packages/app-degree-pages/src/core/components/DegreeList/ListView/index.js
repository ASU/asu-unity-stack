import { Card } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param {import("..").GridListingProps} props
 * @returns
 */
function DegreeListView({ programms, loading }) {
  return (
    <section className="container row">
      {programms.map(p => (
        <div className="col-4">
          <Card
            type="degree"
            horizontal={false}
            clickable={false}
            image="https://picsum.photos/300/200"
            imageAltText="An example image"
            title="Default title"
            body="Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur a."
            linkLabel="View Program Details"
            linkUrl="/"
            buttons={[
              {
                color: "maroon",
                size: "default",
                label: "Reqeuest Info",
              },
              {
                color: "gold",
                size: "small",
                label: "Apply",
              },
            ]}
          />
        </div>
      ))}
    </section>
  );
}

DegreeListView.propTypes = {
  programms: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

export { DegreeListView };
