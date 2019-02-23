
// Core
const webpack = require('webpack');
const getConfig = require('./config/webpack.config');
const chalk = require('chalk');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const { HOST, PORT } = require('./constants');

const compiler = webpack(getConfig());
const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: 'info',
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: false,
      }),
    );
  },
});

server.listen(PORT, HOST, () => {
  console.log(`
    ${chalk.greenBright('Server listening on')} ${chalk.blueBright(
      `http://${HOST}:${PORT}`,
  )}`
  );
});
