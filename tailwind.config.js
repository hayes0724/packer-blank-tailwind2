const isDev = process.env.NODE_ENV !== 'production';

const purgeFiles = [
  './src/**/*.html',
  './src/**/*.liquid',
  './src/**/*.vue',
  './src/**/*.js',
]

module.exports = {
  purge: isDev ? false : purgeFiles,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
