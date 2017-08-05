var path = require('path');


var dist_dir=path.resolve(__dirname,'dist');
var src_dir=path.resolve(__dirname,'src');


module.exports = {
  entry:'./src/index.js',
  
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
        test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       //pics loader
        {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
      },
         {
          test: /\.json$/,
          use: 'json-loader'
        },
          {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
         test: /\.js$/, 
         exclude: /node_modules/, 
         loader: "babel-loader" 
      },
     ]
   }

  

};