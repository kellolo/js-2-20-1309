// в webpack require("") это импорт
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// для самокопирования изо в dist
const CopyWebpackPlugin = require("copy-webpack-plugin");
// сборка html
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");
// в webpack require module.exports = {} это экспорт
module.exports = {
  // для сборки файлов js в опред место. bundle `связка` станд назв для собран js файлам
  output: {
    filename: "js/bundle.js",
  },
  // "стандарт настр" - разобраться
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // для работы файла loader
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: { loader: "file-loader" },
      },
    ],
  },
  plugins: [
    // так же для сборки css передаем объекты с пунктами в качестве настройки
    new MiniCssExtractPlugin({
      // для того чтобы все файлы в стилях прердавал в папку dist/css с тем же названием
      filename: "css/[name].css",
      // для большого кол-ва файлов
      chunkFilename: "[id].css",
    }),
    // для самокопирования изо в папку dist
    // $$ npm i -D copy-webpack-plugin
    new CopyWebpackPlugin({
      // массив с объектом с указанием `из` чего `к` чему копируем
      patterns: [{ from: "./src/assets/imgs", to: "img" }],
    }),
    // объявляем то что подключили выше. можем не указывать на index.html так как одноименно
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
