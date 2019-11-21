module.exports = {
  mode: "production",
  entry: "./src/entry.js",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
