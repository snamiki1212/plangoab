module.exports = {
  presets: ['next/babel'],
  overrides: [
    {
      include: ['./node_modules'],
      plugins: [
        [
          'babel-plugin-transform-require-ignore',
          {
            // REF: https://qiita.com/yk2220s/items/8ed4d781412f6c4e9c45
            extensions: ['.css'],
          },
        ],
      ],
    },
  ],
}
