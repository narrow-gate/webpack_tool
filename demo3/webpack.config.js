const ConsoleOnBuildWebpackPlugin=require('./console-log-on-build-webpack-plugin')

module.exports = {
    mode:'development',
    plugins: [
        new ConsoleOnBuildWebpackPlugin()
    ]
}