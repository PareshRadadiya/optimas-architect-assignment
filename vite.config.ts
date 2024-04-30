import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/variables.scss";`,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			components: path.resolve(__dirname, './src/components'),
			pages: path.resolve(__dirname, './src/pages'),
			constants: path.resolve(__dirname, './src/constants'),
			layout: path.resolve(__dirname, './src/layout'),
			assets: path.resolve(__dirname, './src/assets'),
		},
	},
});
