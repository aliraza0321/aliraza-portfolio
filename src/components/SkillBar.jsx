import { motion } from "framer-motion";

export default function SkillBar({ name, level }) {
  return (
    <motion.div
      className="mb-5"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-ink/80">{name}</span>
        <span className="text-sm font-semibold text-gradient">{level}%</span>
      </div>
      <div className="w-full h-2.5 bg-ink/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-accent rounded-full relative overflow-hidden"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* shimmer */}
          <div className="absolute inset-0 bg-white/30 rounded-full animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );
}
