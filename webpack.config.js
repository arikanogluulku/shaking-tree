const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  
  entry:['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '/'),
    filename: "bundle.js",
  },
  resolve:{
    extensions:['.js','.jsx',''], },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["svg-url-loader"],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
            "style-loader", 
            "css-loader", 
            "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
