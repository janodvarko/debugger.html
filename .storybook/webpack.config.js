"use strict";

const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "devtools-foo": path.join(__dirname, "../../../../mozilla.org/fx-team/devtools"),
      "devtools": path.join(__dirname, "../../../../mozilla.org/fx-team/devtools"),
      "devtools-sham": path.join(__dirname, "./public/js/lib/devtools-sham"),
      "sdk": path.join(__dirname, "./public/js/lib/devtools-sham/sdk")
    },
    extensions: ["", ".js", ".jsm"],
    root: path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/, loader: "json-loader" },
    ]
  }
};
