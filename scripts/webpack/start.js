
// Core
import webpack from 'webpack';
import chalk from 'chalk';
import DevServer from 'webpack-dev-server';
import hot from 'webpack-hot-middleware';
import openBrowser from 'react-dev-utils/openBrowser';

import getConfig from './config/webpack.dev';

import { HOST, PORT } from  './constants';

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

server
  .listen(PORT, HOST, () => {
    const url = `http://${HOST}:${PORT}`;
    console.log(`
      ${chalk.greenBright('Server listening on')} ${chalk.blueBright(
        url,
    )}`
    );
    openBrowser(url);
  })
  .on('error', (error) => {
        const NEW_PORT = parseInt(PORT, 10) + 1;
        const url = `http://${HOST}:${NEW_PORT}`;
        if (error.code === 'EADDRINUSE') {
          console.log(`
          ${chalk.greenBright('There is EADDRINUSE, trying to start on: ')} ${chalk.blueBright(
            url,
            )}`
          );
          openBrowser(url);
        }
  })
