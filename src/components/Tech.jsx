const backend = ['Java', 'Micronaut', 'Spring Boot', 'REST APIs', 'SQL', 'Kafka / Messaging'];
const platform = ['OCI', 'Containers', 'Linux', 'CI/CD'];
const practices = ['Distributed Systems', 'Performance Tuning', 'Clean Architecture', 'Code Reviews'];

export default function Tech() {
  return (
    <section className="py-12">
      <h2 className="mb-6">Tech & Skills</h2>
      <div className="grid gap-5 sm:grid-cols-3">
        <SkillCard title="Backend" items={backend} />
        <SkillCard title="Platform" items={platform} />
        <SkillCard title="Practices" items={practices} />
      </div>
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="text-sm text-white/80 space-y-1">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
