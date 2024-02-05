import path from "path";
import type { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "public", "index.html"),
});

const config: Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [htmlWebpackPlugin],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
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
};

export default config;
