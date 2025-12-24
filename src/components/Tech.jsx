const backend = ['Java', 'Micronaut', 'Spring Boot', 'REST APIs', 'SQL', 'Kafka / Messaging'];
const platform = ['OCI', 'Containers', 'Linux', 'CI/CD'];
const practices = ['Distributed Systems', 'Performance Tuning', 'Clean Architecture', 'Code Reviews'];

export default function Tech() {
  return (
    <section>
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
    <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
      <h3 className="font-semibold mb-3">{title}</h3>

      <ul className="pl-4 list-disc space-y-1 text-sm text-white/80 marker:text-zinc-500">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
