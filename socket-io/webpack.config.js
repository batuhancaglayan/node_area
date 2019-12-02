// const path = require('path');
// const nodeExternals = require('webpack-node-externals');

// module.exports = {
//     entry: [
//         'regenerator-runtime/runtime',
//         './src/index.js'
//     ],
//     //watch: false,
//     target: 'node',
//     externals: [nodeExternals()],
//     devtool: 'source-map',
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.js',
//         publicPath: 'build/'
//     },
//     // devServer: {
//     //     watchOptions: {
//     //         ignored: [
//     //             path.resolve(__dirname, 'build'),
//     //             path.resolve(__dirname, 'node_modules')
//     //           ]
//     //         //ignored: '**/.*',
//     //     },
//     // },
//     module: {
//         // noParse: function (content) {
//         //     return /express/.test(content);
//         // },
//         rules: [
//             {
//                 use: 'babel-loader',
//                 exclude: /(node_modules)/,
//                 test: /\.js$/
//             }
//         ]
//     }
// }

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