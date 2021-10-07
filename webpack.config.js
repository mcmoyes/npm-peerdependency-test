
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000
    },
    devtool: 'inline-source-map',
  entry: './index.js',
  plugins: [new HtmlWebpackPlugin()],
}