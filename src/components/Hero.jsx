import { motion } from 'framer-motion';
import ResumeButton from './ResumeButton.jsx';

export default function Hero() {
  return (
    <section className="py-16">
      <div className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
        >
          Hey, I&apos;m{' '}
          <span className="font-extrabold text-zinc-300">
            Akarsh
          </span>{' '}
          👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto"
        >
          Software Developer crafting systems that matter. Member of Technical Staff @ Oracle with 5+ years
          in enterprise healthcare software, backend development, and problem solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <ResumeButton />
        </motion.div>
      </div>
    </section>
  );
}
