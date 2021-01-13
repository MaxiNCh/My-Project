const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	entry: {
		server: path.resolve(__dirname, 'src/server/server.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist/server'),
		publicPath: '/'	
	},
	target: 'node',
	externals: [nodeExternals()],
	// node: {
	// 	__dirname: false,
	// 	__filename: false
	// },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: 'src/server/db/',
					to: 'db/[name].[ext]',
					toType: 'template'
				}
			]
		})
	]
}