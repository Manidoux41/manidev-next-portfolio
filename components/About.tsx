/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="./moi.jpg"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-34 md:h-95 xl:w-[300px] xl:h-[425px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Passionné de découvrir de nouveau languages informatique, passionné
          dans le fait même d'apprendre. C'est cette passion qui fait de moi un
          véritable couteau suisse dans la crétation et le développement
          d'application web. HTML, CSS et javascript sont à ce jour des
          languages qui ont très peu de secret pour moi.Les projets que j'ai réalisé au cours de ma
          formation témoignent d'un travail de qualité que je suis en mesure de
          rendre dans des délais impartis. Aussi, si vous me faites confiance
          dans la réalisation de vos projets, soyez assuré des maîtres-mots
          suivants : "Qualité et Délais".
        </p>
      </div>
    </motion.div>
  );
}
