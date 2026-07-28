import { existsSync, readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(value)));
}

const storybookDir = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(storybookDir, "..");

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const fileContent = readFileSync(filePath, "utf8");
  for (const rawLine of fileContent.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf("=");
    if (separatorIndex < 0) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    if (!key || process.env[key] !== undefined) {
      continue;
    }

    const value = line.slice(separatorIndex + 1).trim();
    process.env[key] = value.replace(/^['"]|['"]$/g, "");
  }
}

function loadStorybookEnv(configType) {
  const envFileName =
    configType === "PRODUCTION" ? ".env.storybook-build" : ".env.development";
  loadEnvFile(resolve(packageRoot, envFileName));
}

const config = {
  addons: [
    fileURLToPath(import.meta.resolve("../../../.storybook-config/index.js")),
    fileURLToPath(
      import.meta
        .resolve("../../../.storybook-config/dataLayerListener/index.js")
    ),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  stories: ["../src/**/*.stories.js"],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
  },
  /**
   * Configure Vite proxy for real API data in dev environment.
   * Proxy target is read from env as VITE_API_URL + VITE_SEARCH_API_VERSION.
   * Proxy only API routes to avoid intercepting Storybook/Vite internal assets.
   */
  viteFinal: async (config, { configType }) => {
    loadStorybookEnv(configType);

    const apiUrl = process.env.VITE_API_URL;
    const searchApiVersion = process.env.VITE_SEARCH_API_VERSION;
    const target = `${apiUrl || ""}${searchApiVersion || ""}`;
    const apiPath = `/${(searchApiVersion || "")
      .replace(/^\/+/, "")
      .replace(/\/+$/, "")}`;

    if (!target) {
      throw new Error(
        "Missing Storybook proxy target. Set VITE_API_URL and VITE_SEARCH_API_VERSION in env files."
      );
    }

    config.server = config.server || {};
    config.server.proxy = {
      [apiPath]: {
        target,
        changeOrigin: true,
        secure: false,
        logLevel: "info",
      },
      "/session/token": {
        target,
        changeOrigin: true,
        secure: false,
        logLevel: "info",
      },
      "/webdir-profiles": {
        target,
        changeOrigin: true,
        secure: false,
        logLevel: "info",
      },
    };

    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.esbuildOptions =
      config.optimizeDeps.esbuildOptions || {};
    config.optimizeDeps.esbuildOptions.loader = {
      ...(config.optimizeDeps.esbuildOptions.loader || {}),
      ".js": "jsx",
    };

    return config;
  },
};

export default config;
