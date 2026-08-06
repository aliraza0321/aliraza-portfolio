import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialIcons({ size = 20, className = "" }) {
  const iconLinks = [
    { icon: <FaGithub size={size} />, href: "https://github.com/aliraza0321", label: "GitHub" },
    { icon: <FaLinkedin size={size} />, href: "https://www.linkedin.com/in/ali-raza-b432ab354", label: "LinkedIn" },
    { icon: <FaEnvelope size={size} />, href: "mailto:alirazamehar0321@gmail.com", label: "Email" },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {iconLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.label !== "Email" ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={item.label}
          className="text-ink/70 hover:text-accent transition-colors"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
