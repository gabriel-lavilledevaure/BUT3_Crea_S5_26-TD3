import { motion } from "motion/react";
/**
 * ## Exercice 1 : Orchestration (Stagger)
 *  Objectif : Animer plusieurs éléments de manière séquentielle.
 * - Créer un conteneur parent et deux enfants.
 * - Utiliser `staggerChildren` dans le variant parent pour décaler l'apparition des enfants.
 * - Faire venir un enfant du haut et l'autre du bas.
 */

const containersVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },
};

const squareVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring" },
  },
};

const circleVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring" },
  },
};

export default function Exercice1() {
  return (
    <motion.div
      variants={containersVariants}
      initial="hidden"
      animate="visible"

      className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800"
    >
      {/* Carré */}
      <motion.div
        variants={squareVariants}
        className="h-20 w-20 rounded-lg bg-stone-100"
      ></motion.div>

      {/* Cercle */}
      <motion.div
        variants={circleVariants}
        className="h-20 w-20 rounded-full bg-stone-100"
      ></motion.div>
    </motion.div>
  );
}
