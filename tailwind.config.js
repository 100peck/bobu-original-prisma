/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/img/hero-pattern.jpg')",
        'tricka-bg': "url('/img/tricka-bg.jpg')",
      },
      fontFamily: {
        'serif': ['"PT Serif"','ui-serif', 'Georgia'],
        'mono': ['"PT Mono"','ui-monospace', 'SFMono-Regular'],
      }
    },
  },
  plugins: [],
}
