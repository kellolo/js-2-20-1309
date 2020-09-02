const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const CopyWebpackPlugin=require('copy-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    output:{
        filename: 'js/bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use:{loader:'file-loader'}
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].css',
            chunkFilename:'[id].css'
        }),
        new CopyWebpackPlugin({
            patterns:[
                {from:'./', to:'img'}
            ]
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}