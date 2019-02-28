const HtmlWebpackPlugin= require('html-webpack-plugin')

module.exports = {
    entry: {
        index: "./src/index.js",
        home: "./src/home.js",
        setting:"./src/setting.js",
    },
    mode: "development",
    output: {
      filename:'[name]_[hash:4].js'  /**
       * index_#932429r2jwfi.js
      home_#932429r2jwfi.js
      setting_#932429r2jwfi.js
       */
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}