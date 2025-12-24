import { motion } from 'framer-motion';

const achievements = [
  '5+ years of experience in enterprise healthcare software development.',
  'Led clinical reporting engineering initiatives as Member of Technical Staff at Oracle.',
  'Modernized legacy systems into scalable, service-based architectures.',
];

export default function Achievements() {
  return (
    <section>
      <h2 className="mb-6">Achievements</h2>

      <motion.ul
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-3 text-sm text-white/80"
      >
        {achievements.map((a) => (
          <li
            key={a}
            className="rounded-lg border border-white/10 bg-slate-900 px-5 py-3"
          >
            <span className="text-zinc-400 font-medium">•</span>{' '}
            {a}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
