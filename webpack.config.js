const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


let htmlPageNames = ['about'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./ui/src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
  })
});

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './public',
	},
	entry:{
		index: `./ui/asset/js/script.js`
	},
	output: {
		// filename: 'main.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './ui/src/index.html',
			chunks: ['main'],
		}),
	].concat(multipleHtmlPlugins),
	module: {
		rules: [
			{
				test: /\.css$/i,
				loader: 'style-loader',	
			},	
			{
				//change name of class css
				test: /\.css$/i,
				loader: "css-loader",
		       	options: {
			        modules: {
			        	auto: true,
			          	// localIdentName: "[path][name]__[local]--[hash:base64:5]",
			         },
		        },
			},
			{
				// loading images
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				// loading fonts
		        test: /\.(woff|woff2|eot|ttf|otf)$/i,
		        type: 'asset/resource',
		      },
		],
	},
}