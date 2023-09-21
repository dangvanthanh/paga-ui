import { defineConfig } from "@pandacss/dev";
import { buttonRecipe, switchRecipe } from "@paga/ui";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        button: buttonRecipe,
      },
      slotRecipes: {
        switches: switchRecipe,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
