import { motion } from "motion/react";
/**
 * ## Exercice 4 : Animation SVG
 * Objectif : Animer des tracés vectoriels.
 * - Utiliser `pathLength` pour faire "se dessiner" une icône SVG.
 * - Définir des transitions spécifiques pour le tracé (`default`) et le remplissage (`fill`).
 * - Utiliser `repeatType: "reverse"` pour un effet de va-et-vient.
 */

const svgVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    fill: "rgba(245, 158, 11, 0)",
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill: "rgba(245, 158, 11, 1)",
    transition: {
      default: {
        duration: 2,
        ease: "easeInOut",
        repeatType: "reverse",
        repeat: Infinity,
      },
      fill: { duration: 1, ease: [1, 0, 0.8, 1], delay: 2 },
    },
  },
};

export default function Exercice4() {
  return (
    <div className="flex aspect-square items-center justify-center gap-10 rounded-lg bg-slate-800">
      <motion.svg
        variants={svgVariants}
        initial="hidden"
        animate="visible"

        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-1/2 stroke-amber-900 stroke-[0.5]"
      >
        <motion.path
          variants={svgVariants}
          initial="hidden"
          animate="visible"

          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          fill="rgba(245, 158, 11, 1)"
        />
      </motion.svg>
    </div>
  );
}
