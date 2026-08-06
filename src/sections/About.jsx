import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaAward, FaCode } from "react-icons/fa";

const stats = [
  { icon: <FaGraduationCap />, value: "2024–2028", label: "BS Computer Science" },
  { icon: <FaBriefcase />, value: "Full Stack", label: "AI & ML Focus" },
  { icon: <FaAward />, value: "Dean's List", label: "Academic Excellence" },
  { icon: <FaCode />, value: "6+", label: "Projects Built" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-10 h-1 rounded-full bg-gradient-accent" />
              <span className="text-accent font-semibold uppercase text-sm tracking-widest">
                About
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink mb-6">
              Who I <span className="text-gradient">Am</span>
            </h2>
            <p className="text-ink/70 leading-relaxed text-lg mb-6">
              I am a Computer Science undergraduate at{" "}
              <span className="text-ink font-semibold">FAST National University, Lahore</span>,
              with hands-on experience across Full Stack Development and
              Artificial Intelligence. My work spans React, FastAPI, Python,
              and applied Machine Learning and Deep Learning.
            </p>
            <p className="text-ink/70 leading-relaxed text-lg">
              I approach every project as an opportunity to solve a genuine
              problem with{" "}
              <span className="text-accent font-medium">clean, maintainable code</span> —
              built on a foundation of internships, certifications, and
              continued industry-focused learning.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shine inline-block mt-8 bg-gradient-accent text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-accent/25"
            >
              Let's Connect
            </motion.a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-hover bg-white border border-accent/10 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-accent-soft text-accent flex items-center justify-center text-2xl">
                  {stat.icon}
                </div>
                <div className="font-display font-bold text-lg text-ink">
                  {stat.value}
                </div>
                <p className="text-ink/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
