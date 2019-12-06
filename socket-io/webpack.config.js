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

// const path = require('path');
// const nodeExternals = require('webpack-node-externals');

// module.exports = 

// {   
//     entry: [        
//         'regenerator-runtime/runtime',
//         './src/index.js'
//     ],   
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.js',
//         publicPath: 'build/'       
//     }, 
//     module: {
//         rules: [
//             {
//                 use: 'babel-loader',
//                 exclude: /(node_modules)/,
//                 test: /\.js$/
//             }
//         ]
//     },
//     stats: {
//         colors: true
//     },
//     devtool: 'source-map',
//     externals: [nodeExternals()],
//     target: 'node'
// };

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = 

{   
    entry: [        
        // 'regenerator-runtime/runtime',
        './src/index.js'
    ],   
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'       
    }, 
    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "index")
                ],
                // exclude: [
                //     path.resolve(__dirname, "app/demo-files")
                // ],
                loader: "babel-loader",
                // the loader which should be applied, it'll be resolved relative to the context
                options: {
                    presets: ["es2015"]
                },
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".js", ".json", ".jsx", ".css"]
    },
    stats: {
        colors: true
    },   
    devtool: 'source-map',
    externals: [nodeExternals()],
    target: 'node'
};