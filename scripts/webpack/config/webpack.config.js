// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Constants
const { PROJECT_ROOT, SOURCE, BUILD, STATIC } = require('../constants');

/**
 * object
 * function
 * promise
 */
module.exports = () => {
    return {
        mode:    'none',
        devtool: false,
        entry:   [ SOURCE ],
        output:  {
            path:     BUILD,
            filename: 'bundle.js',
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
        ],
    };
};
