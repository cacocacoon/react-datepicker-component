const webpack = require("webpack")
const path = require('path')
const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

const config = {
    entry: APP_DIR + '/app.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'app.js'
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: ['babel-loader', 'eslint-loader'],
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'source-map',
	devServer: {
		inline: true,
		contentBase: BUILD_DIR,
		port: 8008,
		hotOnly: true,
		watchOptions: {
			aggregateTimeout: 1000
		}
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = config