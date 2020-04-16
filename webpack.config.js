const {
    resolve
} = require('path')

//const HtmlWebPackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
    optimization: {
        minimize: false
    },
    entry: {
        index: resolve('./src/index.ts'),
        //'wrapper-portail': resolve('./src/views/wrapper-portail.ts')
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: ['awesome-typescript-loader?module=es6'],
            exclude: [/node_modules/]
        },
        {
            test: /\.js$/,
            loader: 'source-map-loader',
            enforce: 'pre'

        },
        //{
        //    test: /\.html$/,
        //    use: [{
        //        loader: 'html-loader',
        //        options: {
        //            minimize: !isDevelopment
        //        }
        //    }]
        //}
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']

    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'Wrapper'
    }
    //output: {
    //    path: resolve(__dirname, 'dist'),
    //    filename: 'yourlib.js',
    //    libraryTarget: 'var',
    //    library: 'EntryPoint'
    //}
    //plugins: [
    //    new HtmlWebPackPlugin({
    //        template: './src/index.html',
    //        filename: './index.html'
    //    })
    //]
}

module.exports = config