// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

/**
 * object
 * function
 * promise
 */
module.exports = (env) => {
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
        ],
    };
};
