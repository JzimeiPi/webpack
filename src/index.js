// import _ from 'lodash'
// import './css/index.css'

function component() {
    const el = document.createElement('div')
    // 1、 _ 要确保在html文件中以script标签的方式引入，因为这里使用的 _ 是假定在全局引入的
    // 问题：1、不直观，我们从这个js文件中并看不出使用了什么库
    //      2、如果依赖不存在或引入顺序错误，程序无法正常运行
    //      3、引入的依赖没用到，浏览器也会下载这个库，导致存在多余的代码
    // 解决： 使用webpack
    //      1、需要在这个文件打包 lodash 依赖，所以要在本地安装并导入依赖
    el.innerHTML = _.join(['Hello', 'webpack', 'webpack.config.js'])
    // 添加一个css样式，体验 编译 .css 文件
    el.classList.add('div-glod')
    
    return el
}
document.body.appendChild(component())