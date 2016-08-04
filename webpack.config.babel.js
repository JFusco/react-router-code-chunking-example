'use strict';

import webpack from 'webpack';
import path from 'path';

const paths = {
	output: path.join(__dirname, '/build'),
	src: './src/js',
	bundles: 'bundles',
	chunks: 'chunks',
	public: '/build/'
};

export default {
	entry: `${paths.src}/index.js`,
	output: {
		path: paths.output,
		filename: `${paths.bundles}/[name].bundle.js`,
		chunkFilename: `${paths.chunks}/[id].chunk.js`,
		publicPath: paths.public
	},
	node: {
		fs: 'empty'
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				exclude: '/node_modules/',
				test: /\.js?$/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: `${paths.bundles}/[name].bundle.js`,
			minChunks: 2
		})
	],
	devServer: {
		historyApiFallback: true
	},
	resolve: {
		extensions: ['', '.js']
	}
};
