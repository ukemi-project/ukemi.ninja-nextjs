const withPlugins = require('next-compose-plugins');
// const withTM = require('next-plugin-transpile-modules');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

module.exports = withPlugins([withOptimizedImages, withFonts, withCSS]);
