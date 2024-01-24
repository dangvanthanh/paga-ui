import { defineConfig } from "@pandacss/dev";
import pagaPreset from "../../packages/preset/src/index";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/preset-base", pagaPreset],
  include: [
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
  ],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: "styled-system",
});