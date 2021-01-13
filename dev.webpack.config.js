const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: [ "./src/public/index.js"]
	},
	output: {
		path: path.join(__dirname, 'dist/public'),
		publicPath: "/",
		filename: "js/[name].js",
		assetModuleFilename: 'img/[name][ext][query]'
	},
	mode: 'development',
	target: 'web',
	module: {
		rules: [
			{
				test: /index\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/public/index.html',
			filename: 'index.html',
			excludeChunks: ['components']
		}),
		new CopyPlugin({
			patterns: [
				{
					from: './src/public/img/',
					to: './img/'
				}
			]
		})
	]
}