const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
                test: /\.(png|jpe?g|svg|gif)$/i,
                use: { loader: 'file-loader' }
            },
            {
                test: /\.vue$/i,
                loader: 'vue-loader'
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
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 8080,
        open: false,
        proxy: {
            '/api': { 
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true
            }
        }
    }
}