const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //require for import
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { // for export
  output: {
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: { loader: 'file-loader' }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/imgs', to: 'img' }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}