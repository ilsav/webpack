/**
 * 1. ✓ webpack
 * 2. ✓ webpack config
 * 3. ✓ compiler
 * 4. init
 */

// Core

const webpack = require('webpack');
const getConfig = require('./config/webpack.config');

const compiler = webpack(getConfig());
