// module.exports = {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {
//         colors: {
//           'blue': {
//             600: '#2563eb',
//           }
//         }
//       },
//     },
//     plugins: [],
//   }

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // <- this is key for React + TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
