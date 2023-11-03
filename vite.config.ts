import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

/** @see {@link https://vitejs.dev/config/} */
export default defineConfig({
	plugins: [react()],
})
