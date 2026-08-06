import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "BS Computer Science",
    school: "FAST National University, Lahore",
    period: "2024 – 2028",
    note: "Dean's List Awardee",
  },
  {
    degree: "Intermediate (ICS)",
    school: "Punjab Group of Colleges, Kamoke",
    period: "2022 – 2024",
  },
  {
    degree: "Matriculation",
    school: "Govt High School No.2, Kamoke",
    period: "2020 – 2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-10 h-1 rounded-full bg-gradient-accent" />
            <span className="text-accent font-semibold uppercase text-sm tracking-widest">
              Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink mb-10">
            Academic <span className="text-gradient">Background</span>
          </h2>

          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="card-hover group relative bg-gradient-accent-soft rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent text-white flex items-center justify-center text-xl shadow-lg shadow-accent/25 shrink-0">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink">
                        {edu.degree}
                      </h3>
                      <p className="text-ink/60 text-sm">{edu.school}</p>
                      {edu.note && (
                        <span className="inline-block mt-2 text-xs font-semibold text-accent bg-white/70 px-3 py-1 rounded-full border border-accent/20">
                          ⭐ {edu.note}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="md:text-right text-sm font-medium text-ink/50 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
