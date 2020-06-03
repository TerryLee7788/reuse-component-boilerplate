const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                // test: /\.jsx?$/,
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                // /\.(css|scss)$/ or even just /\.css$/
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '',
        filename: 'index.js',
        // This field determines how things are importable when installed from other
        // sources. UMD may not be correct now and there is an open issue to fix this,
        // but until then, more reading can be found here:
        // https://webpack.js.org/configuration/output/#output-librarytarget
        libraryTarget: 'umd',
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
};