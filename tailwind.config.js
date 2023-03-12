/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'red-wine': '#1A0000',
        'yellow-golden': '#CE9729',
        'white-for-bg': '#F5F3F0',
        'grey-dark': '#282828',
        grey: '#505050',
        'grey-light': '#C8C8C8',
      },
    },
    fontFamily: {
      norican: ['Norican'],
      'Alfa-Slab-One': ['Alfa Slab One'],
      noto: ['Noto Sans'],
    },
  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    require('flowbite/plugin'),
  ],
};
