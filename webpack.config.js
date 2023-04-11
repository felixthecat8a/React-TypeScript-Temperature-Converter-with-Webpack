const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        //path: path.join(__dirname, '/dist'),
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
    ], 
    devServer: {
        port: 3000,
        static: {
            directory:path.resolve(__dirname, 'dist')
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.png']
    },
    //mode:'production', //npx webpack
    mode:'development' //npx webpack-dev-server
}
