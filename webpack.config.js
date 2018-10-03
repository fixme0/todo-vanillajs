const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (trash, {mode}) => {
  const devMode = mode !== 'production';
  const config = {
    mode: devMode ? 'development' : 'production',
    entry: [
      './src/scripts/app.js', 
      './src/styles/app.sass'
    ],
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/assets',
      filename: 'assets/scripts/bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(sa|sc)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                publicPath: '../images',
                emitFile: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/styles/main.css'
      })
    ]
  };

  return config;
};