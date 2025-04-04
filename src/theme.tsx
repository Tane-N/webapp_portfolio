import { createTheme, Title, Text, Button } from "@mantine/core";
import "./css/fonts.css";

export const theme = createTheme({
  fontFamily: "Nunito Sans, sans-serif",

  primaryColor: "orange",
  defaultRadius: "md",
  defaultGradient: {
    from: "orange",
    to: "red",
    deg: 45,
  },

  components: {
    Title: Title.extend({
      defaultProps: {
        c: "white",
        style: {
          textShadow: "0rem 0rem 0.2rem rgba(0, 0, 0, 1)",
        },
      },
    }),
    Text: Text.extend({
      defaultProps: {
        c: "white",
        style: {
          textShadow: "0rem 0rem 0.2rem rgba(0, 0, 0, 1)",
        },
      },
    }),
    Button: Button.extend({
      defaultProps: {
        variant: "gradient",
        radius: "md",
        style: {
          textTransform: "capitalize",
          textShadow: "0rem 0rem 0.2rem rgba(0, 0, 0, 1)",
        },
      },
    }),
  },
});
