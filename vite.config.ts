import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
	},
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
