module.exports = {
    entry: './src/freelancer.js',
    output: {
        filename: './dist/freelancer.js',
        libraryTarget: 'var'
    },
    externals: {
        leaflet: 'L'
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
