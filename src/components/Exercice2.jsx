import { motion } from "motion/react";
/**
 * ## Exercice 2 : Keyframes et Boucles
 * Objectif : Créer des animations cycliques complexes.
 * - Utiliser des tableaux de valeurs (keyframes) pour les propriétés `scale`, `rotate` et `borderRadius`.
 * - Mettre en place une boucle infinie avec `repeat: Infinity` et `repeatType: "reverse"`.
 */

const keyframesVariants = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function Exercice2() {
  return (
    <div className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800">
      <motion.div
        variants={keyframesVariants}
        animate="animate"
        className="h-1/3 w-1/3 bg-rose-400 shadow-xl"
      ></motion.div>
    </div>
  );
}
