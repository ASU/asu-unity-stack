// @ts-check
import { Card } from "@asu-design-system/components-core";
import React from "react";

import { progDetailSectionIds } from "../../../../core/models";
import { Section, Background } from "./index.style";

function AffordingCollege() {
  return (
    <Section
      className="container"
      id={progDetailSectionIds.affordingCollege.targetIdName}
    >
      <Background />
      <h2>
        <span className="highlight-gold">Affording college</span>
      </h2>
      <div className="mt-2 row">
        <div className="mt-2 col-12 col-md-4">
          <Card
            icon={["fas", "calculator"]}
            title="Tuition estimator"
            body="The tuition estimator shows the tuition and fee breakdown for your particular major, campus and residency status without financial aid."
            buttons={[
              {
                label: "Estimate tuition and fees",
                ariaLabel: "Estimate tuition and fees",
                color: "maroon",
                href: "https://students.asu.edu/tuition",
              },
            ]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            icon={["fas", "award"]}
            title="Scholarships"
            body="Scholarships are a type of aid that does not need to be paid back. Some you apply for and some are automatic."
            buttons={[
              {
                label: "Learn about scholarships",
                ariaLabel: "Learn about scholarships",
                color: "maroon",
                href: "https://students.asu.edu/scholarships",
              },
            ]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            icon={["fas", "hand-holding-usd"]}
            title="Financial aid"
            body="There are many financial aid options available for students. In fact, more than 80 percent of all ASU students receive some form of financial assistance every year."
            buttons={[
              {
                label: "Explore financial aid",
                ariaLabel: "Explore financial aid",
                color: "maroon",
                href: "https://students.asu.edu/financialaid/types",
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export { AffordingCollege };
