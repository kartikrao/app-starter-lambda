var path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: {
        hello: './src/hello.ts',
        hola: './src/hola.ts',
    },
    target: 'node',
    module: {
        preLoaders: [
            { test: /\.json$/, loader: 'json' },
        ],
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '']
    },
    output: {
        libraryTarget: 'commonjs',
        externals: [nodeExternals()],
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
};