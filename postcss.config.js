const preset = require('postcss-preset-env');
const autoPrefixer = require('autoprefixer');

module.exports = {
  plugins: [preset, autoPrefixer],
};
