import { motion } from "motion/react"
import {container, fadeUp} from '/workspaces/personalPortfolio/my-project/src/components/animationsVariants.js'


export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1f0f3c] via-[#0d0d0d] to-black text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-2xl px-6 py-32 sm:py-48 lg:py-56 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          I'm
        </motion.h1>

        <motion.h1
          variants={fadeUp}
          className="text-5xl font-extrabold tracking-tight text-indigo-400 sm:text-6xl"
        >
          Kaiden
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg text-gray-300 sm:text-xl"
        >
          I design bold, functional web experiences with clean code and creative UI.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <a
            href="#projects"
            className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-400 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-indigo-300 hover:underline"
          >
            Contact Me →
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}