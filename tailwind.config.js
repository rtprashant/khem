/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          deep: "#050505",
          soft: "#151312",
        },
        ivory: {
          DEFAULT: "#F6F1E6",
          deep: "#EFE7D6",
        },
        sand: "#E7DCC4",
        charcoal: {
          DEFAULT: "#221E1B",
          soft: "#39332D",
        },
        burgundy: {
          DEFAULT: "#6E2430",
          deep: "#4E1620",
          soft: "#8B3A46",
        },
        bone: "#EDE8DE",
        gold: "#D5A84B",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
        subheading: ["var(--font-oswald)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest2: "-0.04em",
        wide2: "0.18em",
        wide3: "0.32em",
      },
      transitionTimingFunction: {
        "ink": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
