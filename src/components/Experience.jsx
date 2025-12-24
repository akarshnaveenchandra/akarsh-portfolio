import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'Member of Technical Staff',
    company: 'Oracle',
    period: '2024 – Present',
    points: [
      'Lead India clinical reporting engineering team.',
      'Designed and implemented the MRO Gen service for clinical reporting.',
      'Led migration of Cerner enterprise applications to modern, scalable architecture.',
    ],
  },
  {
    role: 'Software Developer II',
    company: 'Oracle',
    period: '2023 – 2024',
    points: [
      'Owned backend services following the Cerner acquisition.',
      'Improved performance and reliability of critical reporting flows.',
    ],
  },
  {
    role: 'Software Engineer I / II',
    company: 'Cerner',
    period: '2019 – 2023',
    points: [
      'Owned and delivered core clinical reporting features for enterprise healthcare customers.',
      'Collaborated with cross-functional teams to deliver high-quality releases.',
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
