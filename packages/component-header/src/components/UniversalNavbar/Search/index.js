// @ts-check
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";

import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { trackGAEvent } from "../../../core/services/googleAnalytics";
import { SearchWrapper } from "./index.styles";

const SEARCH_GA_EVENT = {
  event: "search",
  action: "type",
  name: "onenter",
  section: "topbar",
  type: "main search",
};

const Search = () => {
  const { breakpoint, searchUrl, site } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) inputRef.current.focus();
  }, [open]);

  const handleChangeVisibility = () => {
    setOpen(prevState => !prevState);
  };
  return (
    <SearchWrapper
      // @ts-ignore
      breakpoint={breakpoint}
      action={searchUrl}
      method="get"
      name="gs"
      className={open ? "open-search" : ""}
    >
      {!isMobile ? (
        <>
          <button
            type="button"
            aria-label="Search asu.edu"
            onClick={handleChangeVisibility}
            className="search-button"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          {open && (
            <>
              <input
                ref={inputRef}
                className="form-control"
                type="search"
                name="q"
                aria-labelledby="header-top-search"
                placeholder="Search asu.edu"
                required
                onChange={e =>
                  trackGAEvent({
                    ...SEARCH_GA_EVENT,
                    text: e.target.value,
                  })
                }
              />
              <button
                type="button"
                aria-label="Search asu.edu"
                onClick={handleChangeVisibility}
                className="close-search"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </>
          )}
        </>
      ) : (
        <label>
          <FontAwesomeIcon icon={faSearch} />
          <input
            ref={inputRef}
            className="form-control"
            type="search"
            name="q"
            aria-labelledby="header-top-search"
            placeholder="Search asu.edu"
            required
            onChange={e =>
              trackGAEvent({
                ...SEARCH_GA_EVENT,
                text: e.target.value,
              })
            }
          />
        </label>
      )}
      <input name="url_host" value={site} type="hidden" />
      <input name="site" value="default_collection" type="hidden" />
      <input name="sort" value="date:D:L:d1" type="hidden" />
      <input name="output" value="xml_no_dtd" type="hidden" />
      <input name="ie" value="UTF-8" type="hidden" />
      <input name="oe" value="UTF-8" type="hidden" />
      <input name="client" value="asu_frontend" type="hidden" />
      <input name="proxystylesheet" value="asu_frontend" type="hidden" />
    </SearchWrapper>
  );
};

export { Search };
