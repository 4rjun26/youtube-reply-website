'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInCard = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures the fade-in effect happens only once
    threshold: 0.1, // Controls how much of the element needs to be visible before triggering
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // Controls the fade-in animation
      transition={{ duration: 0.3 }} // Adjust the duration as desired
    >
      {children}
    </motion.div>
  );
};

export default FadeInCard;
