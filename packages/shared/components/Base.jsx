import PropTypes from "prop-types";

export const Base = ({ children }) => <>{children}</>;

Base.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};
