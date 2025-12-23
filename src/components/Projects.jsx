import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MRO Gen Service',
    tech: ['Java', 'Micronaut', 'OCI'],
    problem: 'Legacy reporting workflows were tightly coupled and difficult to scale for new requirements.',
    desc: 'Architected and implemented a clinical reporting service powering key enterprise workflows.',
    impact: 'Improved reporting reliability and scalability for healthcare customers.',
  },
  {
    title: 'Cerner → Modern Architecture Migration',
    problem: 'Monolithic legacy modules made changes risky and slowed down feature delivery.',
    tech: ['Java', 'Microservices', 'Messaging'],
    desc: 'Migrated legacy Cerner modules to modern services with cleaner boundaries and better observability.',
    impact: 'Reduced maintenance overhead and enabled future feature delivery.',
  },
  {
    title: 'Cost Optimization & Dependency Reduction',
    problem: 'Third-party dependencies and inefficient resource usage caused instability and higher costs.',
    tech: ['Profiling', 'Refactoring', 'Cloud'],
    desc: 'Redesigned modules to remove unreliable third-party dependencies and optimize cloud usage.',
    impact: 'Lowered cost footprint while improving stability for critical paths.',
  },
];

export default function Projects() {
  return (
    <section className="py-12">
      <h2 className="mb-6">Key Projects</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.03, y: -2 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-lg shadow-primary/10"
          >
            <h3 className="mb-1">{p.title}</h3>

            <p className="text-xs uppercase tracking-wide text-primary mb-2">
              {p.tech.join(' • ')}
            </p>

            <p className="text-xs text-white/60 mb-2">
              <span className="font-medium text-white/70">Problem:</span> {p.problem}
            </p>

            <p className="text-sm text-white/80 mb-2">
              {p.desc}
            </p>

            <p className="text-xs text-secondary/90 font-medium">
              {p.impact}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
