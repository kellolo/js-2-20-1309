const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'img',
            },
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
                { from: './src/assets/imgs', to: 'img' }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}