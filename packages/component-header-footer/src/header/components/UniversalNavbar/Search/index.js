// @ts-check
import { trackGAEvent } from "@asu/shared";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../Button";

import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { SearchWrapper } from "./index.styles";
import { SearchInput } from "./SearchInput";

const SEARCH_GA_EVENT = {
  event: "search",
  action: "type",
  name: "onenter",
  type: "main search",
  region: "navbar",
  section: "topbar",
};

const Search = () => {
  const { breakpoint, searchUrl, site } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  /** @type {React.MutableRefObject<HTMLInputElement | null>} */
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [hasInputValue, setHasInputValue] = useState(false);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSearch = e => {
    /** @type {HTMLFormElement} */
    const form = e.currentTarget;
    e.preventDefault();
    /**
     * Issue: Callback not currently available
     * We need to ensure dataLayer events are being logged correctly
     * Soluton might be in GA4 settings with a form event targeting the element ID
     *
     * This solution does not guarantee the event is logged before the page
     * redirects.
     * Preventing form submission with arbitrary timeout is always bad, but this
     * may be small enough to not degrade the experience
     *
     * TODO: UDS-1612
     */
    /** @type {HTMLInputElement | null} */
    const searchInput = /** @type {HTMLInputElement} */ (form.elements.namedItem('q'));
    trackGAEvent({
      ...SEARCH_GA_EVENT,
      text: searchInput ? searchInput.value : '',
    });
    setTimeout(() => {
      form.submit();
    }, 100);
  };

  const handleChangeVisibility = () => {
    setOpen(prevState => {
      const newState = !prevState;

      trackGAEvent({
        ...SEARCH_GA_EVENT,
        event: "link",
        action: "click",
        name: "onclick",
        text: newState ? "search icon" : "close search icon",
      });
      return newState;
    });
  };
  return (
    <SearchWrapper
      // @ts-ignore
      breakpoint={breakpoint}
      action={searchUrl}
      onSubmit={handleSearch}
      method="get"
      name="gs"
      className={open ? "open-search" : ""}
      data-testid="universal-nav-search-form"
      role="search"
    >
      {!isMobile ? (
        <>
        {
          !open && (
          <button
            type="button"
            aria-label="Search asu.edu"
            onClick={handleChangeVisibility}
            className="search-button"
            data-testid="search-button"
          >
            <span
            style={{
              marginRight: "0.25rem",
            }}
            >Search</span>
            <FontAwesomeIcon icon={faSearch} />
          </button>
)}
          {open && (
            <>
              <SearchInput
                inputRef={inputRef}
                hasInputValue={hasInputValue}
                setHasInputValue={setHasInputValue}
                SEARCH_GA_EVENT={SEARCH_GA_EVENT}
                isMobile={false}
                onBlur={() => {
                  if (!hasInputValue) setOpen(false);
                }}
              />
              <Button
                color="dark"
                text="Search"
                as="button"
                classes="submit-button"
              />
            </>
          )}
        </>
      ) : (
        <label>
          <SearchInput
            inputRef={inputRef}
            hasInputValue={hasInputValue}
            setHasInputValue={setHasInputValue}
            SEARCH_GA_EVENT={SEARCH_GA_EVENT}
            isMobile={true}
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
