const path     = require('path');
const webpack  = require('webpack');

const __projectroot = path.resolve(__dirname, '../../');

module.exports = {
    watch: true,


    entry: {
        app: path.resolve(__dirname, 'js', 'index.jsx')
    },


    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        publicPath: '/js/',
        filename: '[name].js'
    },


    module: {
        rules: [

            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {  presets: [ 'es2015', 'react' ]  }
            }

        ],
    },


    resolve: {
        modules: [ 'node_modules' ],

        alias: {
            Src: path.resolve(__projectroot, 'src')
        }
    },


    plugins: [
        new webpack.ProvidePlugin({
            React:    'react',
            ReactDOM: 'react-dom'
        }),
    ],


    devServer: {
        port: 8000,
        contentBase: path.resolve(__dirname, 'public')
    }
};

