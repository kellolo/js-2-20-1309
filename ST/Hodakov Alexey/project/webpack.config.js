const MiniCssExtract = require("mini-css-extract-plugin");
const CopyWebpack = require("copy-webpack-plugin");
const HtmlWebpack = require("html-webpack-plugin");
const VueLoader = require("vue-loader/lib/plugin");

module.exports = {
  output: {
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        loader: "file-loader",
        options: {
          outputPath: "img",
          publicPath: "../img",
        },
      },
      {
        test: /\.vue$/i,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtract({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyWebpack({
      patterns: [{ from: "src/assets/imgs", to: "img" }],
    }),
    new HtmlWebpack({
      template: "./public/index.html",
    }),
    new VueLoader(),
  ],
  devServer: {
    port: 8080,
    open: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
