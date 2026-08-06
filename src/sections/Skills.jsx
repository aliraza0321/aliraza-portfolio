import { motion } from "framer-motion";
import SkillBar from "../components/SkillBar";
import { skillCategories, tools } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-accent2/5 blur-3xl" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-10 h-1 rounded-full bg-gradient-accent" />
            <span className="text-accent font-semibold uppercase text-sm tracking-widest">
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink mb-12">
            Technical <span className="text-gradient">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-hover bg-gradient-accent-soft rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold text-lg text-ink mb-5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-accent inline-block" />
                  {cat.category}
                </h3>
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h3 className="font-display font-semibold text-lg text-ink mb-5">
              Tools &amp; Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-accent-soft border border-accent/15 text-ink/80 hover:bg-gradient-accent hover:text-white hover:border-transparent transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
