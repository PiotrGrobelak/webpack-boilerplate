const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: {
    main: [`${paths.src}/js/index.js`],
  },
  output: {
    path: paths.build,
    filename: '[name].[hash:6].js',
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name][hash:8].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          globOptions: {
            ignore: ['**/*.DS_Store'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: `${paths.src}/pages/index.html`,
      favicon: `${paths.public}/favicon.png`,
      filename: 'index.html',
      inject: true,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: `${paths.src}/pages/nextPage.html`,
      favicon: `${paths.public}/favicon.png`,
      filename: 'nextPage.html',
      inject: true,
      chunks: ['main'],
    }),
  ],
};
