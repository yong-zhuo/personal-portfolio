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
    },
  },
  plugins: [require('daisyui'),],
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
