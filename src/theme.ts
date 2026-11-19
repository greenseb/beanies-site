export const theme = {
  colors: {
    navy: "#0d1132",
    navyDeep: "#0a0d28",
    card: "#161b45",
    line: "#3a4070",
    fieldLine: "#5a6094",
    text: "#ffffff",
    muted: "#d5d7ea",
    accent: "#8ccbf5",
    placeholder: "#9aa0c8",
    error: "#ffb3a8",
  },
  radius: "12px",
  fonts: {
    body: '"Montserrat", system-ui, sans-serif',
    display: '"Special Elite", serif',
  },
  // Phone layout (sticky booking bar) applies at this width and below
  mobile: "(max-width: 700px)",
} as const;

export type AppTheme = typeof theme;
