/**
 * 1. ✓ webpack
 * 2. ✓ webpack config
 * 3. ✓ compiler
 * 4. ✓ init
 */

// Core
const webpack = require('webpack');
const getConfig = require('./config/webpack.config');
const chalk = require('chalk');

const compiler = webpack(getConfig());

compiler.run((errors, stats) => {
    const info = stats.toString({
        hash:     true,
        colors:   true,
        modules:  false,
        children: false,
    });

    console.log(info);
    console.log(chalk.greenBright('✓ Build completed!'));
});
