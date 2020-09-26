const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './../public/index.html',
            filename: './../index.html'
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: './assets/imgs/',
                    to: '../img/'
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '../img/[name].[ext]',                    
                    publicPath: 'img',
                }
            },
            {
                test: /\.vue$/i,
                loader: 'vue-loader'
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        publicPath: '/js/',
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