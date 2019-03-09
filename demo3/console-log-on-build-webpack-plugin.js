const pluginName='ConsoleOnBuildWebpackPlugin'

class ConsoleOnBuildWebpackPlugin{
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log('this  webpack bulid progress is starting');
        })
    }
}

module.exports = ConsoleOnBuildWebpackPlugin