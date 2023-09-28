/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "big-font": "3.5rem",
        "h1-font": "2.25rem",
        "h2-font": "1.5rem",
        "h3-font": "1.25rem",
        "normal-font": "1rem",
        "small-font": "0.875rem",
        "smaller-font": "0.813rem",
        "tiny-font": "0.625rem",
      },
      colors: {
        titleColor: "hsl(0, 0%, 20%)",
        titleColorDark: "hsl(0, 0%, 0%)",
        textColor: "hsl(0, 0%, 46%)",
        bodyColor: "hsl(0, 0%, 98%)",
        containerColor: "#fff",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        profile: {
          "0%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(3.75rem)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        profile_animate: "profile 8s ease-in-out infinite",
        scroll_animate: "scroll 2s ease infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
