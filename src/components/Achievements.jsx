import { motion } from 'framer-motion';

const achievements = [
  '5+ years in enterprise healthcare software development.',
  'Led clinical reporting engineering efforts as Member of Technical Staff @ Oracle.',
  'Experience modernizing legacy systems into scalable service-based architectures.',
];

export default function Achievements() {
  return (
    <section className="py-12">
      <h2 className="mb-6">Achievements</h2>
      <motion.ul
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-3 text-sm text-white/85"
      >
        {achievements.map((a) => (
          <li
            key={a}
            className="rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3"
          >
            {a}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
