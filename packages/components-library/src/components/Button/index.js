/* eslint-disable react/prop-types */
import {forwardRef} from "preact/compat";
import PropTypes from "prop-types";

import * as S from "./styles";

/**
 * The button component will render a clickable button
 */
const Button = forwardRef(({href, children, ...props}, ref) => {
  const type = href ? "link" : "button";

  return (
    <S.Button type={type} ref={ref} {...href ? {href}: {}} {...props}>
      {children}
    </S.Button>
  );
});

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  gold: PropTypes.bool,
  maroon: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  itemRef: PropTypes.oneOfType([
    // ref to actual DOM node of nav item
    // https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  onFocus: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
};

export { Button };
