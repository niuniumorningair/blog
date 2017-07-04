//项目入口文件
// 导入 express 模块

var express = require('express')

//创建 express 的服务器实例
var app = express()

//托管静态资源文件
app.use('/node_modules',express.static('node_modules'));
//设置模板引擎
app.set('view engine' ,'ejs');
//模板引擎存放的路径
app.set('views','./views');

//渲染首页
app.get('/',(req,res) => {
    res.render('index');
})
//调用 APP.listen 方法，指定端口号并启动服务器
app.listen(3001,function(){
    console.log('Express server running at http://127.0.0.1:3001')
})