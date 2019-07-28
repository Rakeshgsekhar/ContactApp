
var webpack = require("webpack")
var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports={
    context : __dirname,
    mode : "production",

    entry : {
        main : "./src/index.js"
    },

    devtool : "source-map",

    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "[name].min.js"
    },

    resolve :{
      extensions:  ['.jsx','.js']
    },

    module : {
        rules : [

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
              },
              {
                  test : /\.(css)$/,
                  use :["style-loader","css-loader"]
              }
        
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })]
};