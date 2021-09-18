const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const minicssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry:['./src/app/index.js'],
  mode:'production',
  output:{
    path:path.resolve(__dirname, '../build'),
    filename:'js/bundle.js'
  },

  devServer:{
    host: '0.0.0.0',
    port:8000
  },

  module:{
    rules:[
      {
        test: /\.(sa|sc|c)ss$/, 
        use: [      
          minicssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(svg)$/,
        use:[{
          loader: 'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'static/icons',
            useRelativePath:true
          }
        }]
      },

      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use:[{
          loader: 'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'static/images',
            useRelativePath:true
          }
        }]
      },
      
    ]
  },

  //devtool: 'eval-source-map',

  plugins:[
    new htmlWebpackPlugin({
      template:'./src/index.html',
      minify:{
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),

    new minicssExtractPlugin({
      filename: './css/style.css'
    })
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  }

}