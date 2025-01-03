import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Animated({ children, animationVariants }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.15, // Trigger when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={
        animationVariants || {
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          hidden: { opacity: 0, y: 50 },
        }
      }
    >
      {children}
    </motion.div>
  );
}

export default Animated;
