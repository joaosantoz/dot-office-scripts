/* eslint-disable no-undef */

const devCerts = require("office-addin-dev-certs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = async (env, options) => {
  // const dev = options.mode === "development";
  const config = {
    devtool: "source-map",
    entry: {
      polyfill: ["core-js/stable", "regenerator-runtime/runtime"],
      test: path.resolve(__dirname, "./src/test-taskpane.ts"),
    },
    output: {
      path: path.resolve(__dirname, "testBuild"),
    },
    resolve: {
      extensions: [".ts", ".tsx", ".html", ".js"],
    },
    node: {
      child_process: "empty",
      fs: "empty",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript"],
            },
          },
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: "html-loader",
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          use: "file-loader",
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: "taskpane.html",
        template: path.resolve(__dirname, "./src/test-taskpane.html"),
        chunks: ["polyfill", "test"],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "./../src/taskpane/taskpane.css"),
            to: "taskpane.css",
          },
        ],
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, "testBuild"),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      https: options.https !== undefined ? options.https : await devCerts.getHttpsServerOptions(),
      port: process.env.npm_package_config_dev_server_port || 3000,
    },
  };

  return config;
};
