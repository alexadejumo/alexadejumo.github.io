const Webpack = require("webpack");
module.exports = {
  entry: {
    vendor: "./src/vendor.js",
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|pdf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[contenthash][ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[contenthash][ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // This config allows to use jQuery $ sign
  plugins: [
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
