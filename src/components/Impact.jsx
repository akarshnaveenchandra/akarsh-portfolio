import { motion } from 'framer-motion';

export default function Impact() {
  return (
    <section>
    <h2 className="mb-6">Impact & Outcomes</h2>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-lg shadow-primary/10"
      >

        <ul className="list-disc list-inside space-y-3 text-white/80">
          <li>
            Led modernization of backend clinical reporting systems in a highly
            regulated enterprise healthcare environment
          </li>
          <li>
            Improved system reliability and operational stability through
            targeted architectural refactors and dependency simplification
          </li>
          <li>
            Enabled safer and faster feature delivery by migrating legacy
            components toward service-oriented designs
          </li>
          <li>
            Took end-to-end ownership of complex backend services following
            acquisition, prioritizing continuity and long-term maintainability
          </li>
          <li>
            Served as a technical point of contact for cross-team initiatives
            spanning reporting workflows, data pipelines, and platform
            integration
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
