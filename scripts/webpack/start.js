/**
 * 1. webpack
 * 2. webpack dev server
 * 3. webpack hot middleware
 * 4. webpack config
 * 5. compiler
 * 6. init
 */

// Core
const webpack = require('webpack');
const getConfig = require('./config/webpack.config');
const chalk = require('chalk');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');

const compiler = webpack(getConfig());
