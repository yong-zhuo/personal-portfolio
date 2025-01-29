/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        exo: ["Exo", "monospace"],
        JetBrains: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {

        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(100vw)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require('daisyui'), 
    require('tailwind-scrollbar')
  ],
  daisyui: {
    themes: [{
      dark: {
        "primary":"#293241",
        "primary-content":"#475671",
        "secondary":"#e0fbfc",
        "base-100": "#293241"
      }
    }]
  }
  
};
