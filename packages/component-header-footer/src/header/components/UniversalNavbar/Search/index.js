// @ts-check
import { trackGAEvent } from "@asu/shared";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../Button";

import { useAppContext } from "../../../core/context/app-context";
import { CLASS_NAMES } from "../../../core/constants/classNames";
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
  const { breakpoint, searchUrl = "", site = "" } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  /** @type {React.MutableRefObject<HTMLInputElement | null>} */
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [hasInputValue, setHasInputValue] = useState(false);

  useEffect(() => {
    if (open && typeof inputRef?.current?.focus === "function") {
      inputRef.current.focus();
    }
  }, [open]);

  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSearch = e => {
    /** @type {HTMLFormElement} */
    const form = e?.currentTarget;
    e.preventDefault();

    let submitted = false;
    const submit = () => {
      if (!submitted && typeof form?.submit === "function") {
        submitted = true;
        form.submit();
      }
    };

    const searchInput =
      form && form.elements
        ? /** @type {HTMLInputElement|null} */ (form.elements.namedItem("q"))
        : null;

    // Fallback: always submit within 2s regardless of GTM state. Useful for
    // cases where GTM fails to load or execute for any reason, or if the user
    // has blocked GTM.
    setTimeout(submit, 2000);

    trackGAEvent({
      ...SEARCH_GA_EVENT,
      text: searchInput ? searchInput.value : "",
      eventCallback: submit,
      eventTimeout: 2000,
    });
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
    <search>
      <SearchWrapper
        // @ts-ignore
        breakpoint={breakpoint}
        action={searchUrl}
        onSubmit={handleSearch}
        method="get"
        name="gs"
        className={open ? CLASS_NAMES.OPEN_SEARCH : ""}
        data-testid="universal-nav-search-form"
        role="search"
      >
        {!isMobile ? (
          <>
            {!open && (
              <button
                type="button"
                aria-label="Search asu.edu"
                onClick={handleChangeVisibility}
                className={CLASS_NAMES.SEARCH_BUTTON}
                data-testid="search-button"
              >
                <span>Search</span>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            )}
            {open && (
              <>
                <SearchInput
                  inputRef={inputRef}
                  hasInputValue={hasInputValue}
                  setHasInputValue={setHasInputValue}
                  isMobile={isMobile}
                  onBlur={() => {
                    if (!hasInputValue) setOpen(false);
                  }}
                />
                <Button
                  color="dark"
                  text="Search"
                  as="button"
                  classes={CLASS_NAMES.SUBMIT_BUTTON}
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
              isMobile={isMobile}
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
    </search>
  );
};

export { Search };
