import { defineConfig, UserConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import { resolve } from 'path';
import { createMpaPlugin, createPages } from "vite-plugin-virtual-mpa";
import { configRoutes } from './src/routes/config';

const config = defineConfig(({ mode }):UserConfig =>
  {
    const packageRoot = process.cwd();
    const workspaceRoot = searchForWorkspaceRoot(packageRoot);
    const serverOptions = {
      port: 4200,
      host: "localhost.asu.edu",
      https: true,
      middlewares: (server) => {
        server.use('/', (req, _, next) => {

          if (req.url.endsWith("/") || req.url.endsWith(".html")) {
            req.url = '/index.html';
          }
          next()
        });

        return server
      },
      fs: {
        allow: [
          workspaceRoot,
          '..',
        ],
      },
    };

    return {
      appType: "mpa",
      root: './src',
      base: './',
      plugins: [
        react(),
        mkcert(),
        createMpaPlugin({
          pages: createPages(configRoutes),
          transformHtml(html, ctx) {
            return {
              html,
              tags: [
                {
                  tag: "title",
                  injectTo: "head",
                  children: ctx.page.data.title,
                },
              ],
            };
          },
        }),
      ],
      publicDir: resolve(packageRoot, 'public'),
      assetsInclude: ['**/*.ico'],
      server: serverOptions,
      preview: serverOptions,
      build: {
        outDir: resolve(workspaceRoot, 'build'),
        emptyOutDir: false,
        sourcemap: true,
      },
      resolve: {
        alias: {
          '~': resolve(__dirname, './src'),
        },
      }
    } as UserConfig;
  }
);

export default config;
