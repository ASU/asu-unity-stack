// @ts-check

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Loader } from "../../core/components";
import { useFetch } from "../../core/hooks/use-fetch";
import { urlResolver } from "../../core/utils/data-path-resolver";

const ProgramDetailPage = () => {
  // /** @type {import("../../core/hooks/use-fetch").UseFetchTuple<string>} */
  // const [{ data, loading, error }, doFetchPrograms] = useFetch();

  // const [searchLoading, setSearchLoading] = useState(false);
  // const [tableView, setTableView] = useState([]);
  // const [dataViewComponent, setDataViewComponent] = useState(LIST_VIEW_ID);
  // const url = urlResolver(programList.dataSource);

  // useEffect(() => {
  //   doFetchPrograms(url);
  // }, [url]);

  // useEffect(() => {
  //   setTableView(data?.programs || []);
  // }, [data]);

  return (
    <>
      <main
        className="container"
        // data-is-loading={loading}
      >
        {/* {error && <div>Something went wrong ...</div>} */}

        {/* {loading || searchLoading ? <Loader /> : "Loaded"} */}
      </main>
    </>
  );
};

ProgramDetailPage.propTypes = {};

export { ProgramDetailPage };
