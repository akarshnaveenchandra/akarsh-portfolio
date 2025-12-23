import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'Member of Technical Staff',
    company: 'Oracle',
    period: '2024 – Present',
    points: [
      'Lead India clinical reporting engineering team.',
      'Designed and implemented the MRO Gen service for clinical reporting.',
      'Led migration of Cerner enterprise apps to modern, scalable architecture.',
    ],
  },
  {
    role: 'Software Developer 2',
    company: 'Oracle',
    period: '2023 – 2024',
    points: [
      'Owned backend services post Cerner acquisition.',
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
    <section className="py-12">
      <h2 className="mb-6">Experience</h2>
      <div className="space-y-5">
        {timeline.map((item, idx) => (
          <motion.div
            key={item.company + idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-5"
          >
            <div className="flex flex-wrap justify-between gap-2">
              <p className="font-semibold">
                {item.role}{' '}
                <span className="text-primary"> @ {item.company}</span>
              </p>
              <p className="text-sm text-white/60">{item.period}</p>
            </div>
            <ul className="mt-3 text-sm text-white/80 list-disc list-inside space-y-1">
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
