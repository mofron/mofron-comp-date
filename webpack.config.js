module.exports = {
    entry: __dirname + '/src/date.js',
    output: {
        path: __dirname + '/dist',
        filename: 'date.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
