import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import SocialIcons from "../components/SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-blob" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent2/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-10 h-1 rounded-full bg-gradient-accent" />
          </div>
          <p className="text-accent3 font-semibold uppercase text-sm tracking-widest mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Let's Build Something <span className="text-gradient">Great</span>
          </h2>
          <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-10">
            I'm always open to discussing new opportunities, collaborations,
            or just exchanging ideas about software engineering and AI.
            Feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
            <motion.a
              href="mailto:alirazamehar0321@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-shine flex items-center gap-3 bg-gradient-accent text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-lg shadow-accent/30"
            >
              <FaPaperPlane />
              Email Me
            </motion.a>
            <div className="flex items-center gap-3 text-white/80">
              <FaMapMarkerAlt className="text-accent3" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-white/50 text-sm mb-8">
            <FaEnvelope />
            <span>alirazamehar0321@gmail.com</span>
          </div>

          <SocialIcons size={24} className="justify-center [&_a]:text-white/70 [&_a:hover]:text-accent3" />
        </motion.div>
      </div>
    </section>
  );
}
