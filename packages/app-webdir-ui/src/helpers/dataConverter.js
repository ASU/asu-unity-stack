import React from "react";

import anonPic from "../assets/anon.png";
import { ProfileCard } from "../ProfileCard/index";
import { ResultCard } from "../ResultCard/index";

const fillInBlanks = datum => {
  const full = {
    id: {
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
    url_path_dir1: {
      raw: "",
    },
    url_path_dir2: {
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
        id={filledDatum.eid.raw.toString()}
        key={`${filledDatum.eid.raw.toString()}-a`}
        name={filledDatum.display_name.raw}
        area={filledDatum.display_name.raw}
        description={filledDatum.bio.raw}
        cookieTrail={[filledDatum.titles.raw[0], filledDatum.titles.raw[0]]}
        link={filledDatum.titles.raw[0]}
        fill
      />
      <ProfileCard
        isRequired={false}
        id={filledDatum.eid.raw.toString()}
        key={`${filledDatum.eid.raw.toString()}-b`}
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
        facebookLink={filledDatum.facebook_link.raw}
        linkedinLink={filledDatum.linkedIn_link.raw}
        twitterLink={filledDatum.twitter_link.raw}
        fill
      />
    </div>
  );
};

export const allConverter = datum => {
  const filledDatum = fillInBlanks(datum);
  return (
    <ResultCard
      id={filledDatum.eid.raw.toString()}
      key={filledDatum.eid.raw.toString()}
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
      isRequired={false}
      id={filledDatum.eid.raw.toString()}
      key={filledDatum.eid.raw.toString()}
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
      facebookLink={filledDatum.facebook_link.raw}
      linkedinLink={filledDatum.linkedIn_link.raw}
      twitterLink={filledDatum.twitter_link.raw}
      fill
    />
  );
};

export const studentsConverter = datum => {
  const filledDatum = fillInBlanks(datum);
  return (
    <ProfileCard
      isRequired={false}
      id={filledDatum.eid.raw.toString()}
      key={filledDatum.eid.raw.toString()}
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
      facebookLink={filledDatum.facebook_link.raw}
      linkedinLink={filledDatum.linkedIn_link.raw}
      twitterLink={filledDatum.twitter_link.raw}
      fill
    />
  );
};

export const anonConverter = datum => {
  return (
    <ProfileCard
      isRequired={false}
      id={datum.toString()}
      key={datum}
      imgURL={anonPic}
      name="Student Name"
      titles={[{
        name: 'Title',
        org: '',
      }]}
      email={"email@example.com"}
      telephone={""}
      addressLink="asu.edu"
      addressLine1={""}
      addressLine2={""}
      description={""}
      facebookLink={""}
      linkedinLink={""}
      twitterLink={""}
    />
  );
};

export const subdomainConverter = datum => {
  const filledDatum = fillInBlanks(datum);
  return (
    <ResultCard
      id={filledDatum.id.raw}
      key={filledDatum.id.raw}
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
