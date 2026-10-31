import { existsSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";

// The CSS refers to the art as ../img/<file> and `build` copies src/img to dist/img.
// Vite resolves url() in @imported partials (src/components/*) relative to the entry, src/scss/components-homepage.scss.
// Vite would otherwise emit a copy of each image next to the CSS and rewrite the URL to it.
// Relies on: the SCSS url() art paths, `assetFileNames: "css/[name].[ext]"` (assets land in css/),
// and src/img holding every referenced file. Throws if any of that stops holding.
const ART_ASSET = /^css\/(.+\.(?:png|svg))$/;
const artFromDistImg = () => ({
  name: "art-from-dist-img",
  enforce: "post",
  generateBundle(_, bundle) {
    // The Storybook build shares this config; only the package build (its entries) is checked.
    const isPackageBuild = Object.values(bundle).some(
      o => o.type === "chunk" && o.isEntry && o.name === "components-homepage"
    );
    if (!isPackageBuild) return;
    const art = Object.keys(bundle).filter(name => ART_ASSET.test(name));
    if (!art.length) {
      throw new Error(
        "art-from-dist-img: no css/*.png|svg asset was generated; the CSS art url() or assetFileNames changed."
      );
    }
    const css = bundle["css/components-homepage.css"];
    if (!css) {
      throw new Error(
        "art-from-dist-img: css/components-homepage.css is missing or renamed."
      );
    }
    art.forEach(name => {
      const file = name.match(ART_ASSET)[1];
      if (!existsSync(resolve(__dirname, "src/img", file))) {
        throw new Error(`art-from-dist-img: src/img/${file} does not exist.`);
      }
      if (!String(css.source).includes(`../img/${file}`)) {
        throw new Error(
          `art-from-dist-img: the CSS does not reference ../img/${file}.`
        );
      }
      delete bundle[name];
    });
  },
});

const c = {
  root: resolve(__dirname),
  plugins: [artFromDistImg()],
  experimental: {
    renderBuiltUrl: filename =>
      /^css\/.+\.(png|svg)$/.test(filename)
        ? `../img/${filename.slice("css/".length)}`
        : undefined,
  },
  build: {
    emptyOutDir: true,
    sourcemap: true,
    cssMinify: true,
    cssCodeSplit: true,
    outDir: "dist",
    rollupOptions: {
      treeshake: true,
      // Keep the entry's exports (initVideoControls); an app build would drop them.
      preserveEntrySignatures: "strict",
      input: {
        "components-homepage": resolve(__dirname, "src/js/index.js"),
        "components-homepage.style": resolve(
          __dirname,
          "src/scss/components-homepage.scss"
        ),
      },
      output: {
        entryFileNames: "js/[name].[format].js",
        chunkFileNames: "js/[name].[format].js",
        assetFileNames: "css/[name].[ext]",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "legacy",
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
          "legacy-js-api",
        ],
      },
    },
  },
};

export default defineConfig(c);
