/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";

/** @typedef {import('../../../../core/types/detail-page-types').RequiredCoursesProps} RequiredCoursesProps */

const CHANGEMAJOR_URL = "https://changemajor.apps.asu.edu/";

const ONCAMPUS_TITLE = "On-campus students";
const ONLINE_TITLE = "Online students";
const VIEW_MAJOR_MAP_WITH_SLASH = "View major map -";
const VIEW_MAJOR_MAP = "View major map";
/**
 *
 * @param {RequiredCoursesProps} props
 * @returns
 */
function RequiredCourse({
  onlineMajorMapURL = "",
  majorMapOnCampusURL = "",
  subPlnMajorMaps = [],
  subPlns = [],
}) {
  const getSubPlnDescription = subPlnCode => {
    const matchingSubPln = subPlns.find(
      subPln => subPln.acadSubPlanCode === subPlnCode
    );
    return matchingSubPln ? matchingSubPln.description : "";
  };

  // add link to array of links if url is not empty
  const addLink = (url, text, arr) => {
    if (url) {
      arr.push({
        href: url,
        text,
      });
    }
  };

  // new arrays to hold the links by type
  const oncampusLinks = [];
  const onlineLinks = [];

  subPlnMajorMaps.forEach(item => {
    const planDescription = getSubPlnDescription(item.acadSubPlanCode);
    const bulletText = `${VIEW_MAJOR_MAP_WITH_SLASH} ${planDescription}`;
    addLink(item.url, bulletText, oncampusLinks);
  });

  if (majorMapOnCampusURL) {
    addLink(majorMapOnCampusURL, VIEW_MAJOR_MAP, oncampusLinks);
  }

  if (onlineMajorMapURL) {
    addLink(onlineMajorMapURL, VIEW_MAJOR_MAP, onlineLinks);
  }

  // render HTML links from array of links
  const renderLinks = (title, links) => {
    return (
      <>
        <h5>{title}</h5>
        <ul className="mb-3">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </>
    );
  };

  // Template component for required courses section
  const RequiredCourseSection = () => (
    <section className="container ps-0" data-testid="required-course">
      <h4>Required courses (major map)</h4>
      {oncampusLinks.length > 0 && renderLinks(ONCAMPUS_TITLE, oncampusLinks)}
      {onlineLinks.length > 0 && renderLinks(ONLINE_TITLE, onlineLinks)}
      <div className="mt-3">
        <strong>What if:</strong> See how your courses can be applied to another
        major and find out how to&nbsp;
        <a href={CHANGEMAJOR_URL}>change your major</a>
      </div>
    </section>
  );

  return !subPlnMajorMaps?.length &&
    !onlineMajorMapURL &&
    !majorMapOnCampusURL ? (
    <div />
  ) : (
    RequiredCourseSection()
  );
}

RequiredCourse.propTypes = {
  onlineMajorMapURL: PropTypes.string,
  majorMapOnCampusURL: PropTypes.string,
  subPlnMajorMaps: PropTypes.arrayOf(
    PropTypes.shape({
      campus: PropTypes.string,
      acadSubPlanCode: PropTypes.string,
      defaultFlag: PropTypes.bool,
      url: PropTypes.string,
    })
  ),
  subPlns: PropTypes.arrayOf(
    PropTypes.shape({
      acadSubPlanCode: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export { RequiredCourse };
