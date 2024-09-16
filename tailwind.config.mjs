export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        segoe: ["Segoe UI", "sans-serif"],
      },
      fontSize: {
        "88px": "88px",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};