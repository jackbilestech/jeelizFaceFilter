const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: "web",
  output: {
    libraryTarget: "var",
    library: "facefilter",
    filename: 'facefilter-web.js',
    path: path.resolve(__dirname, 'dist'),
  },
};