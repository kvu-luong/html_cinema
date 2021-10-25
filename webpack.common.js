module.exports = {
  entry: {
    main: "./ui/src/index.js",
    vendor: "./ui/src/assets/js/script.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "../../asset/imgs"
          }
        }
      }
    ]
  }
};
