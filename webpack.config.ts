import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "public", "index.html"),
});

const devServer: DevServerConfiguration = {
  historyApiFallback: true,
  open: true,
};

const config: Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
    publicPath: "/",
  },
  plugins: [htmlWebpackPlugin],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer,
};

export default config;
