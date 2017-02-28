module.exports = {
    entry: './src/freelancer.js',
    output: {
        filename: './dist/freelancer.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/i
            }
        ]
    }
};
