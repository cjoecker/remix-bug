import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	// ssr: {
	// 	noExternal: ["@mui/x-date-pickers/AdapterDateFnsV3"]
	// },
	plugins: [
		cjsInterop({
			dependencies: [
				"@mui/x-date-pickers/AdapterDateFnsV3"
			],
		}),
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
		tsconfigPaths(),
	],
});
