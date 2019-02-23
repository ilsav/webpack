// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Constants
const { PROJECT_ROOT, SOURCE, BUILD, STATIC } = require('../constants');
const { resolve } = require('path');

/**
 * object
 * function
 * promise
 */
module.exports = () => {
    return {
        mode:    'none',
        devtool: false,
        output:  {
            path:     resolve(__dirname, './build'),
            filename: 'bundle.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title:    'Учим вебпак! 💪🏼🌟🔫',
            }),
            new CleanWebpackPlugin([ 'dist', 'build' ], {
                root:    __dirname,
                verbose: true,
            }),
        ],
    };
};
