const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function srcPath(subdir) {
  return path.join(__dirname, '..', "src", subdir);
}

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    alias: {
      shared: srcPath('shared'),
      components: srcPath('components'),
      pages: srcPath('pages'),
    },
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  module: {
    rules: [{
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }, ],
      },
      {
        test: /\.s?css$/,
        oneOf: [{
            test: /\.module\.s?css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  url: false,
                }
              },
              "sass-loader"
            ]
          },
          {
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          }
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new MiniCssExtractPlugin()
  ],
}