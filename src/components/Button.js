import PropTypes from "prop-types";

const Button = ({ onClick, color, children }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
