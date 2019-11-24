const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [
      'regenerator-runtime/runtime',
      './src/index.js'
    ],
    target: 'node',
    externals: [nodeExternals()],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        // noParse: function (content) {
        //     return /express/.test(content);
        // },
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.js$/
            }
        ]
    }
}