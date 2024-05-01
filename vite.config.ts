import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  build: {
    rollupOptions: {
      output: {
        manualChunks
      }
    }
  }
})


function manualChunks(id: string) {
  if (id.includes("node_modules")) {
    if (id.includes("@mui")) return "vendor_mui";
    if (id.includes("@tsparticles")) return "vendor_tsparticles";
    return "vendor"; // all other package goes here
  }
}