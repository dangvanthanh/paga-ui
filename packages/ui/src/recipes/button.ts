import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    verticalAlign: "top",
    cursor: "pointer",
  },
  variants: {
    variant: {
      primary: {
        borderWidth: "1px",
        borderColor: "gray.100",
        _hover: {
          background: "gray.50",
        },
        _focusVisible: {
          outlineOffset: "2px",
          outline: "2px solid",
          outlineColor: "blue.600",
        },
        _disabled: {
          background: "gray.300",
          cursor: "not-allowed",
          _hover: {
            background: "gray.300",
          },
        },
      },
    },
    size: {
      xs: {
        h: "8",
        minW: "8",
        textStyle: "xs",
        px: "3",
        gap: "2",
      },
      sm: {
        h: "9",
        minW: "9",
        textStyle: "sm",
        px: "3.5",
        gap: "2",
      },
      md: {
        h: "10",
        minW: "10",
        textStyle: "sm",
        px: "4",
        gap: "2",
      },
      lg: {
        h: "12",
        minW: "12",
        textStyle: "md",
        px: "6",
        gap: "2",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
