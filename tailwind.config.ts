import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 20s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      fontSize: {
        "display-biglarge": ["72px", "72px", { letterSpacing: "-2px" }], // Display BigLarge
        "display-large": ["57px", "64px", { letterSpacing: "-2px" }], // Display Large
        "display-medium": ["45px", "52px", { letterSpacing: "0" }], // Display Medium
        "display-small": ["36px", "44px", { letterSpacing: "0" }], // Display Small

        "headline-large": ["32px", "40px", { letterSpacing: "-0.4px" }], // Headline Large
        "headline-medium": ["28px", "36px", { letterSpacing: "-0.4px" }], // Headline Medium
        "headline-small": ["24px", "32px", { letterSpacing: "0" }], // Headline Small

        "tag-large": ["18px", "24px", { letterSpacing: "0.5px" }], // Tag Large
        "tag-medium": ["14px", "16px", { letterSpacing: "0.5px" }], // Tag Medium
        "tag-small": ["14px", "16px", { letterSpacing: "0.5px" }], // Tag Small

        "title-large": ["22px", "28px", { letterSpacing: "0" }], // Title Large
        "title-medium": ["16px", "24px", { letterSpacing: "0.15px" }], // Title Medium
        "title-small": ["14px", "20px", { letterSpacing: "0.1px" }], // Title Small

        "label-large": ["14px", "20px", { letterSpacing: "0" }], // Label Large
        "label-medium": ["12px", "16px", { letterSpacing: "0" }], // Label Medium
        "label-small": ["11px", "16px", { letterSpacing: "0.1px" }], // Label Small

        "body-large": ["16px", "24px", { letterSpacing: "0" }], // Body Large
        "body-medium": ["14px", "20px", { letterSpacing: "0" }], // Body Medium
        "body-small": ["12px", "16px", { letterSpacing: "0" }], // Body Small
      },
      boxShadow: {
        box: "0px 4px 7px 0px rgba(142, 121, 210, 0.06)",
      },
    },
  },
};
