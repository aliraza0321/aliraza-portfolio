import SocialIcons from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/50">
          © {year} <span className="text-gradient font-semibold">Ali Raza</span> — AI &amp; ML Engineer, Software Developer
        </p>
        <a
          href="#home"
          className="text-sm text-accent3 hover:text-white transition-colors"
        >
          ↑ Back to top
        </a>
        <SocialIcons size={18} className="[&_a]:text-white/50 [&_a:hover]:text-accent3" />
      </div>
    </footer>
  );
}
