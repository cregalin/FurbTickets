module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          helpers: './helpers',
          assets: './assets',
          components: './features/components',
          constants: './features/constants',
          models: './features/models',
          screens: './features/screens',
          theme: './features/theme',
          utils: './utils',
          baseServices: './services'
        }
      },
    ],
  ],
  };
};
