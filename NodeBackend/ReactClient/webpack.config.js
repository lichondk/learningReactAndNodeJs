module.exports = {
  loaders: [
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ]
    },
  ],
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'react-hmre']
      },

    }, {
				test: /\.css$/,
				loader: "style-loader!css-loader?module=true&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]",
				exclude: /semantic/
			}, {
				test: /semantic.*\.css$/,
				loader: "style-loader!css-loader?importLoaders=1" //Make sure module=true is not enabled to avoid local:: styles
			}]
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.css'],
    modulesDirectories: [
          'node_modules'
        ]       
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

};
