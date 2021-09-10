const StyleLintPlugin = require('stylelint-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

const config = {
  mode: 'development',
  plugins: [
    new StyleLintPlugin()
  ]
};

module.exports = merge(common, config)