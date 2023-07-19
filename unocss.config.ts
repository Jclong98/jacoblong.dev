// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    {
      btn: "rounded-lg bg-stone-100 dark:bg-transparent p-4 transition duration-200 active:scale-95 hover:brightness-75",
    },
    { card: "bg-white dark:bg-stone-900 rounded-lg p-4" },
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.25,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        "jetbrains-mono": "JetBrains Mono",
      },
    }),
    presetTypography({
      cssExtend: {
        hr: {
          background: "rgba(125, 125, 125, 0.4)",
          height: "1px",
        },
        // reset both pre and code first to override default
        "pre,code": {
          background: "",
        },
        pre: {
          background: "#f3f4f6",
        },
        "html.dark pre": {
          background: "#000",
        },
        img: {
          margin: "1rem auto",
          border: "1px solid black",
        },
        "html.dark img": {
          border: "1px solid rgba(120, 113, 108)",
        },
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
