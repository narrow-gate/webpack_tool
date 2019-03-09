module.exports = {
    mode:'development',
    entry:'./src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts/,
                loader:'ts-loader'
            }
        ]
    }
}

