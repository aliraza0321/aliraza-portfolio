import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "Machine Learning Fundamentals Intern",
    company: "NeuroFive Solution",
    period: "July 2026 – August 2026",
    points: [
      "Performed data visualization and exploratory analysis using Python.",
      "Built and evaluated machine learning models on real-world datasets.",
      "Worked on a Titanic survival prediction model, covering training and evaluation.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gradient-accent-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-10 h-1 rounded-full bg-gradient-accent" />
            <span className="text-accent font-semibold uppercase text-sm tracking-widest">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink mb-12">
            Professional <span className="text-gradient">Journey</span>
          </h2>

          <div className="relative border-l-2 border-accent/40 pl-8 ml-2">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative card-hover bg-white/80 backdrop-blur rounded-2xl p-6 mb-8 shadow-sm"
              >
                <span className="absolute -left-[45px] top-6 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white shadow-lg shadow-accent/30">
                  <FaBriefcase size={14} />
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="font-display font-semibold text-lg text-ink">
                    {exp.role}
                  </h3>
                  <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gradient font-semibold mb-4">{exp.company}</p>
                <ul className="space-y-2 text-ink/70 text-sm leading-relaxed">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
