const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const base = require('./base');

module.exports = mergeWithCustomize({
  customizeObject: customizeObject({
    entry: 'prepend',
  }),
})(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
});
