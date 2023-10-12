import { defineSlotRecipe } from "@pandacss/dev";

export const pagination = defineSlotRecipe({
  className: "pagination",
  slots: ["root", "item", "ellipsis", "prev-trigger", "next-trigger"],
  base: {
    root: { display: "flex", alignItems: "center", gap: "2" },
    item: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: "1px",
      borderColor: "gray.300",
      borderRadius: "sm",
      height: 9,
      minWidth: 9,
      textStyle: "sm",
      paddingInline: 3.5,
      fontVariantNumeric: "tabular-nums",
      _selected: {
        background: "gray.900",
        color: "white",
        _hover: {
          background: "gray.800",
        },
      },
      _hover: {
        bg: "gray.100",
      },
    },
    ellipsis: {
      display: "inline-flex",
      alignItems: "center",
      color: "gray.100",
      fontWeight: "600",
      px: 2,
    },
    "prev-trigger": {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "sm",
      height: 9,
      minWidth: 9,
      textStyle: "sm",
      paddingInline: 1.5,
      // _disabled: {
      //   opacity: ".3",
      //   cursor: "default",
      //   pointerEvents: "none",
      // },
      _hover: {
        bg: "gray.100",
      },
    },
    "next-trigger": {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "sm",
      height: 9,
      minWidth: 9,
      textStyle: "sm",
      paddingInline: 1.5,
      // _disabled: {
      //   opacity: ".3",
      //   cursor: "default",
      //   pointerEvents: "none",
      // },
      _hover: {
        bg: "gray.100",
      },
    },
  },
});
