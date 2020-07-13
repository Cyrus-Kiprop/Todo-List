const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: ['file-loader'],
      },
    ],
  },
};
