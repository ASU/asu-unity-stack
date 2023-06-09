/* eslint-disable prefer-destructuring */
import React from 'react';

import anonPic from '../assets/anon.png';
import { ProfileCard } from '../ProfileCard/index';
import { ResultCard } from '../ResultCard/index';

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
      raw: '',
    },
    campus_address: {
      raw: '',
    },
    city: {
      raw: '',
    },
    state: {
      raw: '',
    },
    asurite_id: {
      raw: '',
    },
    working_title: {
      raw: [''],
    },
    titles: {
      raw: null,
    },
    eid: {
      raw: '',
    },
    photo_url: {
      raw: '',
    },
    display_name: {
      raw: '',
    },
    display_last_name: {
      raw: '',
    },
    email_address: {
      raw: '',
    },
    phone: {
      raw: '',
    },
    address_line1: {
      raw: '',
    },
    address_line2: {
      raw: '',
    },
    bio: {
      raw: '',
    },
    short_bio: {
      raw: '',
    },
    url_path_dir1: {
      raw: '',
    },
    url_path_dir2: {
      raw: '',
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
      raw: '',
    },
    body_content: {
      raw: '',
    },
    url: {
      raw: '',
    },
    primary_search_department_affiliation: {
      raw: [''],
    },
    website: {
      raw: '',
    },
  };
  return { ...full, ...datumAdjusted };
};

// If it's depts only - use that dept in place of primary_deptid

const getTitleFromProfile = (profile, titleMatch) => {
  // Note on title logic
  // - Engine WEB_DIRECTORY_PEOPLE_AND_DEPS supplies results with title logic
  //   already handled by the service.
  // - Engine WEB_DIRECTORY_DEPARTMENTS needs a little help with titles,
  //   handled below using titleMatch.depts.

  let matchedAffiliationTitle = null;
  let matchedAffiliationDept = null;

  if (profile.title) {
    console.log('title from service');
    // Here we can use the WEB_DIRECTORY_PEOPLE_AND_DEPS pre-matched title.
    // We don't need to consult titleMatch.peopleDeps.
    matchedAffiliationTitle = profile.title;
    if (profile.dept_name) {
      matchedAffiliationDept = profile.dept_name;
    }
  } else if (
    titleMatch &&
    titleMatch.depts &&
    profile.deptids &&
    profile.titles &&
    profile.deptids.raw !== null &&
    /*
      If titleMatch.depts[0] is '',
      then no deptIds were supplied to query.
      We can't use titleMatch.depts in that case.
    */
    !!titleMatch.depts[0]
  ) {
    console.log('title from titleMatch.deps');
    // A flow for WEB_DIRECTORY_DEPARTMENTS.
    // Note: If someone is in two depts queried, there is no guarantee which
    // title they'll get. When precision is needed, users should use the
    // People or People in Departments component type.

    // Find matching values against titleMatch.depts
    const deptValueMatch = profile.deptids.raw.filter(id =>
      titleMatch.depts.includes(id)
    );
    // Use the first value matched to match on the deptids index.
    const deptIndex = profile.deptids.raw.findIndex(
      id => id === deptValueMatch[0]
    );
    if (profile.title_source.raw[deptIndex] === 'titles') {
      matchedAffiliationTitle = profile.titles.raw[deptIndex];
    } else if (profile.working_title) {
      matchedAffiliationTitle = profile.working_title.raw[0];
      if (!matchedAffiliationTitle) {
        matchedAffiliationTitle = profile.titles.raw[deptIndex];
      }
    }
    matchedAffiliationDept = profile.departments.raw[deptIndex];
  } else if (profile.primary_deptid && profile.titles && profile.titles.raw) {
    console.log('title from fallback1 to primary_deptid');
    // Fallback to using primary_deptid from CMS to derive the match.
    const deptIndex = profile.deptids.raw.findIndex(
      id => id === profile.primary_deptid.raw
    );
    if (profile.title_source.raw[deptIndex] === 'titles') {
      matchedAffiliationTitle = profile.titles.raw[deptIndex];
    } else if (profile.working_title && profile.working_title.raw[0]) {
      matchedAffiliationTitle = profile.working_title.raw[deptIndex];
    }
    matchedAffiliationDept = profile.departments.raw[deptIndex];

    // Used in directory component when dept id is provided with asurite
    if (profile.primary_affiliation.raw === 'COURTESY_AFFILIATE') {
      matchedAffiliationTitle = profile.affiliations?.raw[0];
      matchedAffiliationDept = profile.subaffiliations?.raw[0];
    }
  } else if (profile.primary_department && profile.primary_department.raw) {
    console.log('title from fallback2 to primary_department');
    // Fallback to using primary_department name to derive the match, using
    // working_title. This condition is unlikely to be met. If we have one, we
    // should have the other.
    const deptIndex = profile.departments.raw.findIndex(
      dept => dept === profile.primary_department.raw
    );
    if (
      // profile.title_source.raw[0] === "workingTitle" &&
      profile.working_title
    ) {
      matchedAffiliationTitle = profile.working_title.raw[0];
    }
    matchedAffiliationDept = profile.departments.raw[deptIndex];
  } else if (profile.primary_affiliation.raw === 'COURTESY_AFFILIATE') {
    console.log('title from fallback to courtesy affiliate');
    matchedAffiliationTitle = profile.affiliations?.raw[0];
    matchedAffiliationDept = profile.subaffiliations?.raw[0];
  } else {
    console.log('title from fallback3 to hr values - final');
    // Final fallback is to use the HR working title and department values.
    matchedAffiliationTitle = profile.working_title.raw[0];
    matchedAffiliationDept =
      profile.primary_search_department_affiliation.raw[0];
  }

  return { matchedAffiliationTitle, matchedAffiliationDept };
};

