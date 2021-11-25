const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'style.css': [
      path.resolve(__dirname, 'vendor/bootstrap/css/bootstrap.min.css'),
      path.resolve(__dirname, 'assets/css/animated.css'),
      path.resolve(__dirname, 'assets/css/fontawesome.css'),
      path.resolve(__dirname, 'assets/css/owl.css'),
      path.resolve(__dirname, 'assets/css/templatemo-seo-dream.css'),
    ],
    'app.js': [path.resolve(__dirname, 'src/app.js')],
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index-original.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          'url-loader',
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    open: true,
    contentBase: './dist',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
