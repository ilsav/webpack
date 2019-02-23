// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:    'none',
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            template: './static/template.html',
            title:    'Учим вебпак! 💪🏼🌟🔫',
        }),
    ],
};
