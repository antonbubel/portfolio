/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      animation: {
        typing: "typing 1.5s steps(20), blink 1s infinite",
        fade: "fadeOut 1s ease-in-out",
      },
      keyframes: {
        typing: {
          from: {
            width: "0",
          },
          to: {
            width: "21ch",
          },
        },
        blink: {
          from: {
            "border-right-color": "transparent",
          },
          to: {
            "border-right-color": "var(--nc)",
          },
        },
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["night", "winter"],
  },
};
