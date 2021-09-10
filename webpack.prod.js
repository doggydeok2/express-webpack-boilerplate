const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const common = require('./webpack.config');

const config = {
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'venders',
          chunks: 'all'
        }
      }
    },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        test: /\.css$/i
      }),
      new TerserWebpackPlugin()
    ]
  },
  mode: 'production'
}

module.exports = merge(common, config);