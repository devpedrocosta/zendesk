const path = require('path');
const fs = require('fs');

const FUNC_DIR = './src/browser/func';

let files = fs.readdirSync(path.resolve(__dirname, FUNC_DIR));

module.exports = {
    mode: 'production',
    entry: files.map(f => path.parse(f)).reduce((entries, file) => {
        entries[file.name] = FUNC_DIR + '/' + file.base;
        return entries;
    }, {}),
    // devtool: 'inline-source-map',
    plugins: [],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/browser/func'),
        library: 'func',
        libraryTarget: 'var',
        libraryExport: 'default'
    },
    optimization: {
        minimize: true
    }
};
