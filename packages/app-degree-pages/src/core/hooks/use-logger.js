/* eslint-disable no-console */
// @ts-check

import { useEffect } from "react";

import { isDebugActive } from "../utils/dev-tools-utils";

/**
 *
 * @param {{
 * dataSource: import("../types/listing-page-types").ProgramListDataSource
 * tableView: Object []
 * programs: Object []
 * stateFilters: import("src").FiltersState
 * }} props
 */
const useListingPageLogger = ({
  dataSource,
  tableView = [],
  programs,
  stateFilters,
}) => {
  const { collegeAcadOrg, departmentCode } = dataSource;

  useEffect(() => {
    if (!programs || !isDebugActive()) return;

    const sharedStyle =
      "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;";
    const titleStyle = "font-size:30px;";
    const titleStyle2 = "font-size:24px;";
    const bodyStyle = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>");
    console.log("%c🏫 Listing Page Programs 📚", sharedStyle + titleStyle);
    console.log(
      `%cTotal programs found: ${programs.length}`,
      sharedStyle + bodyStyle
    );
    console.log(`%cPrograms found`, sharedStyle + bodyStyle);
    console.log(programs);
    console.log(
      `%cTotal programs loaded: ${tableView.length}`,
      sharedStyle + bodyStyle
    );
    console.log(`%cPrograms loaded`, sharedStyle + bodyStyle);
    console.log(tableView);

    console.log(`%cPage Filters`, sharedStyle + titleStyle2);
    console.log(
      `%c- collegeAcadOrg:${collegeAcadOrg}`,
      sharedStyle + bodyStyle
    );
    console.log(
      `%c- departmentCode:${departmentCode}`,
      sharedStyle + bodyStyle
    );

    console.log(`%cSearch Filters`, sharedStyle + titleStyle2);
    console.log(stateFilters);

    console.groupEnd();
  });
};

export { useListingPageLogger };
