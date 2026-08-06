import { motion } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent3/5 blur-3xl" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-10 h-1 rounded-full bg-gradient-accent" />
            <span className="text-accent font-semibold uppercase text-sm tracking-widest">
              Certifications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink mb-12">
            Credentials &amp; <span className="text-gradient">Learning</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-hover group bg-gradient-accent-soft rounded-2xl p-5 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-accent/20 group-hover:text-accent/40 transition-colors">
                  <FaCertificate size={28} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-accent text-white flex items-center justify-center text-xl shadow-lg shadow-accent/25 mb-4">
                  <FaAward />
                </div>
                <h3 className="font-display font-semibold text-ink leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-ink/60">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
