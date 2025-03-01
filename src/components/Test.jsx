import { useMotionTemplate, useScroll, useTransform } from "motion/react";
import * as motion from "motion/react-client";
import { useRef } from "react";

const SECTION_HEIGHT = 1600;

const Test = () => {
  return (
    <div
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <CenteredImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-slate-950/0 to-slate-950" />
    </div>
  );
};

const CenteredImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%,${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [0, SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [0, 1, 0.5]
  );

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT, SECTION_HEIGHT + 500],
    ["130%", "100%", "100%"]
  );

  return (
    <motion.div
      className="sticky top-0 w-full h-screen "
      style={{
        opacity,
        backgroundSize,
        clipPath,
        backgroundImage: `url(/Okada3.jpg)`,
        backgroundPositionX: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <motion.div className="mx-auto max-w-5xl px-4 pt-[200px] relative z-10">
      <ParallaxImg src="/omega.JPG" start={150} end={-50} className="w-1/4 " />
      <ParallaxImg
        src="/iyo.jpg"
        start={-50}
        end={-250}
        className="w-1/4 ml-auto "
      />
      <ParallaxImg
        src="/tama.jpg"
        start={-250}
        end={-450}
        className="w-5/12 ml-24"
      />
      <ParallaxImg
        src="/kairi.jpg"
        start={-450}
        end={-650}
        className="w-2/4 ml-96 "
      />
    </motion.div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  //   useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //     console.log(latest)
  //   );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.9, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ opacity, transform }}
    />
  );
};
export default Test;