export const staffConverter = ({
  datum,
  options = {
    size: 'small',
    titleMatch: null,
    profileURLBase: null,
    fill: false,
  },
  appPathFolder,
}) => {
  // We rounded the time to the nearest minute ot prevent multiple request to the image service
  const nearestMinute = Math.floor(Date.now() / (1000 * 60)) * (1000 * 60);

  const filledDatum = fillInBlanks(datum);
  const titles = getTitleFromProfile(filledDatum, options.titleMatch);
  const queryConcat = filledDatum.photo_url.raw.includes('?') ? '&' : '?';
  // the 'break' param is used to prevent caching of the image
  const processedImage = `${filledDatum.photo_url.raw}${queryConcat}size=medium&break=${nearestMinute}`;

  // We use EID if it's available, otherwise we use the asurite_id.
  const profileURLBase = options.profileURLBase ?? '';
  const asuriteEID = filledDatum.eid.raw
    ? filledDatum.eid.raw.toString()
    : filledDatum.asurite_id.raw.toString();
  if (appPathFolder) {
    anonImg = `${appPathFolder}/img/anon.png`;
  }
  return (
    <>
      {asuriteEID ? (
        <ProfileCard
          isRequired={false}
          id={asuriteEID}
          profileURL={`${profileURLBase}/profile/${asuriteEID}`}
          key={asuriteEID}
          imgURL={processedImage}
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

export const studentsConverter = ({
  datum,
  options = {
    size: 'small',
    fill: false,
  },
  appPathFolder,
}) => {
  const filledDatum = fillInBlanks(datum);
  if (appPathFolder) {
    anonImg = `${appPathFolder}/img/anon.png`;
  }
  const asuriteEID = filledDatum.eid.raw
    ? filledDatum.eid.raw.toString()
    : filledDatum.asurite_id.raw.toString();
  return (
    <ProfileCard
      isRequired={false}
      id={asuriteEID}
      profileURL={`/profile/${asuriteEID}`}
      key={asuriteEID}
      imgURL={filledDatum.photo_url.raw}
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

export const anonConverter = (
  datum,
  options = {
    size: 'small',
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
      titles={['Title']}
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

export const subdomainConverter = ({
  datum,
  options = {
    size: 'small',
    fill: false,
  },
  appPathFolder,
  logClick = () => { },
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
      .replace('Skip to main content ', '')
      .replace('Skip to Main Page Content ', '');
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
