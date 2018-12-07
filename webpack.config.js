const path = require('path');


module.exports = {
  entry: './src/index.mjs',
  mode: 'production',
  target: 'node',
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  }
};
