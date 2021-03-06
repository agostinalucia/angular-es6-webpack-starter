import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
    output: {
        pathinfo: true
    },
    debug: true,
    devtool: '#eval',
    entry: {
        bundle: path.join(__dirname, '/app/app.module.js'),
        vendor: ['angular-mocks', 'angular', 'angular-ui-router'],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
});