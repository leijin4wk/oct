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
    plugins: [
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),   // 服务路径
        compress: true,                                 // 压缩
        host: 'localhost',
        port: 3000
    }
};
