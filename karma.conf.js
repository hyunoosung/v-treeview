module.exports = function (config) {
    config.set({
        browsers: [
            'PhantomJS',
        ],
        frameworks: ['jasmine'],
        files: ['spec/**/*.js'],
        reporters: ['spec'],
        preprocessors: {
            'spec/**/*.js': ['webpack']
        },
        webpack: {
            module: {
                rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }, {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }]
            }
        },
        singleRun: true
    })
}