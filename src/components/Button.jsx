import PropTypes from "prop-types";
import * as motion from "motion/react-client";

const Button = ({ children, func }) => {
  return (
    <motion.button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 blueShadow duration-200 border-blue-400 border-solid "
    >
      <p>{children} </p>
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  func: PropTypes.func,
};

export default Button;
