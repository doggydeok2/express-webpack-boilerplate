// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        require('autoprefixer')
      ]
    }
  }
};
const isProduction = process.env.NODE_ENV === "PRODUCTION ";

module.exports = {
  entry: "./public/javascripts/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: "http://localhost:3000/"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          postcssLoader,
          'sass-loader'
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }, {
        test: /.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: './server/views/index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0'
      },
      minify: isProduction ? {
        collapseWhitespace: true,
        useShortDoctype: true,
        removeScriptTypeAttributes: true
      } : false
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      IS_PRODUCTION: isProduction
    })
  ],
  devtool: 'source-map'
}