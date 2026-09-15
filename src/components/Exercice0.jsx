import { motion } from "motion/react";
// Utilisation de Variants pour définir les états de l'animation
// 'hidden' : état initial
// 'visible' : état final
// 'transition' : paramètres de l'animation
//  'delayChildren': déclenche l'animation de tous les enfants après un délai
//  'staggerChildren': déclenche les animations des enfants les unes après les autres

const containersVariants = {
  hidden: { opacity: 0, y: -500, scale: 0.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      delay: 1,
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};
const spanVariants = {
  hidden: { opacity: 0, scale: 0.5, y: -500, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring" },
  },
};
export default function Exercice0() {
  return (
    <motion.h1
      variants={containersVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
      className="text-5xl font-bold text-white"
    >
      Hello{" "}
      <motion.span
        variants={spanVariants}

        className="inline-block text-blue-500"
      >
        World&nbsp;
      </motion.span>
      <span className="inline-block">!</span>
    </motion.h1>
  );
}
