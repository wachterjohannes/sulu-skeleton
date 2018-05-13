const path = require('path');
const webpackConfig = require('./vendor/sulu/sulu/webpack.config.js');

webpackConfig.output.path = path.resolve('public');

module.exports = webpackConfig;
