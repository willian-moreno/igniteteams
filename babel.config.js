module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
          root: ['./src'],
          alias: {
            '@@types': './src/@types',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@themes': './src/themes',
            '@utils': './src/utils',
          }
        }
      ]
    ]
  }
}