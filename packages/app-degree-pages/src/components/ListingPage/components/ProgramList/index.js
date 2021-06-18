// @ts-check
import { Pagination } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { GRID_VIEW_ID, LIST_VIEW_ID } from "../../../../core/models";
import { computePages } from "../../../../core/utils";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import { degreeListPropTypes } from "./programs-prop-types";

/**
 *  @typedef {{
 *    programms: Object[]
 *    loading: boolean
 * }} GridListingProps
 */

/**
 * @type {Object.<string, ListView |  GridView>}
 */
const programViewer = {
  [GRID_VIEW_ID]: GridView,
  [LIST_VIEW_ID]: ListView,
};

/**
 *
 * @param {{
 *  dataViewComponent: GRID_VIEW_ID | LIST_VIEW_ID
 * } & GridListingProps} props
 */
function ProgramList({ dataViewComponent, loading, programms }) {
  const ROW_PAGES = 8;
  const TOTAL_PAGES = computePages(programms.length, ROW_PAGES);
  const ProgramsViewer = programViewer[dataViewComponent];
  const [tableView, setTableView] = useState([]);

  const onPageChange = (_, newPage) => {
    const fromRecord = (newPage - 1) * ROW_PAGES;
    const toRecord = fromRecord + ROW_PAGES;

    setTableView(programms.slice(fromRecord, toRecord));
  };

  useEffect(() => {
    setTableView(programms.slice(0, ROW_PAGES));
    // ReactTooltip.rebuild();
  }, [programms]);

  return (
    <>
      <ProgramsViewer loading={loading} programms={tableView} />

      <Pagination
        // count={5}
        type="default"
        background="white"
        totalPages={TOTAL_PAGES}
        onChange={onPageChange}
        showFirstButton
        showLastButton
      />
    </>
  );
}

ProgramList.propTypes = {
  dataViewComponent: PropTypes.string,
  ...degreeListPropTypes,
};

export { ProgramList, GridView, ListView };
