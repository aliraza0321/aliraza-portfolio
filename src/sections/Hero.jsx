import { motion } from "framer-motion";
import ThreeHero from "../components/ThreeHero";
import SocialIcons from "../components/SocialIcons";
import { FaCode, FaBrain, FaRocket, FaArrowDown } from "react-icons/fa";

const floatingBadges = [
  { icon: <FaCode />, label: "React", pos: "top-24 left-8", delay: 0 },
  { icon: <FaBrain />, label: "AI / ML", pos: "top-40 right-10", delay: 1 },
  { icon: <FaRocket />, label: "FastAPI", pos: "bottom-32 left-16", delay: 2 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-20 overflow-hidden bg-gradient-dark"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent2/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-accent3/20 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <ThreeHero />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
<p className="text-accent3 font-medium mb-3 tracking-widest uppercase text-sm">
            Software Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Ali <span className="text-gradient">Raza</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-md">
            Computer Science undergraduate specializing in Artificial
            Intelligence, Machine Learning, and Full Stack Development.
            Turning complex problems into{" "}
            <span className="text-white font-semibold">elegant, scalable solutions</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-shine bg-gradient-accent text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent2/30 transition-shadow"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/ALI-RAZA-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 hover:border-accent3 transition-all"
            >
              Download CV
            </motion.a>
          </div>

          <div className="mt-8">
            <SocialIcons className="text-white/70 [&_a]:text-white/70 [&_a:hover]:text-accent3" />
          </div>
        </motion.div>

        {/* Right column - image with floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent rounded-full blur-2xl opacity-50 animate-pulse-glow" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="/mypic.jpeg"
                alt="Ali Raza"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating tech badges */}
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + badge.delay * 0.3 }}
                className={`absolute ${badge.pos} hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium animate-float shadow-lg`}
                style={{ animationDelay: `${badge.delay}s` }}
              >
                <span className="text-accent3">{badge.icon}</span>
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaArrowDown className="text-2xl" />
      </motion.a>
    </section>
  );
}
