import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-slate-900 p-8 text-center"
      >
        <h2 className="mb-3">Contact</h2>

        <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto mb-8">
          Interested in working together or just want to connect?
          I’m always happy to chat.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:akarshnaveenchandra.work@gmail.com"
            className="px-5 py-2 rounded-full border border-white/20 text-sm text-white/80 hover:border-zinc-400 hover:text-white transition"
          >
            📧 Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/akarshnaveenchandra"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full border border-white/20 text-sm text-white/80 hover:border-zinc-400 hover:text-white transition"
          >
            💼 LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
