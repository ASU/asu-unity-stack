import React from "react";

import ProfilePic from "../assets/test-image.png";
import { ProfileCard } from "../ProfileCard/index";
import { ResultCard } from "../ResultCard/index";

const topConverter = datum => {
  return (
    <div>
      <ResultCard
        id={datum.id.raw}
        name={datum.title.raw}
        area={datum.title.raw}
        description={datum.title.raw}
        cookieTrail={[datum.title.raw, datum.title.raw]}
        link={datum.title.raw}
        fill
      />
      <ProfileCard
        id={datum.id.raw}
        imgURL={ProfilePic}
        name={datum.title.raw}
        titles={[{ name: "Regents Professor", org: "ASU" }]}
        email="email@asu.edu"
        telephone="555-555-5555"
        addressLink="asu.edu"
        addressLine1="1234 Address St."
        addressLine2="Tempte, AZ 12345"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis"
        facebookLink="https://facebook.com"
        linkedinLink="https://linkedin.com"
        twitterLink="https://twitter.com"
        fill
      />
    </div>
  );
};

const allConverter = datum => {
  return (
    <ResultCard
      id={datum.id.raw}
      name={datum.title.raw}
      area={datum.title.raw}
      description={datum.title.raw}
      cookieTrail={[datum.title.raw, datum.title.raw]}
      link={datum.title.raw}
    />
  );
};

const staffConverter = datum => {
  return (
    <ProfileCard
      id={datum.id.raw}
      imgURL={ProfilePic}
      name={datum.title.raw}
      titles={[{ name: "Regents Professor", org: "ASU" }]}
      email="email@asu.edu"
      telephone="555-555-5555"
      addressLink="asu.edu"
      addressLine1="1234 Address St."
      addressLine2="Tempte, AZ 12345"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis"
      facebookLink="https://facebook.com"
      linkedinLink="https://linkedin.com"
      twitterLink="https://twitter.com"
    />
  );
};

const studentsConverter = datum => {
  return (
    <ProfileCard
      id={datum.id.raw}
      imgURL={ProfilePic}
      name={datum.title.raw}
      titles={[{ name: "Regents Professor", org: "ASU" }]}
      email="email@asu.edu"
      telephone="555-555-5555"
      addressLink="asu.edu"
      addressLine1="1234 Address St."
      addressLine2="Tempte, AZ 12345"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis"
      facebookLink="https://facebook.com"
      linkedinLink="https://linkedin.com"
      twitterLink="https://twitter.com"
    />
  );
};

const subdomainConverter = datum => {
  return (
    <ResultCard
      id={datum.id.raw}
      name={datum.title.raw}
      area={datum.title.raw}
      description={datum.title.raw}
      cookieTrail={[datum.title.raw, datum.title.raw]}
      link={datum.title.raw}
    />
  );
};

export const dataConverter = data => {
  return {
    top: data.slice(0, 1).map(topConverter),
    all: data.map(allConverter),
    staff: data.map(staffConverter),
    students: data.map(studentsConverter),
    subdomain: data.map(subdomainConverter),
  };
};
