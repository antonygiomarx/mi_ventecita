import webpack from "webpack";

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
