const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = 

{   
    entry: [        
        'regenerator-runtime/runtime',
        './src/index.js'
    ],   
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'       
    }, 
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.js$/
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    externals: [nodeExternals()],
    target: 'node'
};