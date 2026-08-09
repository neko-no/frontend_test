export const allModes = {
  mobile: {
    viewport: 375,
  },
  table: {
    viewport: 768,
  },
  desktop: {
    viewport: 1280,
  },
  light: {
    theme: "light",
    backgrounds: {value: "#ffffff"},
  },
  dark: {
    theme: "dark",
    backgrounds: {value: "#1a1a1a"},
  },
} as const;
