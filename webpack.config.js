const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // This is default for webpack if you don't specify entry and output
  // entry: './src',
  // output: {
  //   filename: '[name].js',
  //   path: __dirname + '/dist'
  // },
  devServer: {
    port: 3300,
    watchContentBase: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
    }),
  ],
};
