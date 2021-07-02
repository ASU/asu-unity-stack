// @ts-check
import { Pagination } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

import { ListingPageContext } from "../../../../core/context";
import {
  columSettingsPropType,
  GRID_VIEW_ID,
  LIST_VIEW_ID,
} from "../../../../core/models";
import { computePages } from "../../../../core/utils";
import { AccordionView } from "./AccordionView";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import { degreeListPropTypes } from "./programs-prop-types";

const GlobalStyle = createGlobalStyle`
  .mobile-view {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-view {
      display: none;
    }
    .mobile-view {
      display: block;
      .card-foldable .card-header h4 a {
        color: #8c1d40;
      }
    }
  }
`;

/**
 *  @typedef {{
 *    programms: Object[]
 *    loading: boolean
 *    columSettings?: import("src/core/models/listing-page-types").ColumSettings
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
function ProgramList({ dataViewComponent, loading, programms, columSettings }) {
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
  }, [programms]);

  return (
    <ListingPageContext.Provider
      value={{
        columSettings,
      }}
    >
      <section>
        <GlobalStyle />

        <div className="desktop-view">
          <ProgramsViewer
            loading={loading}
            programms={tableView}
            columSettings={columSettings}
          />
        </div>

        <div className="mobile-view mb-2">
          <AccordionView loading={loading} programms={tableView} />
        </div>

        <Pagination
          totalNumbers={7}
          type="default"
          background="white"
          totalPages={TOTAL_PAGES}
          onChange={onPageChange}
          showFirstButton
          showLastButton
        />
      </section>
    </ListingPageContext.Provider>
  );
}

ProgramList.propTypes = {
  dataViewComponent: PropTypes.string,
  columSettings: columSettingsPropType,
  ...degreeListPropTypes,
};

export { ProgramList, GridView, ListView };
