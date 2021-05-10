const path = require('path')
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',  // 入口文件
  output: {                                 // 输出属性
    path: path.resolve(__dirname, 'dist'),  // 输出路径
    filename: 'bundle.js'                   // 输出文件名
  },
  module: {   
    // loader 使用规则配置 （由于webpack只能识别js、JSON文件，其他需要借助第三方loader）
    rules: [  // loader 规则
      {
        test: /\.css$/,         // 匹配规则 （哪些文件需要转换）
        use: ['style-loader', 'css-loader']     // loader (使用什么loader转换)
      }
    ]
  },
  devServer: {    // 开发服务器
    port: '8080',   // 指定端口
    contentBase: path.join(__dirname, 'src/index.html'),  // 内容来源(模版页面)
    open: true,   // 编译完成直接打开浏览器
  },
  plugins: [  // 插件
    new htmlwebpackplugin({   // 内存中生成模版页面 
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ]
}