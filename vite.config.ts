import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svgrPlugin({
			svgrOptions: {
				icon: true, // enables SVGR's icon mode
			},
		}),
		react(),
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
