import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";
import { recipes } from "./recipes";
import { slotRecipes } from "./slot-recipes";

const preset: Preset = definePreset({
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
});

export default preset;
