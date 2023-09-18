import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/dev";
import { slotRecipes } from "./recipes";
import { tokens } from "./tokens";

const preset: Preset = definePreset({
  theme: {
    extend: {
      slotRecipes,
      tokens,
    },
  },
});

export default preset