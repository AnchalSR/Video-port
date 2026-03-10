/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        neonBlue: "#00e5ff",
        neonPurple: "#7c3aed",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Manrope", "sans-serif"],
      },
      boxShadow: {
        glowBlue: "0 0 32px rgba(0, 229, 255, 0.25)",
        glowPurple: "0 0 32px rgba(124, 58, 237, 0.22)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(0,229,255,0.2), transparent 45%), radial-gradient(circle at 80% 15%, rgba(124,58,237,0.18), transparent 50%), radial-gradient(circle at 45% 80%, rgba(45,212,191,0.15), transparent 50%)",
      },
    },
  },
  plugins: [],
};
