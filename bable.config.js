// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@lib': './lib',
            '@components': './components',
            '@screens': './app',
            '@assets': './assets',
          },
        },
      ],
      'expo-router/babel',
    ],
  };
};
