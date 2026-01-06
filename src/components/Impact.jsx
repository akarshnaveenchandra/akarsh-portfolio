import { motion } from 'framer-motion';

export default function Impact() {
  return (
    <section>
      <h2 className="mb-6">Impact & Outcomes</h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-white/10 bg-slate-900 p-6"
      >
        <ul className="list-disc pl-5 space-y-3 text-white/80 marker:text-zinc-500">
          <li>
            Played a key role in modernization efforts for backend clinical reporting systems in a regulated enterprise healthcare environment.
          </li>
          <li>
            Improved system reliability and operational stability through architectural refactors and dependency simplification.
          </li>
          <li>
            Enabled safer and faster feature delivery by contributing to the migration of legacy components toward service-oriented designs.
          </li>
          <li>
            Took ownership of critical backend services within the team, ensuring continuity and long-term maintainability post-acquisition.
          </li>
          <li>
           Served as a trusted technical point of contact for cross-team initiatives spanning reporting workflows, data pipelines, and platform integration.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
