const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;

const { dependencies, devDependency } = require('./package.json');

const packagesToBeShared = [
    'react',
    'react-dom',
    'react-router-dom'
]

module.exports = async (_, { mode = 'development' }) => {
    return {
        entry: path.join(__dirname, 'src', 'index.jsx'),
        target: 'web',
        mode,
        output: {
            path: path.join(__dirname, 'build'),
            publicPath: 'auto',
            chunkFilename: 'js/[id].[contenthash].js',
            filename: 'js/[name].[contenthash].js',
            clean: true,
        },
        devServer: {
            hot: true,
            open: true,
            historyApiFallback: true,
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 3000,
        },
        resolve: {
            modules: [
                path.join(__dirname, 'src'), 'node_modules'
            ],
            extensions: ['.css', '.js', '.jsx', '.scss'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    include: path.resolve(__dirname, 'src'),
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html'),
            }),

            new ModuleFederationPlugin({
                name: 'HostApp',
                filename: 'hostApp.js',
                shared: {
                    ...packagesToBeShared.reduce((prev, curr) => {
                        const newPackage = prev;
                        newPackage[curr] = {
                            singleton: true,
                            requiredVersion: dependencies[curr]
                        };
                        return newPackage;
                    }, {})
                },
                remotes: {
                    'child1': 'ChildApp1@http://localhost:3001/childapp-1-remote.js',
                    'child2': 'ChildApp2@http://localhost:3002/childapp-2-remote.js'
                }
            })
        ],
    };
};