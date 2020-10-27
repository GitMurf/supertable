const path = require("path");

const entry = {
  'supertable': './src/index.ts',
};

module.exports = {
  entry,

  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
};
