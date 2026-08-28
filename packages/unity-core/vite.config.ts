import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';

// Auto-discover component entry points: src/components/*/uds-*.ts
function getComponentEntries() {
  const componentsDir = resolve(__dirname, 'src/components');
  const entries: Record<string, string> = {};

  try {
    const dirs = readdirSync(componentsDir);
    for (const dir of dirs) {
      const dirPath = resolve(componentsDir, dir);
      if (!statSync(dirPath).isDirectory()) continue;

      const files = readdirSync(dirPath);
      for (const file of files) {
        if (file.startsWith('uds-') && file.endsWith('.ts') && !file.includes('.stories.') && !file.includes('.test.')) {
          const name = file.replace('.ts', '');
          entries[name] = resolve(dirPath, file);
        }
      }
    }
  } catch {
    // components dir may not exist yet
  }

  return entries;
}

const componentEntries = getComponentEntries();

export default defineConfig({
  build: {
    lib: {
      entry: {
        'unity-core': resolve(__dirname, 'src/index.ts'),
        ...componentEntries,
      },
      formats: ['es'],
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'unity-core') {
            return 'unity-core.js';
          }
          return `components/${chunkInfo.name}.js`;
        },
        chunkFileNames: 'shared/[name]-[hash].js',
      },
    },
    emptyOutDir: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
});
