// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

let pathsToClean = [
  'dist',
  'build',
];

let cleanOptions = {
  // root: '/full/webpack/root/path',
}


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
            new CleanWebpackPlugin(
                pathsToClean,
                cleanOptions,
            ),
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title:    'Учим вебпак! 💪🏼🌟🔫',
            }),
        ],
    };
};
