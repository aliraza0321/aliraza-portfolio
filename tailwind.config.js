/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#3B5BFF",
          light: "#5B7CFF",
          dark: "#2A3FCC",
        },
        accent2: {
          DEFAULT: "#7C3AED",
          light: "#A78BFA",
          dark: "#5B21B6",
        },
        accent3: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
        },
        ink: "#0F1115",
        paper: "#FAFAF9",
        night: "#0A0E1A",
        night2: "#111527",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #3B5BFF 0%, #7C3AED 50%, #06B6D4 100%)",
        "gradient-accent-soft":
          "linear-gradient(135deg, rgba(59,91,255,0.12) 0%, rgba(124,58,237,0.12) 50%, rgba(6,182,212,0.12) 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #0A0E1A 0%, #111527 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-30px) translateX(15px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 30px) scale(0.9)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,91,255,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(124,58,237,0.6)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bounce-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
"gradient-shift": "gradient-shift 6s ease infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 30s linear infinite",
        "bounce-down": "bounce-down 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
