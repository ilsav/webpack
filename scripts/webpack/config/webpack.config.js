// Core
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// Constants
const { PROJECT_ROOT, SOURCE, BUILD, STATIC, HOST, PORT } = require('../constants');

/**
 * object
 * function
 * promise
 */
module.exports = () => {
    return {
        mode:    'none',
        devtool: false,
        entry:   [ SOURCE, 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        output:  {
            path:     BUILD,
            filename: 'bundle.js',
        },
      module: {
         rules: [
           {
             test: /\.css$/,
             use: ['style-loader', 'css-loader'],
           }
         ]
      },
      plugins: [
            new HtmlWebpackPlugin({
                template: `${STATIC}/template.html`,
                title:    'Учим вебпак! 💪🏼🌟🔫',
            }),
            new CleanWebpackPlugin([ 'dist', 'build' ], {
                root:    PROJECT_ROOT,
                verbose: true,
            }),
            new HotModuleReplacementPlugin(),
            new OpenBrowserPlugin({
              url: `http://${HOST}:${PORT}`,
              browser: 'Google Chrome',
            })
        ],
    };
};
