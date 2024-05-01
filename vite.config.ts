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
    console.log(`id: ${id}`)
    if (id.includes("@tsparticles")) return "vendor_tsparticles";
    if (id.includes("@mui")) return "vendor_mui";
  }
}