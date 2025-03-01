import PropTypes from "prop-types";
import * as motion from "motion/react-client";

const SectionWrapper = ({ children, header, title, id }) => {
  return (
    <section id={id} className="flex flex-col min-h-screen gap-10 ">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center justify-center gap-2 p-4 py-10 bg-slate-950"
      >
        <p className="font-medium uppercase">{header}</p>
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          {title[0]}{" "}
          <span className="text-blue-400 uppercase">{title[1]} </span>
          {title[2]}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex w-full mx-auto bg-gradient-to-r from-slate-800 to-slate-950"
      >
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: [50, 0] }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col max-w-[800px] w-full gap-10 p-4 mx-auto  "
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  title: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
};
export default SectionWrapper;
