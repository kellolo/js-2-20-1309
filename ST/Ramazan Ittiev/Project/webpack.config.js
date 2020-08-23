const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: { loader: 'file-loader' },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './src/assets/imgs', to: 'img' }],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './css/styles.css',
      chunkFilename: '[id].css',
    }),
  ],
};
