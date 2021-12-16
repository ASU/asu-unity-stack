import React from "react";

import { ProfileCard } from "../ProfileCard/index";
import { ResultCard } from "../ResultCard/index";

const fillInBlanks = datum => {
  const full = {
    eid: {
      raw: "",
    },
    photo_url: {
      raw: "",
    },
    display_name: {
      raw: "",
    },
    titles: {
      raw: [],
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
    facebook_link: {
      raw: "",
    },
    linkedIn_link: {
      raw: "",
    },
    twitter_link: {
      raw: "",
    },
  };
  return { ...full, ...datum };
};

export const topConverter = datum => {
  const filledDatum = fillInBlanks(datum);
  return (
    <div>
      <ResultCard
        id={filledDatum.eid.raw}
        name={filledDatum.display_name.raw}
        area={filledDatum.display_name.raw}
        description={filledDatum.bio.raw}
        cookieTrail={[filledDatum.titles.raw[0], filledDatum.titles.raw[0]]}
        link={filledDatum.titles.raw[0]}
        fill
      />
      <ProfileCard
        id={filledDatum.eid.raw}
        imgURL={filledDatum.photo_url.raw}
        name={filledDatum.display_name.raw}
        titles={filledDatum.titles.raw.map(title => {
          return {
            name: title,
            org: title,
          };
        })}
        email={filledDatum.email_address.raw}
        telephone={filledDatum.phone.raw}
        addressLink="asu.edu"
        addressLine1={filledDatum.address_line1.raw}
        addressLine2={filledDatum.address_line2.raw}
        description={filledDatum.bio.raw}
        facebookLink={filledDatum.facebook_link}
        linkedinLink={filledDatum.linkedIn_link}
        twitterLink={filledDatum.twitter_link}
        fill
      />
    </div>
  );
};

export const allConverter = datum => {
  const filledDatum = fillInBlanks(datum);
  return (
    <ResultCard
      id={filledDatum.eid.raw}
      name={filledDatum.display_name.raw}
      area={filledDatum.display_name.raw}
      description={filledDatum.bio.raw}
      cookieTrail={[filledDatum.titles.raw[0], filledDatum.titles.raw[0]]}
      link={filledDatum.titles.raw[0]}
      fill
    />
  );
};

export const staffConverter = datum => {
  const filledDatum = fillInBlanks(datum);
  return (
    <ProfileCard
      id={filledDatum.eid.raw}
      imgURL={filledDatum.photo_url.raw}
      name={filledDatum.display_name.raw}
      titles={filledDatum.titles.raw.map(title => {
        return {
          name: title,
          org: title,
        };
      })}
      email={filledDatum.email_address.raw}
      telephone={filledDatum.phone.raw}
      addressLink="asu.edu"
      addressLine1={filledDatum.address_line1.raw}
      addressLine2={filledDatum.address_line2.raw}
      description={filledDatum.bio.raw}
      facebookLink={filledDatum.facebook_link}
      linkedinLink={filledDatum.linkedIn_link}
      twitterLink={filledDatum.twitter_link}
      fill
    />
  );
};

export const studentsConverter = datum => {
  const filledDatum = fillInBlanks(datum);
  return (
    <ProfileCard
      id={filledDatum.eid.raw}
      imgURL={filledDatum.photo_url.raw}
      name={filledDatum.display_name.raw}
      titles={filledDatum.titles.raw.map(title => {
        return {
          name: title,
          org: title,
        };
      })}
      email={filledDatum.email_address.raw}
      telephone={filledDatum.phone.raw}
      addressLink="asu.edu"
      addressLine1={filledDatum.address_line1.raw}
      addressLine2={filledDatum.address_line2.raw}
      description={filledDatum.bio.raw}
      facebookLink={filledDatum.facebook_link}
      linkedinLink={filledDatum.linkedIn_link}
      twitterLink={filledDatum.twitter_link}
      fill
    />
  );
};

export const subdomainConverter = datum => {
  const filledDatum = fillInBlanks(datum);
  return (
    <ResultCard
      id={filledDatum.id.raw}
      name={filledDatum.title.raw}
      area={filledDatum.url_host.raw}
      description={filledDatum.body_content.raw}
      cookieTrail={[
        filledDatum.url_path_dir1.raw,
        filledDatum.url_path_dir2.raw,
      ]}
      link={filledDatum.url.raw}
      fill
    />
  );
};
