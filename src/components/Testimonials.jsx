import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section>
      <h2 className="mb-6">What Colleagues & Managers Say</h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-white/10 bg-slate-900 p-6"
      >
        <blockquote className="italic text-white/80 space-y-4">
          <p>
            “Akarsh played a key role in establishing and supporting the India
            engineering team for Clinical Reporting, initially working directly
            with US stakeholders and handling that responsibility with
            professionalism and maturity. He consistently demonstrated a strong
            grasp of the product, attention to detail, and a calm,
            ownership-driven approach to problem solving.”
          </p>

          <p>
            “Across both Clinical Reporting Millennium (Gen 1) and New Millennium
            (Gen 2) platforms, Akarsh delivered impactful backend contributions—
            from compliance and regulatory enhancements to development of the MRO
            Gen Service. He strengthened system reliability through architectural
            improvements, improved observability and monitoring, and supported
            customer success by resolving high-priority issues.”
          </p>

          <p>
            “He collaborates effectively across teams, communicates technical
            concepts clearly, and adapts well to evolving systems and
            organizational changes. His commitment to continuous learning and
            long-term maintainability makes him a dependable and trusted
            engineer.”
          </p>
        </blockquote>

        <div className="mt-6 text-sm text-zinc-400 space-y-1">
          <p>— Sanjay Maheshwari, Tech Lead (SDE-3), Oracle</p>
          <p>— Deepak Kumar Gupta, Senior Manager, Software Development, Oracle</p>
        </div>
      </motion.div>
    </section>
  );
}
