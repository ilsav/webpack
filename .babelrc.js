module.exports = (api) => {
  const env = api.env();
  api.cache.never();

  const plugins = ['@babel/plugin-proposal-class-properties'];

  if (env === 'development') {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets: [
      '@babel/react',
      [
        '@babel/env',
        {
          debug: true,
          loose: false,
          spec: true,
          modules: false,
        },
      ],
    ],
    plugins,
  };
};