import PropTypes from "prop-types";

const Button = ({ children, func }) => {
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 blueShadow duration-200 border-blue-400 border-solid "
    >
      <p>{children} </p>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  func: PropTypes.func,
};

export default Button;
