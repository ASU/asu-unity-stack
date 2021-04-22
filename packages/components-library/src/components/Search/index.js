
/* eslint-disable react/prop-types */

import { useRef, useEffect, useCallback } from "preact/compat";
import PropTypes from "prop-types";

import * as S from "./styles";

const Search = ({ type, open, inputRef, mobile, ...props }) => {

  switch (type) {
    case "d7":
      return <div>Drupal 7</div>;
    default:
      // Global ASU Search by default
      return (
        <form
          action="https://search.asu.edu/search"
          method="get"
          role="search"
          class={open ? "show-search-input" : ""}
          {...props}
        >
          <button type="submit" aria-label="Submit ASU Search" />
          <input
            name="q"
            type="search"
            {...(inputRef ? { ref: inputRef } : {})}
            aria-labelledby="asu-search-label"
            {...mobile ? {placeHolder: "Search ASU"} : {}}
            required
          />

          <label class="universal-search" id="asu-search-label" onmousedown={() => event.preventDefault() /** prevent label click from removing input focus */ }>
            Search ASU
          </label>

        </form>
      );
  }
};

Search.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool,
  inputRef: PropTypes.oneOfType([
    // ref to actual DOM node of nav item
    // https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  mobile: PropTypes.bool
};

Search.defaultProps = {};

const UniversalSearch = ({ type, open, setOpen, mobile}) => {
  //const toggle = () => setOpen(oldOpen => !oldOpen);

  // ref to input dom node
  const inputRef = useRef(null);


  useEffect(() => {

    if (inputRef.current.value) {
      setOpen(true);
    }
  }, []);

  const onBlurCallBack = useCallback( e => {

    if (inputRef.current.value) {
      return;
    }

    // only change state if focus moves away from
    // container element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // remove focus
      setOpen(false);
    }
  }, [open]);


  const onClickCallback = useCallback((e) => {
    //if (open !== true) {
      setOpen(true);
      inputRef.current.focus();
    //}
  }, [open]);


  const onFocusCallback = useCallback(() => {
    setOpen(true);
  }, [open]);

  return (
    <S.UniversalSearch
      // onBlur and onFocus don't bubble up the DOM in Preact, like they do
      // in React. So we have to use native DOM event handlers here
      onfocusin={onFocusCallback}
      onfocusout={onBlurCallBack}
      onClick={onClickCallback}
      data-onclick-identifier="universal-search-bar"
    >
      <Search {...{ open, type, inputRef, mobile }} />
    </S.UniversalSearch>
  );
};

UniversalSearch.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  mobile: PropTypes.bool
};

UniversalSearch.defaultProps = {
  open: false,
};

export { Search, UniversalSearch };
