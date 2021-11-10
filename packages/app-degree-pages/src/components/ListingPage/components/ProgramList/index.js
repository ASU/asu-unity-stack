// @ts-check
import { Pagination } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

import { InfoAlert } from "../../../../core/components";
import { ListingPageContext } from "../../../../core/context";
import {
  columSettingsPropShape,
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
  [data-view-type="list-view"] {
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
  }
`;

/**
 *  @typedef {{
 *    programs: Object[]
 *    loading: boolean
 *    totalRows?: number
 *    columSettings?: import("src/core/types/listing-page-types").ColumSettings
 *    actionUrls: import("src/core/types/listing-page-types").ActionUrlProps
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
function ProgramList({
  dataViewComponent,
  loading,
  programs,
  columSettings,
  actionUrls,
}) {
  const ROW_PAGES = 8;
  const TOTAL_PAGES = computePages(programs.length, ROW_PAGES);
  const ProgramsViewer = programViewer[dataViewComponent];
  const [tableView, setTableView] = useState([]);

  const onPageChange = (_, newPage) => {
    const fromRecord = (newPage - 1) * ROW_PAGES;
    const toRecord = fromRecord + ROW_PAGES;

    setTableView(programs.slice(fromRecord, toRecord));
  };

  useEffect(() => {
    setTableView(programs.slice(0, ROW_PAGES));
  }, [programs]);

  return (
    <ListingPageContext.Provider
      value={{
        columSettings,
      }}
    >
      <section data-testid="program-list" data-view-type={dataViewComponent}>
        <GlobalStyle />

        <div className="desktop-view">
          <ProgramsViewer
            loading={loading}
            programs={tableView}
            totalRows={programs?.length}
            columSettings={columSettings}
            actionUrls={actionUrls}
          />
        </div>

        <div className="mobile-view mb-2">
          <AccordionView
            loading={loading}
            programs={tableView}
            totalRows={programs?.length}
            actionUrls={actionUrls}
          />
        </div>

        {programs.length > 0 ? (
          <Pagination
            totalNumbers={7}
            type="default"
            background="white"
            totalPages={TOTAL_PAGES}
            onChange={onPageChange}
            showFirstButton
            showLastButton
          />
        ) : (
          <section className="container no-space">
            <InfoAlert message="No result found for the filters applied" />
          </section>
        )}
      </section>
    </ListingPageContext.Provider>
  );
}

ProgramList.propTypes = {
  dataViewComponent: PropTypes.string,
  columSettings: columSettingsPropShape,
  ...degreeListPropTypes,
};

export { ProgramList, GridView, ListView };
