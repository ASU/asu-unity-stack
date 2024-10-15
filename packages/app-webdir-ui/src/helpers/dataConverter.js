/* eslint-disable prefer-destructuring */
import React from "react";

import anonPic from "../assets/anon.png";
import { ProfileCard } from "../ProfileCard/index";
import { ResultCard } from "../ResultCard/index";

// Use packaged image, but for CMS aggregation contexts we
// override in converters below using appPathFolder prop.
// See https://asudev.jira.com/browse/ASUIS-550
let anonImg = anonPic;

const fillInBlanks = datum => {
  const datumAdjusted = datum;
  // If in datum, but without .raw, delete so can be filled.
  if (datum.asurite_id === null) {
    delete datumAdjusted.asurite_id;
  }
  if (datum.display_name === null) {
    delete datumAdjusted.display_name;
  }

  const full = {
    id: {
      raw: "",
    },
    campus_address: {
      raw: "",
    },
    city: {
      raw: "",
    },
    state: {
      raw: "",
    },
    asurite_id: {
      raw: "",
    },
    working_title: {
      raw: [""],
    },
    titles: {
      raw: null,
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
    display_last_name: {
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
    short_bio: {
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
    website: {
      raw: "",
    },
  };
  return { ...full, ...datumAdjusted };
};

// See https://asudev.jira.com/browse/SCHWEB-1238 for title logic.
const getTitleFromProfile = profile => {
  if (Array.isArray(profile.title) && profile.title[0] && profile.dept_name) {
    return {
      matchedAffiliationTitle: profile.title[0],
      matchedAffiliationDept: profile.dept_name,
    };
  }

  return {
    matchedAffiliationTitle: profile.title,
    matchedAffiliationDept: profile.dept_name,
  };
};

/**
    Formats the image URL by adding query parameters for size and break.
    @param {string} baseUrl - The base URL of the image.
    @returns {string} The formatted URL with added query parameters.
  */
const formatImageUrl = baseUrl => {
  // Since user profiles in the image service can have no assigned image, we should account for possible empty values.
  if (!baseUrl) return "";

  const AVAILABLE_URL_PARAMS = { SIZE: "size", BREAK: "break" };
  const AVAILABLE_IMG_SIZES = { MEDIUM: "medium" };

  /**
    Rounds the current time in seconds to the nearest hundred seconds.
    @returns {string} The rounded timestamp in seconds, with the last two digits as zero.
  */
  const nearestHundredSeconds = () => {
    const milisecondsTimestamp = Date.now();
    const secondsTimestamp = Math.floor(milisecondsTimestamp / 1000); // Convert to seconds.
    const breakValue = Math.floor(secondsTimestamp / 100) * 100; // Round to nearest 100 seconds.

    return breakValue.toString();
  };

  const url = new URL(baseUrl);
  url.searchParams.append(
    AVAILABLE_URL_PARAMS.SIZE,
    AVAILABLE_IMG_SIZES.MEDIUM
  );
  url.searchParams.append(AVAILABLE_URL_PARAMS.BREAK, nearestHundredSeconds());
  url.searchParams.append("blankImage2", "true");

  return url.toString();
};

/**
 * Shared props for converter functions.
 * @typedef {Object} SharedProps
 * @property {Object} datum - The staff data to convert.
 * @property {string} [size="small"] - The size of the ProfileCard.
 * @property {string|null} [profileURLBase=null] - The base URL for profile links.
 * @property {boolean} [fill=false] - Whether to fill in missing data.
 * @property {string} appPathFolder - The application path folder.
 */

/**
 * Converts staff data into ProfileCard components.
 * @param {SharedProps} props
 * @returns {JSX.Element} The converted staff data.
 */

export const staffConverter = ({
  datum,
  options = {
    size: "small",
    profileURLBase: null,
    fill: false,
  },
  appPathFolder,
}) => {
  const filledDatum = fillInBlanks(datum);
  const titles = getTitleFromProfile(filledDatum);

  // We use EID if it's available, otherwise we use the asurite_id.
  const profileURLBase = options.profileURLBase ?? "";
  const asuriteEID =
    filledDatum.eid?.raw && filledDatum.eid?.raw !== "0"
      ? filledDatum.eid.raw.toString()
      : filledDatum.asurite_id.raw.toString();
  if (appPathFolder) {
    anonImg = `${appPathFolder}/img/anon.png`;
  }
  const imgURLProp = formatImageUrl(filledDatum.photo_url.raw);

  return (
    <>
      {asuriteEID ? (
        <ProfileCard
          isRequired={false}
          id={asuriteEID}
          profileURL={`${profileURLBase}/profile/${asuriteEID}`}
          key={asuriteEID}
          imgURL={imgURLProp}
          anonImgURL={anonImg}
          name={filledDatum.display_name.raw}
          matchedAffiliationTitle={titles.matchedAffiliationTitle}
          matchedAffiliationDept={titles.matchedAffiliationDept}
          email={filledDatum.email_address.raw}
          telephone={filledDatum.phone.raw}
          addressLine1={filledDatum.campus_address?.raw}
          addressLine2={`${filledDatum.city.raw} ${filledDatum.state.raw}`}
          description={filledDatum.bio.raw}
          shortBio={filledDatum.short_bio.raw}
          facebookLink={filledDatum.facebook.raw}
          linkedinLink={filledDatum.linkedin.raw}
          twitterLink={filledDatum.twitter.raw}
          website={filledDatum.website.raw}
          size={options.size}
          fill={options.fill}
        />
      ) : null}
    </>
  );
};

/**
 * Converts student data into ProfileCard components.
 * @param {SharedProps} props
 * @returns {JSX.Element} The converted student data.
 */

export const studentsConverter = ({
  datum,
  options = {
    size: "small",
    fill: false,
  },
  appPathFolder,
}) => {
  const filledDatum = fillInBlanks(datum);
  if (appPathFolder) {
    anonImg = `${appPathFolder}/img/anon.png`;
  }
  const asuriteEID =
    filledDatum.eid.raw && filledDatum.eid.raw !== "0"
      ? filledDatum.eid.raw.toString()
      : filledDatum.asurite_id.raw.toString();

  const imgURLProp = formatImageUrl(filledDatum.photo_url.raw);

  return (
    <ProfileCard
      isRequired={false}
      id={asuriteEID}
      profileURL={`/profile/${asuriteEID}`}
      key={asuriteEID}
      imgURL={imgURLProp}
      anonImgURL={anonImg}
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
      size={options.size}
      fill={options.fill}
    />
  );
};

/**
 * Converts data into ProfileCard components.
 * @param {SharedProps} props
 * @returns {JSX.Element} The converted faculty data.
 */

export const anonConverter = (
  datum,
  options = {
    size: "small",
  },
  appPathFolder
) => {
  if (appPathFolder) {
    anonImg = `${appPathFolder}/img/anon.png`;
  }
  return (
    <ProfileCard
      isRequired={false}
      id={datum.toString()}
      profileURL={null}
      key={datum}
      imgURL={anonImg}
      anonImgURL={anonImg}
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
      size={options.size}
    />
  );
};

/**
 * Converts subdomain data to a ResultCard component.
 *
 * @param {Object} options - Options for configuring the conversion.
 * @param {Object} options.datum - The subdomain data to convert.
 * @param {string} [options.size="small"] - The size of the ResultCard.
 * @param {boolean} [options.fill=false] - Whether to fill in missing data.
 * @param {string} appPathFolder - The application path folder.
 * @param {function} [logClick=() => {}] - A callback function to log clicks.
 * @param {string} requestId - The request ID.
 * @param {string|null} [localSection=null] - The local section information.
 * @param {Object} props - Additional props to pass to the ResultCard component.
 * @returns {JSX.Element} The ResultCard component.
 */

export const subdomainConverter = ({
  datum,
  options = {
    size: "small",
    fill: false,
  },
  appPathFolder,
  logClick = () => {},
  requestId,
  localSection = null,
  props,
}) => {
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
      size={options.size}
      fill={options.fill}
      logClick={logClick}
      requestId={requestId}
      localSection={localSection}
      {...props}
    />
  );
};
