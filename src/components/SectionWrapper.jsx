import PropTypes from "prop-types";
import * as motion from "motion/react-client";

const SectionWrapper = ({ children, header, title, id }) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id={id}
      className="flex flex-col min-h-screen gap-10 "
    >
      <div className="flex flex-col items-center justify-center gap-2 p-4 py-10 bg-slate-950">
        <p className="font-medium uppercase">{header}</p>
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          {title[0]}{" "}
          <span className="text-blue-400 uppercase">{title[1]} </span>
          {title[2]}
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3 }}
        viewport={{ once: true }}
        className="flex w-full mx-auto bg-gradient-to-r from-slate-800 to-slate-950"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ amount: 0.3 }}
          className="flex flex-col max-w-[800px] w-full gap-10 p-4 mx-auto  "
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  title: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
};
export default SectionWrapper;
