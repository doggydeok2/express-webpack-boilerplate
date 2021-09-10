module.exports = {
  "presets": [
    [
      '@babel/preset-env',
      {
          targets: {
            browsers: ['last 2 versions', 'ie >= 11'],
          },
          useBuiltIns: 'usage',
          corejs : {"version": 3, "proposals": true }
      }
    ]
 ]
}