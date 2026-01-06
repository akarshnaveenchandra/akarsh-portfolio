import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'Member of Technical Staff',
    company: 'Oracle',
    period: '2024 – Present',
    points: [
      'Played a key role in supporting the India clinical reporting engineering team, working closely with the tech lead to ensure smooth execution and handling of critical production issues.',
      'Designed and implemented key components of the MRO Gen service for clinical reporting, collaborating with senior engineers on system design decisions.',
      'Contributed to the migration of Cerner enterprise applications toward more modern, scalable architectures.',
    ],
  },
  {
    role: 'Software Developer II',
    company: 'Oracle',
    period: '2023 – 2024',
    points: [
      'Took ownership of backend services following the Cerner acquisition, focusing on reliability, maintainability, and production readiness.',
      'Improved performance and stability of critical clinical reporting workflows through targeted refactoring and bug fixes.',
    ],
  },
  {
    role: 'Software Engineer I / II',
    company: 'Cerner',
    period: '2019 – 2023',
    points: [
      'Improved performance and stability of critical clinical reporting workflows through targeted refactoring and bug fixes.',
      'Collaborated closely with QA, product, and upstream teams to ensure high-quality releases.',
    ],
  },
];

export default function Experience() {
  return (
    <section>
      <h2 className="mb-6">Experience</h2>

      <div className="space-y-5">
        {timeline.map((item, idx) => (
          <motion.div
            key={item.company + idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-xl border border-white/10 bg-slate-900 p-6"
          >
            <div className="flex flex-wrap justify-between gap-2">
              <p className="font-semibold">
                {item.role}
                <span className="font-medium text-zinc-400">
                  {' '}
                  @ {item.company}
                </span>
              </p>
              <p className="text-sm text-white/60">{item.period}</p>
            </div>

            <ul className="mt-3 pl-5 list-disc space-y-1 text-sm text-white/80 marker:text-zinc-500">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
