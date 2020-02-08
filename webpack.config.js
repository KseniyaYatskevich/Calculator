/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    'main': './src/index.jsx',    
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      }],
    },
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: [
        /node_modules/,
      ],
    },
    {
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.(jpg|png|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'img',
            name: '[name].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(woff|woff2|ttf|otf|eot)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      }],
    },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
    stats: 'errors-only',
    clientLogLevel: 'none',
  },
};

module.exports = config;
