var path = require('path');


var dist_dir=path.resolve(__dirname,'dist');
var src_dir=path.resolve(__dirname,'src');


module.exports = {
  entry:'./src/main.js',
  
  output: {
    filename: 'bundle.js',
    path: dist_dir
  },

  devServer:{
    contentBase:'./dist'
  },

  module: {
     rules: [
      {
        test: /\.scss$/,
          use: [{
              loader: "style-loader" // 将 JS 字符串生成为 style 节点
          }, {
              loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          }, {
              loader: "sass-loader" // 将 Sass 编译成 CSS
          }]
       },
       //pics loader
      //   {
      //    test: /\.(png|svg|jpg|gif)$/,
      //    use: [
      //      'file-loader',
      //        "file-loader?name=[name].[ext]&publicPath=images/&outputPath=images/"
      //    ]
      // },
         {
          test: /\.json$/,
          use: 'json-loader',

        },
          {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
         test: /\.js$/, 
         exclude: /node_modules/, 
         loader: "babel-loader" ,
         options:{
          presets:[
          'env'
          ]
         }
      },
     ]
   }

  

};