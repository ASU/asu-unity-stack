/* eslint-disable prefer-destructuring */
import React from "react";

import anonPic from "../assets/anon.png";
import { ProfileCard } from "../ProfileCard/index";
import { ResultCard } from "../ResultCard/index";

const fillInBlanks = datum => {
  const full = {
    id: {
      raw: "",
    },
    asurite_id: {
      raw: "",
    },
    eid: {
      raw: "",
    },
    photo_url: {
      raw: "",
    },
    display_name: {
      raw: "",
    },
    email_address: {
      raw: "",
    },
    phone: {
      raw: "",
    },
    address_line1: {
      raw: "",
    },
    address_line2: {
      raw: "",
    },
    bio: {
      raw: "",
    },
    shortBio: {
      raw: "",
    },
    url_path_dir1: {
      raw: "",
    },
    url_path_dir2: {
      raw: "",
    },
    facebook: {
      raw: null,
    },
    linkedin: {
      raw: null,
    },
    twitter: {
      raw: null,
    },
    url_host: {
      raw: "",
    },
    body_content: {
      raw: "",
    },
    url: {
      raw: "",
    },
    primary_search_department_affiliation: {
      raw: [""],
    },
  };
  return { ...full, ...datum };
};

const getTitleFromProfile = profile => {
  let primaryAffiliationTitle = null;
  let primaryAffiliationDept = null;

  if (profile.title) {
    primaryAffiliationTitle = profile.title[0];
    if (profile.dept_name) {
      primaryAffiliationDept = profile.dept_name;
    }
  } else if (profile.titles && profile.titles.raw) {
    const deptIndex = profile.deptids.raw.findIndex(
      id => id === profile.primary_deptid.raw
    );
    if (profile.title_source.raw[deptIndex] === "titles") {
      primaryAffiliationTitle = profile.titles.raw[deptIndex];
    } else {
      primaryAffiliationTitle = profile.working_title.raw[deptIndex];
    }
    primaryAffiliationDept = profile.departments.raw[deptIndex];
  } else if (profile.primary_department && profile.primary_department.raw) {
    const deptIndex = profile.departments.raw.findIndex(
      dept => dept === profile.primary_department.raw
    );
    if (
      profile.title_source.raw[0] === "workingTitle" &&
      profile.working_title
    ) {
      primaryAffiliationTitle = profile.working_title.raw[0];
    }
    primaryAffiliationDept = profile.departments.raw[deptIndex];
  } else {
    primaryAffiliationTitle = profile.working_title.raw[0];
    primaryAffiliationDept =
      profile.primary_search_department_affiliation.raw[0];
  }

  return { primaryAffiliationTitle, primaryAffiliationDept };
};

export const staffConverter = (datum, size = "small") => {
  const filledDatum = fillInBlanks(datum);
  const titles = getTitleFromProfile(filledDatum);

  return (
    <ProfileCard
      isRequired={false}
      id={filledDatum.asurite_id.raw.toString()}
      profileURL={`/profile/${filledDatum.asurite_id.raw.toString()}`}
      key={filledDatum.asurite_id.raw.toString()}
      imgURL={filledDatum.photo_url.raw}
      name={filledDatum.display_name.raw}
      primaryAffiliationTitle={titles.primaryAffiliationTitle}
      primaryAffiliationDept={titles.primaryAffiliationDept}
      email={filledDatum.email_address.raw}
      telephone={filledDatum.phone.raw}
      addressLine1={filledDatum.address_line1.raw}
      addressLine2={filledDatum.address_line2.raw}
      description={filledDatum.bio.raw}
      shortBio={filledDatum.shortBio.raw}
      facebookLink={filledDatum.facebook.raw}
      linkedinLink={filledDatum.linkedin.raw}
      twitterLink={filledDatum.twitter.raw}
      size={size}
      fill
    />
  );
};

export const studentsConverter = (datum, size = "small") => {
  const filledDatum = fillInBlanks(datum);
  return (
    <ProfileCard
      isRequired={false}
      id={filledDatum.asurite_id.raw.toString()}
      profileURL={`/profile/${filledDatum.asurite_id.raw.toString()}`}
      key={filledDatum.asurite_id.raw.toString()}
      imgURL={filledDatum.photo_url.raw}
      name={filledDatum.display_name.raw}
      titles={filledDatum.titles.raw}
      email={filledDatum.email_address.raw}
      telephone={filledDatum.phone.raw}
      addressLine1={filledDatum.address_line1.raw}
      addressLine2={filledDatum.address_line2.raw}
      description={filledDatum.bio.raw}
      facebookLink={filledDatum.facebook.raw}
      linkedinLink={filledDatum.linkedin.raw}
      twitterLink={filledDatum.twitter.raw}
      size={size}
      fill
    />
  );
};

export const anonConverter = (datum, size = "small") => {
  return (
    <ProfileCard
      isRequired={false}
      id={datum.toString()}
      profileURL={null}
      key={datum}
      imgURL={anonPic}
      name="Student name"
      titles={["Title"]}
      email="email@example.com"
      telephone=""
      addressLine1=""
      addressLine2=""
      description=""
      facebookLink=""
      linkedinLink=""
      twitterLink=""
      size={size}
    />
  );
};

export const subdomainConverter = (datum, size = "small") => {
  const filledDatum = fillInBlanks(datum);
  let desc = null;
  if (filledDatum.meta_description) {
    desc = filledDatum.meta_description.raw;
  } else {
    desc = filledDatum.body_content.raw
      .replace("Skip to main content ", "")
      .replace("Skip to Main Page Content ", "");
  }
  return (
    <ResultCard
      id={filledDatum.id.raw}
      key={filledDatum.id.raw}
      name={filledDatum.title.raw}
      area={filledDatum.url_host.raw}
      description={desc}
      cookieTrail={[
        filledDatum.url_path_dir1.raw,
        filledDatum.url_path_dir2.raw,
      ]}
      link={filledDatum.url.raw}
      size={size}
      fill
    />
  );
};
