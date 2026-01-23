/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#000000',
        'cyber-lime': '#C0C0C0',
        'voltage-blue': '#C0C0C0',
        'window-border': '#FFFFFF',
        'window-bg': '#000000',
        'grid-line': 'rgba(255, 255, 255, 0.1)',
        'primary': '#FFFFFF',
        'secondary': '#C0C0C0',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.04em',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

