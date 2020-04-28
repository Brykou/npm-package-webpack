const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  externals: {
    react: "commonjs react", // Exclude React from bundle and use root app react instead
  },
};

module.exports = webpackConfig;
