// @ts-check
import { Card } from "@asu-design-system/components-core";
import React from "react";

import { Section, Background } from "./index.style";

function AffordingCollege() {
  return (
    <Section className="container">
      <Background />
      <h2>
        <span className="highlight-gold">Affording college</span>
      </h2>
      <div className="mt-2 row">
        <div className="mt-2 col-12 col-md-4">
          <Card
            icon={["fas", "calculator"]}
            title="Tuition calculator"
            body="Our tuition calculator can help you estimate full-time tuition fees for this program without financial aid. Keep in mind: More than 80% of our students recieve financial aid."
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
            body="Find and apply from relevant scholarships."
            buttons={[
              {
                label: "Find scholarships",
                ariaLabel: "Find scholarships",
                color: "maroon",
                href: "https://students.asu.edu/scholarships",
              },
            ]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            icon={["fas", "hand-holding-usd"]}
            title="Finanacial aid"
            body="ASU has many financial aid options. Almost everyone, regardless of inconme, can qualify for some of financial aid. In fact, more than 70 percent of all ASU students receive some form of financial assistance every year."
            buttons={[
              {
                label: "Find financial aid",
                ariaLabel: "Find financial aid",
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
