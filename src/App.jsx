import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
