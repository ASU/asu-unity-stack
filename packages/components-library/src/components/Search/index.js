/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { useRef } from "preact/compat";
import * as S from "./styles";
import PropTypes from "prop-types";
import { Icon } from "../Icons";

const Search = ({ type, open, inputRef, ...props }) => {
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
        >
          <input
            name="q"
            type="text"
            {...(inputRef ? { ref: inputRef } : {})}
            required
          />
          {props.children}
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
};

Search.defaultProps = {};

const UniversalSearch = ({ type, open, setOpen }) => {
  //const toggle = () => setOpen(oldOpen => !oldOpen);

  // ref to input dom node
  const inputRef = useRef(null);

  const onBlur = e => {
    if (inputRef.current.value) {
      return;
    }

    console.log(e, "THE VENT");

    // only change state if focus moves away from
    // container element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // remove focus
      setOpen(false);
    }
  };

  return (
    <S.UniversalSearch
      // onBlur and onFocus don't bubble up the DOM in Preact, like they do
      // in React, so we have to use native DOM event handlers here
      onfocusin={() => setOpen(true)}
      onfocusout={onBlur}
      onClick={e => {
        console.log(e, "THE EVNT");
        e.preventDefault();
        setOpen(true);
        inputRef.current.focus();
      }}
    >
      <Search {...{ open, type, inputRef }}>
        <Icon type="search" />
        <label class="univeral-search">Search ASU</label>
      </Search>
    </S.UniversalSearch>
  );
};

UniversalSearch.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

UniversalSearch.defaultProps = {
  open: false,
};

export { Search, UniversalSearch };
