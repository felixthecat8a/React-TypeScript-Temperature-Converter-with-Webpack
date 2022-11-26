const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path:path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    //watch:true, //npx webpack
    devServer: {
        port: 8080,
        static: {
            directory:path.resolve(__dirname, 'dist')
        } //npx webpack-dev-server
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js']
    },
    //mode:'production', //npx webpack
    mode:'development' //npx webpack-dev-server
}
