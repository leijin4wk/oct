const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
 　　//模块的入口文件
    entry: {
        path: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './public/index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),   // 服务路径
        compress: true,                                 // 压缩
        host: 'localhost',
        port: 3000
    }
};
