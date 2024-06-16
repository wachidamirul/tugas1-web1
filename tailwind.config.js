const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "2xl": "1320px",
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        popover: "hsl(var(--popover) / <alpha-value>)",
        "popover-foreground": "hsl(var(--popover-foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        "secondary-foreground":
          "hsl(var(--secondary-foreground) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",
        destructive: "hsl(var(--destructive) / <alpha-value>)",
        "destructive-foreground":
          "hsl(var(--destructive-foreground) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        radius: "hsl(var(--radius) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
