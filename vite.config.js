// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/react-city-wise-weather-data/',
//   base:"/",
//   build: {
//     outDir: 'build', // Specify the output directory
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/react-city-wise-weather-data/' : '/', // Set base URL dynamically based on environment
  build: {
    outDir: 'build',
  },
});
