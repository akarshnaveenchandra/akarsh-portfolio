import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MRO Gen Service',
    tech: ['Java', 'Micronaut', 'OCI'],
    problem:
      'Legacy reporting workflows were tightly coupled and difficult to scale for new requirements.',
    desc:
      'Architected and implemented a clinical reporting service powering key enterprise workflows.',
    impact:
      'Improved reporting reliability and scalability for healthcare customers.',
  },
  {
    title: 'Cerner → Modern Architecture Migration',
    tech: ['Java', 'Microservices', 'Messaging'],
    problem:
      'Monolithic legacy modules made changes risky and slowed down feature delivery.',
    desc:
      'Migrated legacy Cerner modules to modern services with cleaner boundaries and better observability.',
    impact:
      'Reduced maintenance overhead and enabled future feature delivery.',
  },
  {
    title: 'Cost Optimization & Dependency Reduction',
    tech: ['Profiling', 'Refactoring', 'Cloud'],
    problem:
      'Third-party dependencies and inefficient resource usage caused instability and higher costs.',
    desc:
      'Redesigned modules to remove unreliable third-party dependencies and optimize cloud usage.',
    impact:
      'Lowered cost footprint while improving stability for critical paths.',
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="mb-6">Key Projects</h2>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="rounded-xl border border-white/10 bg-slate-900 p-6"
          >
            <h3 className="mb-1">{p.title}</h3>

            <p className="text-xs uppercase tracking-wide font-medium text-zinc-400 mb-2">
              {p.tech.join(' • ')}
            </p>

            <p className="text-xs text-white/70 mb-2">
              <span className="font-medium text-zinc-400">Problem:</span>{' '}
              {p.problem}
            </p>

            <p className="text-sm text-white/80 mb-2">
              {p.desc}
            </p>

            <p className="text-xs font-medium text-zinc-400">
              {p.impact}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
