const {
    resolve
} = require('path')

const config = {
    optimization: {
        minimize: false
    },
    entry: {
        index: resolve('./src/index.ts')
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: ['awesome-typescript-loader?module=es6'],
            exclude: [/node_modules/]
        },
        //{
        //    test: /\.js$/,
        //    loader: 'source-map-loader',
        //    enforce: 'pre'
        //}
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']

    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd'
    }
}

module.exports = config