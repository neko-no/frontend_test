export const allModes = {
  "light mobile": {
    theme: "light",
    backgrounds: { value: "#ffffff" },
    viewport: 375,
  },
  "dark mobile": {
    theme: "dark",
    backgrounds: { value: "#1a1a1a" },
    viewport: 375,
  },
  "light desktop": {
    theme: "light",
    backgrounds: { value: "#ffffff" },
    viewport: 1280,
  },
  "dark desktop": {
    theme: "dark",
    backgrounds: { value: "#1a1a1a" },
    viewport: 1280,
  },
} as const;
