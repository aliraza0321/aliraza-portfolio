import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-accent-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
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
              Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink mb-12">
            Selected <span className="text-gradient">Work</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
