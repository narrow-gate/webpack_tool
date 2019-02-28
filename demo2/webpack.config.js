const htmlWebpackPlugin=require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        index:'./src/index.js'
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /.css$/,
                use:
                    ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                }) 
            },
            {
                test: /.less$/,
                use:
                ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","less-loader"]
            }) 
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("styles.css"),
    ]
}