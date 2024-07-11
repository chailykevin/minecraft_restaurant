const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Chaily's Restaurant",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       outputPath: "assets/images",
        //       name: "[name].[ext]",
        //     },
        //   },
        // ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        // use: [
        //   {
        //     options: {
        //       outputPath: "assets/fonts",
        //       name: "[name].[ext]",
        //     },
        //   },
        // ],
      },
      {
        test: /\.webp$/i,
        use: ["webp-loader"],
      },
    ],
  },
};
