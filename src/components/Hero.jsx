import Button from "./Button";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ amount: 0.5 }}
      className="flex flex-col items-center justify-center p-4 mx-auto text-center bg-gradient-to-r from-slate-800 to-slate-950 "
    >
      <div className="max-w-[800px] min-h-screen w-full gap-10 flex flex-col items-center justify-center">
        <motion.div className="flex flex-col gap-4">
          <motion.div className="flex items-center justify-center gap-2">
            {["IT'S", "TIME", "TO", "GET"].map((word, i) => (
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: [-100, 0] }}
                transition={{
                  duration: 0.5 * 1,
                  delay: i * 0.5,
                  ease: "linear",
                }} // Delays each word slightly
                viewport={{ once: true }}
                key={i}
              >
                {word}
              </motion.p>
            ))}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl"
          >
            ODA<motion.span className="text-blue-400">NORMOUS</motion.span>
          </motion.h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-xs font-light md:text-base lg:text-lg"
        >
          I hearby acknowledge that I may become
          <span className="font-medium text-blue-400">
            {" "}
            unbelievably Odanormous
          </span>{" "}
          and accept all risks of becoming the local
          <span className="font-medium text-blue-400"> mass monstrosity</span>,
          afflicted with severe body dismorphia, unable to fit through doors
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Button func={() => (window.location.href = "#generate")}>
            Accept & Begin
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
