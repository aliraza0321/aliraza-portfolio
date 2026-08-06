import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="card-hover group bg-white border border-accent/10 rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-accent text-white flex items-center justify-center text-xl shadow-lg shadow-accent/25 group-hover:rotate-6 transition-transform">
          <FaFolder />
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-ink/50 hover:text-accent transition-colors"
          >
            <FaGithub size={20} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-ink/50 hover:text-accent2 transition-colors"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display font-semibold text-lg text-ink mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-ink/70 leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-accent-soft text-accent border border-accent/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 pt-4 border-t border-ink/10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-accent transition-colors"
        >
          <FaGithub /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-accent2 transition-colors"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
